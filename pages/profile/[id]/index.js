import { FORM_ONBOARDING_PROFILE } from "@/constants";
import ContainerHome from "@/container/container-home";
import Layout from "@/layout";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter()

  console.log('router => ', router)

  return (
    <Layout
      metaTitle="Nextjs - Profile"
      metaDescription="ini desc untuk page profile"
    >
      <p>Profile / {router.query.id}</p>
      <ContainerHome dataForm={FORM_ONBOARDING_PROFILE} />
    </Layout>
  );
}