import Layout from "@/layout";
import dynamic from "next/dynamic";
import { useState } from "react";

const ContainerNotes = dynamic(() => import("@/container/container-notes"));

export default function Notes({ notes }) {
  const [listNotes, setNotes] = useState(notes?.data || [])
  
  return (
    <Layout
      metaTitle="Nextjs - Notes SSG"
      metaDescription="List Notes SSG Testing"
    >
      <ContainerNotes notes={listNotes} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://service.pace-unv.cloud/api/notes')
  const notes = await res.json()
  return { props: { notes }, revalidate: 5 }
}
