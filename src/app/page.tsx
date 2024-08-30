import Hero from "@/components/cousel/hero";
import homeImg from "/public/home.jpg";
import Header from "@/components/header";
import { db } from "@/db";
import Link from "next/link";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map(
    (snippet: { id: string; title: string; code: string }) => {
      return (
        <Link
          key={snippet.id}
          href={`/snippet/${snippet.id}`}
          className="flex justify-between items-center border rounded p-2"
        >
          {snippet.title}
        </Link>
      );
    }
  );
  return (
    <>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl bold">Snippets</h1>
        <Link href={`/snippet/new`} className="border p-2 border-rounded">New</Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </>
  );
}
