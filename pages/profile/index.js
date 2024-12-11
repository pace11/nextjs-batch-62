import { FORM_ONBOARDING_PROFILE } from "@/constants";
import ContainerHome from "@/container/container-home";
import Layout from "@/layout";

export default function Profile() {

  return (
    <Layout
      metaTitle="Nextjs - Profile"
      metaDescription="ini desc untuk page profile"
    >
      <p>Profile</p>
      <ContainerHome dataForm={FORM_ONBOARDING_PROFILE} />
    </Layout>
  );
}
