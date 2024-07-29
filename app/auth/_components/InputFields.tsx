import { Fields } from "@/app/contents/interface";
import { capitalize, capitalizeEach } from "@/app/lib/utils";
import clsx from "clsx";
import React, { SetStateAction } from "react";

interface AuthInputs {
  label: string;
  type: "email" | "text" | "password";
  name: string;
  fields: Fields;
  setFields: React.Dispatch<SetStateAction<Fields>>;
}

export default function InputFields({
  label,
  name,
  type,

  fields,
  setFields,
}: AuthInputs) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFields((prevValue) => ({
      ...prevValue,
      [name]: name === "name" ? capitalizeEach(value) : value,
    }));
  };

  return (
    <fieldset className="flex flex-col relative">
      <input
        id={name}
        type={type}
        name={name}
        value={fields[name]}
        onChange={handleChange}
        className="px-5 py-3 outline outline-2 bg-transparent rounded-lg peer w-full"
      />
      <label
        htmlFor={name}
        className={clsx(
          "absolute top-1/2 -translate-y-1/2 left-3 px-2 text-secondary/75 peer-focus-within:text-small peer-focus-within:-translate-y-[calc(100%+50%+theme(padding.1))] bg-primary transition-all duration-fast ease-in-out",
          {
            "text-small -translate-y-[calc(100%+50%+theme(padding.1))]":
              fields[name] !== "",
          }
        )}
      >
        {capitalize(label)}
      </label>
    </fieldset>
  );
}
