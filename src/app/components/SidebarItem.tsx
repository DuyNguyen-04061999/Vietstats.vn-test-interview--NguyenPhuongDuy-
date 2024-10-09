import { cn } from "@/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

interface SidebarItemProps {
  isActive: boolean;
  icon: ReactNode;
  tab: string;
  link: string;
}

const SidebarItem = ({ isActive, icon, tab, link }: SidebarItemProps) => {
  return (
    <div
      className={cn("flex py-[10px] px-[15px] gap-1 items-center rounded-md", {
        "bg-[#DFA128]": isActive,
        "bg-transparent": !isActive,
      })}
    >
      <div
        className={cn({
          "text-white": isActive,
          "text-[#949ca9]": !isActive,
        })}
      >
        {icon}
      </div>
      <Link
        href={link}
        className={cn("font-normal text-base leading-6 w-full", {
          "text-white": isActive,
          "text-[#949ca9]": !isActive,
        })}
      >
        {tab}
      </Link>
    </div>
  );
};

export default SidebarItem;
