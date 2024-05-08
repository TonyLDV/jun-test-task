import React, { useState } from "react";
import CreditCard from "../../../components/credit-card";
import PaymentMethodItem from "../../../components/payment-method-item";

export type PaymentMethodsListTypes = {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
};

const paymentMethodsList: PaymentMethodsListTypes[] = [
  { id: 0, icon: "", title: "VISA", subtitle: "Картка VISA/MasterCard" },
  { id: 1, icon: "", title: "24", subtitle: "Приват24" },
  { id: 2, icon: "", title: "Terminal", subtitle: "Термінали України" },
  { id: 3, icon: "", title: "WM", subtitle: "WebMoney" },
  { id: 4, icon: "", title: "PayPal", subtitle: "PayPal" },
];

const PaymentMethods = () => {
  const [isActiveMethod, setIsActiveMethod] = useState(1);

  return (
    <div className="w-full flex flex-col border-2 border-[#c5d5e6] rounded-xl p-5 xl:flex-row md:justify-between gap-y-4">
      <div>
        <p className="text-[#aeb3ba] font-bold mb-2">Спосіб оплати</p>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          {paymentMethodsList.map(({ icon, id, subtitle, title }) => (
            <PaymentMethodItem
              onMethodClick={() => setIsActiveMethod(id)}
              key={id}
              icon={icon}
              id={id}
              title={title}
              subtitle={subtitle}
              isActive={id === isActiveMethod}
            />
          ))}
        </div>
      </div>

      <div className="w-full xl:w-[35%]">
        <p className="text-[#aeb3ba] font-bold mb-2">Введіть наступні дані</p>
        <CreditCard />
      </div>
    </div>
  );
};

export default PaymentMethods;
