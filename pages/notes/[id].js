import Layout from "@/layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";

const ContainerDetail = dynamic(() => import("@/container/container-detail"));

export default function Notes({ notes }) {
  const router = useRouter();
  const [listNotes, setNotes] = useState(notes?.data || {});

  return (
    <Layout metaTitle="Nextjs - Notes detail" metaDescription="List Notes detail Testing">
      <button onClick={() => router.back()}>Back</button>
      <ContainerDetail notes={listNotes} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://service.pace-unv.cloud/api/notes/${id}`);
  const notes = await res.json();
  return { props: { notes } };
}
