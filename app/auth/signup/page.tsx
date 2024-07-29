"use client";

import React, { useState } from "react";
import InputFields from "../_components/InputFields";
import { Fields } from "@/app/contents/interface";
import Form from "../_components/Form";

export default function page() {
  const [signUpFields, setSignUpFields] = useState<Fields>({
    name: "",
    email: "",
    password: "",
  });

  const signUp = async (formData: FormData) => {
    const data: Fields = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    setSignUpFields({ name: "", email: "", password: "" });
    console.log(data);
  };

  return (
    <>
      <Form authType="SIGNUP" formAction={signUp}>
        <InputFields
          name="name"
          type="text"
          label="name"
          fields={signUpFields}
          setFields={setSignUpFields}
        />
        <InputFields
          name="email"
          type="email"
          label="email"
          fields={signUpFields}
          setFields={setSignUpFields}
        />
        <InputFields
          name="password"
          type="password"
          label="password"
          fields={signUpFields}
          setFields={setSignUpFields}
        />
      </Form>
    </>
  );
}
