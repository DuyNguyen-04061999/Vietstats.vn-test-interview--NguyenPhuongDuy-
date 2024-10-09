import { cn } from "@/utils";
import Link from "next/link";
import React from "react";

const SidebarItem = ({ pathname = "", icon, tab }) => {
  return (
    <div
      className={cn("flex py-[10px] px-[15px] gap-1 items-center rounded-md", {
        "bg-[#DFA128]": pathname.includes(pathname),
        "bg-transparent": !pathname.includes(pathname),
      })}
    >
      <div
        className={cn({
          "text-white": pathname.includes(pathname),
          "text-[#949ca9]": !pathname.includes(pathname),
        })}
      >
        {icon}
      </div>
      <Link
        href={pathname}
        className={cn("font-normal text-base leading-6 w-full", {
          "text-white": pathname.includes(pathname),
          "text-[#949ca9]": !pathname.includes(pathname),
        })}
      >
        {tab}
      </Link>
    </div>
  );
};

export default SidebarItem;
