import React, { FC } from "react";

import { z } from "zod";
import { FieldError, UseFormRegister } from "react-hook-form";
import { validationSchema } from "../lib/filling-form-validation";

type FormFieldTypes = {
  title: string;
  type: string;
  label: ValidFieldNames;
  register: UseFormRegister<z.infer<typeof validationSchema>>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

type ValidFieldNames =
  | "firstName"
  | "lastName"
  | "company"
  | "email"
  | "number"
  | "contry"
  | "city"
  | "state"
  | "adress"
  | "postIndex";

const FormField: FC<FormFieldTypes> = ({
  error,
  label,
  register,
  title,
  type,
  valueAsNumber,
}) => {
  return (
    <div className="flex flex-col gap-y-3">
      <label className="block text-xs font-bold text-[#aeb3ba]" htmlFor={label}>
        {title}
      </label>

      <input
        type={type}
        className="w-full p-2.5 bg-[#f3f7fa] font-semibold text-[#363b5d] rounded-md appearance-none 
        focus:outline-none focus:shadow-outline hover:bg-[#e6eaec] transition"
        id={label}
        {...register(label, { valueAsNumber })}
      />

      {error && (
        <span className="text-xs text-red-500 font-semibold h-4">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormField;
