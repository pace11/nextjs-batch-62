import { FORM_ONBOARDING } from "@/constants";
import ContainerHome from "@/container/container-home";
import Layout from "@/layout";

export default function Home() {
  
  return (
    <Layout
      metaTitle="Nextjs - Home"
      metaDescription="Aliquip officia occaecat consectetur aliqua duis dolore ipsum sint officia labore. Tempor est enim dolor minim mollit voluptate. Incididunt nostrud non elit dolor sit ullamco."
    >
      <ContainerHome dataForm={FORM_ONBOARDING}/>
    </Layout>
  );
}
