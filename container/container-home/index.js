import Form from "@/components/form";

export default function ContainerHome({ dataForm = [] }) {
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
    </div>
  );
}
