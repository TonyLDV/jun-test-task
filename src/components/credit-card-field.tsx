import React, { FC } from "react";

import { z } from "zod";
import InputMask from "react-input-mask";
import { FieldError, UseFormRegister } from "react-hook-form";
import { validationSchema } from "../lib/filling-form-validation";

type CreditCardFieldProps = {
  type: "row" | "column";
  label: "cardNumber" | "expiryDate" | "cvv";
  mask: string;
  register: UseFormRegister<z.infer<typeof validationSchema>>;
  error: FieldError | undefined;
  className?: string;
  title: string;
};

const CreditCardField: FC<CreditCardFieldProps> = ({
  type,
  title,
  mask,
  label,
  error,
  register,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-y-1 ${className}`}>
      <label htmlFor={label}>{title}</label>

      <InputMask
        className="appearance-none focus:outline-none focus:shadow-outline rounded-md p-2 text-[#363b5d] hover:bg-[#e6eaec] transition"
        id={label}
        mask={mask}
        maskChar={null}
        {...register(label)}
      />

      {error && (
        <span className="text-xs text-red-500 font-semibold h-4">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default CreditCardField;
