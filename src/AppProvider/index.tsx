"use client";
import { clientCookiesValues } from "@/lib/http";
import { ReactNode, useState } from "react";

export interface AppProviderProps {
  children: ReactNode;
  initialCookiesValues: {
    token: string;
  };
}

export default function AppProvider({
  children,
  initialCookiesValues,
}: AppProviderProps) {
  
  useState(() => {
    // Môi trường ko phải client
    if (typeof window !== "undefined") {
      clientCookiesValues.value = initialCookiesValues;
    }
  });

  return <>{children}</>;
}
