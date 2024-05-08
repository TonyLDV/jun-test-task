import React, { useState } from "react";

import PaymentMethods from "./payment-methods";
import HelpTypeItem from "../../../components/help-type-item";
import { Hand, Heart, Shirt, Wallet } from "lucide-react";

const helpTypes = [
  { id: 0, title: "Зробити", icon: Hand },
  { id: 1, title: "Фінансова допомога", icon: Wallet },
  { id: 2, title: "Матеріальна допомога", icon: Shirt },
  { id: 3, title: "Волонтерство", icon: Heart },
];

const HelpTypes = () => {
  const [isActiveHelp, setIsActiveHelp] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center gap-y-8 w-full">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <h1 className="text-[#363b5d] font-bold text-5xl">Види допомоги</h1>
        <p className="text-[#363b5d] text-sm">Ви можете змінити вид допомоги</p>
      </div>

      <div className="flex flex-col w-full gap-8 xl:flex-row md:items-center md:justify-between">
        {helpTypes.map(({ icon, id, title }) => (
          <HelpTypeItem
            title={title}
            icon={icon}
            key={id}
            isActive={id === isActiveHelp}
          />
        ))}
      </div>

      <PaymentMethods />
    </div>
  );
};

export default HelpTypes;
