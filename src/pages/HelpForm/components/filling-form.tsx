import React from "react";
import Form from "./form";

const FillingForm = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      <h1 className="text-[#363b5d] font-bold text-5xl">Заповніть форму</h1>

      <div
        className="flex justify-between items-center border-2 border-[#363b5d] rounded-md cursor-pointer w-[210px] 
      h-9 overflow-hidden font-semibold text-sm"
      >
        <button
          type="button"
          className="bg-[#363b5d] text-white text-center w-full h-full"
        >
          Фіз. особа
        </button>
        <button
          type="button"
          className="bg-white text-[#363b5d] w-full h-full text-center"
        >
          Юр. особа
        </button>
      </div>

      <Form />
    </div>
  );
};

export default FillingForm;
