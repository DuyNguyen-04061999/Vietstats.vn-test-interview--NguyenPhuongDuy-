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
}

export default function Field({
  type,
  error,
  className,
  control,
  name,
  ...props
}: FieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <input type={type} className={cn(className)} {...props} {...field} />
          {error && (
            <h2 className="text-red-500 font-tahoma text-xs">
              {error}
            </h2>
          )}
        </>
      )}
    />
  );
}
