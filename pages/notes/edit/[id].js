import {
    Button,
    Card,
    Grid,
    GridItem,
    Heading,
    Input,
    Text,
    Textarea,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function EditNotes() {
  const router = useRouter();
  const { id } = router?.query;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const HandleSubmit = async (values) => {
    try {
      const response = await fetch(
        `https://service.pace-unv.cloud/api/notes/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await response.json();
      if (result?.success) {
        router.push("/notes");
      }
    } catch (error) {}
  };

  useEffect(() => {
    async function fetchingData() {
      const res = await fetch(`https://service.pace-unv.cloud/api/notes/${id}`);
      const listNotes = await res.json();
      reset({
        description: listNotes?.data?.description,
        title: listNotes?.data?.title,
      });
    }
    fetchingData();
  }, [id, reset]);

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Card margin="5" padding="5">
          <Heading>Edit Notes</Heading>
          <form onSubmit={handleSubmit(HandleSubmit)}>
          <Grid gap="5">
            <GridItem>
              <Text>Title</Text>
              <Input {...register("title")} required />
            </GridItem>
            <GridItem>
              <Text>Description</Text>
              <Textarea {...register("description")} required />
            </GridItem>
            <GridItem>
              <Button type="submit" colorScheme="blue">
                Submit
              </Button>
            </GridItem>
          </Grid>
          </form>
        </Card>
      </LayoutComponent>
    </>
  );
}
