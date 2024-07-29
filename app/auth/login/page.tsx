"use client";

import React, { useState } from "react";
import InputFields from "../_components/InputFields";
import { Fields } from "@/app/contents/interface";
import Form from "../_components/Form";

export default function page() {
  const [inputFields, setInputFields] = useState<Fields>({
    email: "",
    password: "",
  });

  const signIn = async (formData: FormData) => {
    const data: Fields = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    setInputFields({ email: "", password: "" });
    console.log(data);
  };

  return (
    <>
      <Form authType="SIGNIN" formAction={signIn}>
        <InputFields
          name="email"
          type="email"
          label="email"
          fields={inputFields}
          setFields={setInputFields}
        />
        <InputFields
          name="password"
          type="password"
          label="password"
          fields={inputFields}
          setFields={setInputFields}
        />
      </Form>
    </>
  );
}
