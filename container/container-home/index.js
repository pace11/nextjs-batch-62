import Form from "@/components/form";
// import Image from "next/image";

export default function ContainerHome(props) {
  const { dataForm } = {...props}

  return (
    <div>
      {dataForm?.map((item, index) => (
        <Form
          key={index}
          type={item.type}
          label={item.label}
          handleClick={() =>
            console.log("hasil click dari container home ----->")
          }
        />
      ))}
      {/* <Image src="/images/next.jpeg" quality={10} width="1000" height="600" priority alt="image nextjs" /> */}
      <img src="/images/next.jpeg" alt="image nextjs" />
    </div>
  );
}