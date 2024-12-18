import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function Notes() {
  const router = useRouter();
  const [notes, setNotes] = useState();

  const fetchingData = useCallback(async () => {
    const res = await fetch("https://service.pace-unv.cloud/api/notes");
    const listNotes = await res.json();
    setNotes(listNotes);
  }, [])

  useEffect(() => {
    
    fetchingData()
  }, [fetchingData]);

  const HandleDelete = async (id) => {
    fetchingData({ 
        url: `https://service.pace-unv.cloud/api/notes/delete/${id}`,
        method: 'DELETE'
    }).then((res) => {
        console.log('res => ', res)
    })
    // try {
    //  const response = await fetch(
    //   `https://service.pace-unv.cloud/api/notes/delete/${id}`,
    //   {
    //    method: "DELETE",
    //   });
    //   const result = await response.json();
    //   if (result?.success) {
    //    router.reload();
    //     // fetchingData()
    //   }
    // } catch (error) {}
   };

   console.log('notes => ', notes)

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Box padding="5">
          <Flex justifyContent="end">
            <Button
              colorScheme="blue"
              onClick={() => router.push("/notes/add")}
            >
              Add Notes
            </Button>
          </Flex>
          <Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={5}>
              {notes?.data?.map((item) => (
                <GridItem key={item.id}>
                  <Card>
                    <CardHeader>
                      <Heading>{item?.title}</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>{item?.description}</Text>
                    </CardBody>
                    <CardFooter justify="space-between" flexWrap="wrap">
                      <Button
                        onClick={() => router.push(`/notes/edit/${item?.id}`)}
                        flex="1"
                        variant="ghost"
                      >
                        Edit
                      </Button>
                      <Button flex="1" colorScheme="red" onClick={() => HandleDelete(item?.id)} >
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Box>
      </LayoutComponent>
    </>
  );
}
