import { db } from "@/db";
import { redirect } from "next/navigation";
export default function SnippetCreate() {
  async function createSnippet(formData: any) {
    //server action
    //check record is valid
    //create new record in db
    //redirect 
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    //create a new record in database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log("snippet is : ", snippet);
    //redirect to the user back to the root route
    redirect("/");
  }

  return (
    <div>
      <form action={createSnippet}>
        <h3 className="font-bold m-3">Create a snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border rounded p-2 w-full"
              id="title"
            />
          </div>
          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <textarea
              name="code"
              className="border rounded p-2 w-full"
              id="code"
            />
          </div>
          <button type="submit" className="border p-2 bg-blue-200">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
