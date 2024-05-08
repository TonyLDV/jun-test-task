import React, { FC } from "react";

import { cn } from "../lib/utils";
import { PaymentMethodsListTypes } from "../pages/HelpForm/components/payment-methods";

type PaymentMethodItemProps = PaymentMethodsListTypes & {
  isActive?: boolean;
  onMethodClick: (value: number) => void;
};

const PaymentMethodItem: FC<PaymentMethodItemProps> = ({
  isActive = false,
  icon,
  id,
  subtitle,
  title,
  onMethodClick,
}) => {
  return (
    <button
      onClick={() => onMethodClick(id)}
      type="button"
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl p-4 bg-[#c5d5e6]  text-white transition hover:bg-[#c289c0] gap-y-3",
        isActive && "bg-[#9c5d9a] hover:bg-[#9c5d9a]"
      )}
    >
      <div>{title}</div>
      <span className="text-xs">{subtitle}</span>
    </button>
  );
};

export default PaymentMethodItem;
