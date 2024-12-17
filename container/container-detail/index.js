// import Image from "next/image";

export default function ContainerHome(props) {
  const { notes } = { ...props };

  return (
    <div>
      <ul>
        <li style={{ border: "1px solid black", padding: "10px" }}>
          <p>{notes?.title}</p>
          <p>{notes?.description}</p>
        </li>
      </ul>
    </div>
  );
}
