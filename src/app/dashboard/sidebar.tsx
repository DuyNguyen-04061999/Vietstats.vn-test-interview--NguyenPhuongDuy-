"use client";
import React, { HTMLAttributes } from "react";
import { usePathname } from "next/navigation";
import { renderLink } from "@/constants";
import SidebarItem from "@/app/components/SidebarItem";

type SidebarProps = HTMLAttributes<HTMLDivElement>;

const Sidebar = ({ children }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-1 flex-shrink-0">
      <div className="w-[249px] h-full bg-white shadow-md py-5 px-[14px]">
        {renderLink.map((item, id) => (
          <SidebarItem
            key={id}
            icon={item.icon}
            tab={item.tab}
            isActive={pathname.includes(item.link)}
            link={item.link}
          />
        ))}
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Sidebar;
