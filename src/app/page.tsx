import Hero from "@/components/cousel/hero";
import homeImg from "/public/home.jpg";
import Header from "@/components/header";
import { db } from "@/db";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map(
    (snippet: { id: number; title: string; code: string }) => {
      return (
        <div key={snippet.id}>
          <h2>Title is : {snippet.title} </h2>
          <h2>Code is is : {snippet.code}</h2>
          <br />
        </div>
      );
    }
  );
  return <>{renderedSnippets}</>;
}
