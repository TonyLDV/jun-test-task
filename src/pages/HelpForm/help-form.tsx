import React from "react";
import HelpTypes from "./components/help-types";
import FillingForm from "./components/filling-form";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "../../lib/filling-form-validation";

const HelpForm = () => {
  const methods = useForm({ resolver: zodResolver(validationSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form
          id="form"
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full md:w-8/12 m-auto p-5 md:p-8 flex flex-col items-center justify-center gap-y-8"
        >
          <FillingForm />

          <HelpTypes />

          <button
            className="px-10 py-3 text-center bg-gradient-to-r from-red-500 to-purple-800
         text-white font-bold rounded-md   shadow-[0px_0px_20px_8px_#e6b6c8]"
            type="submit"
            form="form"
          >
            Допомогти
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default HelpForm;
