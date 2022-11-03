import ParentClientComponent from "./parent-client-component";

export default function Home() {
  console.log("this is page.tsx");

  return (
    <div>
      this is page.tsx
      <ParentClientComponent></ParentClientComponent>
    </div>
  )
}
