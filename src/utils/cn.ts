import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTailwindMerge = extendTailwindMerge({
  override: {
    classGroups: {},
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTailwindMerge(clsx(inputs));
}