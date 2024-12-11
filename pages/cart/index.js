import { FORM_ONBOARDING_PROFILE } from "@/constants";
import ContainerHome from "@/container/container-home";
import Layout from "@/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Profile() {
  const router = useRouter();
  console.log("router => ", router);

  const [qty, setQty] = useState();

  useEffect(() => {
    setQty(Number(router.query.qty))
  }, [router.query.qty])

  return (
    <Layout
      metaTitle="Nextjs - Profile"
      metaDescription="ini desc untuk page profile"
    >
      <button onClick={() => router.back()}>Back</button>
      <p>Switch keyboard {qty}</p>
      <button
        onClick={() => {
          setQty(qty + 1);
          router.push({
            query: {
              qty: qty + 1,
            },
          });
        }}
      >
        Add Qty
      </button>
      <ContainerHome dataForm={FORM_ONBOARDING_PROFILE} />
    </Layout>
  );
}
