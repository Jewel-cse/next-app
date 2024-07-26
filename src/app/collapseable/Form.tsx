"use client";
import React, { useState } from "react";

import TextInput from "@/components/form/TextInput";
import LabeledBox from "@/components/LabeledBox";
import { Button, Dropdown } from "@nextui-org/react";

type FormProps = {
  children?: React.ReactNode;
  onSubmit?: (data: any) => void;
  onClose?: () => void;
};

const Form: React.FC<FormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-6  p-4">
        <TextInput
          name={"firsName"}
          label={"First Name"}
          value={""}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />
        <TextInput
          name={"lastName"}
          label={"Last Name"}
          value={""}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />
        <TextInput
          name={"city"}
          label={"City"}
          value={""}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />
        <TextInput
          name={"nation"}
          label={"Nation"}
          value={""}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />
        <TextInput
          name={"adress"}
          label={"Adress"}
          value={""}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />
        <TextInput
          name={"profession"}
          label={"Profession"}
          value={""}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </form>
  );
};

export default Form;
