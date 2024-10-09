import React, { HTMLAttributes, HTMLInputTypeAttribute } from "react";
import { Control, Controller } from "react-hook-form";
import { cn } from "@/utils";

interface FieldProps extends HTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
}

export default function Field({
  type,
  error,
  className,
  control,
  name,
  label,
  ...props
}: FieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <label className="cursor-pointer relative block">
          <p className="text-[#3d3d3d] font-bold select-none">{label || ""}</p>
          <input
            type={type}
            className={cn(
              "border border-[#949ca9] bg-white py-[12px] px-[10px] outline-none w-[384px] placeholder:font-normal placeholder:text-[#949ca9] text-sm rounded",
              className
            )}
            {...props}
            {...field}
          />
          {error && (
            <h2 className="text-red-500 font-tahoma text-xs absolute left-0 top-full">
              {error}
            </h2>
          )}
        </label>
      )}
    />
  );
}
