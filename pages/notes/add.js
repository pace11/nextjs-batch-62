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
import { useForm } from "react-hook-form";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function AddNotes() {
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onHandleSubmit = async (values) => {
    try {
      const response = await fetch("https://service.pace-unv.cloud/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (result?.success) {
        router.push("/notes");
      }
    } catch (error) {}
  };

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Card margin="5" padding="5">
          <Heading>Add Notes</Heading>
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <Grid gap="5">
              <GridItem>
                <Text>Title</Text>
                <Input name="title" {...register("title")} />
              </GridItem>
              <GridItem>
                <Text>Description</Text>
                <Textarea name="description" {...register("description")} />
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
