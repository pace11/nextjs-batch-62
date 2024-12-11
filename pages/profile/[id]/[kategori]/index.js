// import { FORM_ONBOARDING_PROFILE } from "@/constants";
// import ContainerHome from "@/container/container-home";
import Layout from "@/layout";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter()
  const { id, kategori } = router.query

  const response = {
    meta: {},
    data: {
      user: {
        name: '',
        age: 0
      }
    },
    message: {}
  }

  if (!response.data) return <Layout>data tidak tersedia</Layout>

  return (
    <Layout
      metaTitle="Nextjs - Profile"
      metaDescription="ini desc untuk page profile"
    >
      <p>Profile / {router.query.id} / {router.query.kategori} </p>
      {/* <ContainerHome dataForm={FORM_ONBOARDING_PROFILE} /> */}
      <p>Nama: {response.data.user.name}</p>
      <p>Umur: {response.data.user.age}</p>

    </Layout>
  );
}