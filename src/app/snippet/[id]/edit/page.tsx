import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react'


interface EditSnippetpageProps{
    params:{
        id:string
    }
}
export default async function EditSnippetpage(props:EditSnippetpageProps) {
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where:{id}
    })
    if(!snippet)
        return notFound();
  return (
    <div>
      Editing snippet with title : {snippet.title}
    </div>
  )
}
