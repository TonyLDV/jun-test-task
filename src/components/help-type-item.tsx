import React, { FC } from "react";

import { cn } from "../lib/utils";
import { LucideIcon } from "lucide-react";

type HelpTypeItemProps = {
  icon: LucideIcon;
  title: string;
  isActive?: boolean;
};

const HelpTypeItem: FC<HelpTypeItemProps> = ({
  icon: Icon,
  title,
  isActive = false,
}) => {
  return (
    <button
      type="button"
      className="flex items-center gap-x-5 w-full group relative transition"
    >
      <div
        className={cn(
          "p-6 border-2 rounded-2xl flex justify-center items-center border-[#c5d5e6] text-[#c5d5e6] group-hover:text-[#c289c0] group-hover:border-[#c289c0]",
          isActive &&
            "border-[#9c5d9a] bg-[#9c5d9a] text-white group-hover:text-white group-hover:border-[#9c5d9a]"
        )}
      >
        <Icon className="size-10" />
      </div>

      <p
        className={cn(
          "font-bold text-[#c5d5e6] ",
          isActive && "text-[#363b5d]"
        )}
      >
        {title}
      </p>
    </button>
  );
};

export default HelpTypeItem;
