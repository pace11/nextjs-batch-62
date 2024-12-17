import { FORM_ONBOARDING } from "@/constants";
// import ContainerHome from "@/container/container-home";
import Layout from "@/layout";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const ContainerHome = dynamic(() => import("@/container/container-home"));

export default function Home() {
  useEffect(() => {
    async function fetchingData() {
      const response = await (
        await fetch("/api/hello", {
          headers: {
            "api-token": "service-ryan",
          },
        })
      ).json();

      const response2 = await (await fetch("/api/todos/2")).json();

      console.log("response => ", response);
      console.log("response 2 => ", response2);
    }
    fetchingData();
  }, []);

  return (
    <Layout
      metaTitle="Nextjs - Home"
      metaDescription="Aliquip officia occaecat consectetur aliqua duis dolore ipsum sint officia labore. Tempor est enim dolor minim mollit voluptate. Incididunt nostrud non elit dolor sit ullamco."
    >
      <ContainerHome dataForm={FORM_ONBOARDING} />
    </Layout>
  );
}
