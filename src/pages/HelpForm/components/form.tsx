import React from "react";

import * as z from "zod";
import { useFormContext } from "react-hook-form";
import FormField from "../../../components/form-field";
import { validationSchema } from "../../../lib/filling-form-validation";

const Form = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof validationSchema>>();

  return (
    <div className="w-full">
      <div className="flex flex-col gap-7 md:flex-row md:justify-between">
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-3.5">
            <FormField
              label="firstName"
              title="Ім'я"
              type="text"
              error={errors?.firstName}
              register={register}
            />
            <FormField
              label="lastName"
              title="Прізвище"
              type="text"
              error={errors?.lastName}
              register={register}
            />
          </div>

          <FormField
            label="company"
            title="Назва компанії , організації"
            type="text"
            error={errors?.company}
            register={register}
          />
          <FormField
            label="email"
            title="Email-адреса"
            type="email"
            error={errors?.email}
            register={register}
          />
          <FormField
            label="number"
            title="Номер телефону"
            type="number"
            error={errors?.number}
            register={register}
          />
        </div>

        <div className="flex flex-col gap-y-5">
          <FormField
            label="contry"
            title="Країна"
            type="text"
            error={errors?.contry}
            register={register}
          />
          <div className="flex gap-3.5">
            <FormField
              label="city"
              title="Місто"
              type="text"
              error={errors?.city}
              register={register}
            />
            <FormField
              label="state"
              title="Штат , район"
              type="text"
              error={errors?.state}
              register={register}
            />
          </div>
          <FormField
            label="adress"
            title="Адреса"
            type="text"
            error={errors?.adress}
            register={register}
          />
          <FormField
            label="postIndex"
            title="Поштовий індекс"
            type="number"
            error={errors?.postIndex}
            register={register}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
