"use client";
import React from "react";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import Form from "@/app/collapseable/Form";
import DynamicForm from "./dynamicFieldAdd/DynamicForm";
export default function Collapse() {
  return (
    <div>
      <Accordion selectionMode="multiple" isCompact variant="light">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Area Information"
          className="bg-sky-200 rounded-md px-2 py-1 text-xl font-semibold"
        >
          <Form />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 1"
          title="Slab Information"
          className="bg-sky-200 rounded-md px-2 py-1 text-xl font-semibold"
        >
          <DynamicForm />
        </AccordionItem>
      </Accordion>
    </div>
  );
}
