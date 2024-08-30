import { db } from "@/db";
import notFound from "./not-found";
import Link from "next/link";
// import { notFound } from "next/navigation";
interface snipetShowPageProps {
  params: {
    id: string;
  };
}

export default async function snipetShowPage(props: snipetShowPageProps) {
  await new Promise((r) => setTimeout(r, 2000)); //2 seconds wait it
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!snippet) return notFound();
  //   console.log("snippet of this id : ", snippet);
  return (
    <>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{`snippet title is ${snippet.title}`}</h1>
      <div className="flex gap-2">
        <Link href={`/snippet/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
        <button className="p-2 border rounded">Delete</button>
      </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </>
  );
}
