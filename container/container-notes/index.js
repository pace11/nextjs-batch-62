import Link from "next/link";
// import Image from "next/image";

export default function ContainerHome(props) {
  const { notes } = { ...props };

  return (
    <div>
      <ul>
        {notes?.map((item) => (
          <Link href={`/notes/ssg/${item.id}`} key={item.id}>
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
