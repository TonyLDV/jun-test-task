import React from "react";
import { z } from "zod";
import { useFormContext } from "react-hook-form";
import CreditCardField from "./credit-card-field";
import { validationSchema } from "../lib/filling-form-validation";

const CreditCard = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof validationSchema>>();

  return (
    <div className="bg-[#c5d5e6] rounded-xl p-6 text-white font-bold flex flex-col gap-y-5">
      <CreditCardField
        error={errors?.cardNumber}
        register={register}
        label="cardNumber"
        mask="9999 9999 9999 9999"
        type="column"
        title="Номер картки"
      />

      <div className="flex justify-between">
        <CreditCardField
          error={errors?.expiryDate}
          register={register}
          label="expiryDate"
          mask="99/99"
          type="column"
          title="Термін дії"
          className="w-[40%]"
        />

        <CreditCardField
          error={errors?.cvv}
          register={register}
          label="cvv"
          mask="9999"
          type="column"
          title="CVC/CVV"
          className="w-[40%]"
        />
      </div>
    </div>
  );
};

export default CreditCard;
