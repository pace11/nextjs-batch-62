import Form from "@/components/form";
import Link from "next/link";
// import Image from "next/image";

export default function ContainerHome(props) {
  const { dataForm, notes } = { ...props };

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
      <ul>
        {notes?.map((item) => (
          <Link href={`/notes/${item.id}`} key={item.id}>
            <li style={{ border: "1px solid black", padding: "10px" }}>
              <p>{item?.title}</p>
              <p>{item?.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
