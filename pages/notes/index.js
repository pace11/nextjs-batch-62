import Layout from "@/layout";
import dynamic from "next/dynamic";
import { useState } from "react";

const ContainerHome = dynamic(() => import("@/container/container-home"));

export default function Notes({ notes }) {
  const [listNotes, setNotes] = useState(notes?.data || [])
  
  return (
    <Layout
      metaTitle="Nextjs - Notes"
      metaDescription="List Notes Testing"
    >
      <ContainerHome notes={listNotes} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://service.pace-unv.cloud/api/notes')
  const notes = await res.json()
  return { props: { notes } }
}
