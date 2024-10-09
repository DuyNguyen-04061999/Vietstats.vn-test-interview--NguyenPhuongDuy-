import { cn } from "@/utils";
import React, { HTMLAttributes } from "react";
type HomeIconProps = HTMLAttributes<HTMLDivElement>;

const HomeIcon = ({ className }: HomeIconProps) => {
  return (
    <div className={cn(className)}>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.993106 7.07012C0.360964 7.63904 0 8.44954 0 9.3V16.9639C0 18.6208 1.34315 19.9639 3 19.9639H17C18.6569 19.9639 20 18.6208 20 16.9639V9.3C20 8.44954 19.639 7.63904 19.0069 7.07012L12.0069 0.770117C10.866 -0.256706 9.13402 -0.256705 7.9931 0.770118L0.993106 7.07012ZM9 10.9639C7.89543 10.9639 7 11.8593 7 12.9639V16.9639C7 17.5162 7.44772 17.9639 8 17.9639H12C12.5523 17.9639 13 17.5162 13 16.9639V12.9639C13 11.8593 12.1046 10.9639 11 10.9639H9Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

const CalendarIcon = ({ className }: HomeIconProps) => {
  return (
    <div className={cn(className)}>
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12C8.71667 12 8.479 11.904 8.287 11.712C8.095 11.52 7.99934 11.2827 8 11C8 10.7167 8.096 10.479 8.288 10.287C8.48 10.095 8.71734 9.99934 9 10C9.28334 10 9.521 10.096 9.713 10.288C9.905 10.48 10.0007 10.7173 10 11C10 11.2833 9.904 11.521 9.712 11.713C9.52 11.905 9.28267 12.0007 9 12ZM5 12C4.71667 12 4.479 11.904 4.287 11.712C4.095 11.52 3.99934 11.2827 4 11C4 10.7167 4.096 10.479 4.288 10.287C4.48 10.095 4.71734 9.99934 5 10C5.28334 10 5.521 10.096 5.713 10.288C5.905 10.48 6.00067 10.7173 6 11C6 11.2833 5.904 11.521 5.712 11.713C5.52 11.905 5.28267 12.0007 5 12ZM13 12C12.7167 12 12.479 11.904 12.287 11.712C12.095 11.52 11.9993 11.2827 12 11C12 10.7167 12.096 10.479 12.288 10.287C12.48 10.095 12.7173 9.99934 13 10C13.2833 10 13.521 10.096 13.713 10.288C13.905 10.48 14.0007 10.7173 14 11C14 11.2833 13.904 11.521 13.712 11.713C13.52 11.905 13.2827 12.0007 13 12ZM9 16C8.71667 16 8.479 15.904 8.287 15.712C8.095 15.52 7.99934 15.2827 8 15C8 14.7167 8.096 14.479 8.288 14.287C8.48 14.095 8.71734 13.9993 9 14C9.28334 14 9.521 14.096 9.713 14.288C9.905 14.48 10.0007 14.7173 10 15C10 15.2833 9.904 15.521 9.712 15.713C9.52 15.905 9.28267 16.0007 9 16ZM5 16C4.71667 16 4.479 15.904 4.287 15.712C4.095 15.52 3.99934 15.2827 4 15C4 14.7167 4.096 14.479 4.288 14.287C4.48 14.095 4.71734 13.9993 5 14C5.28334 14 5.521 14.096 5.713 14.288C5.905 14.48 6.00067 14.7173 6 15C6 15.2833 5.904 15.521 5.712 15.713C5.52 15.905 5.28267 16.0007 5 16ZM13 16C12.7167 16 12.479 15.904 12.287 15.712C12.095 15.52 11.9993 15.2827 12 15C12 14.7167 12.096 14.479 12.288 14.287C12.48 14.095 12.7173 13.9993 13 14C13.2833 14 13.521 14.096 13.713 14.288C13.905 14.48 14.0007 14.7173 14 15C14 15.2833 13.904 15.521 13.712 15.713C13.52 15.905 13.2827 16.0007 13 16ZM2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V4C1.69779e-06 3.45 0.196002 2.979 0.588002 2.587C0.980002 2.195 1.45067 1.99934 2 2H3V1C3 0.71667 3.096 0.479003 3.288 0.287003C3.48 0.0950034 3.71734 -0.000663206 4 3.46021e-06C4.28334 3.46021e-06 4.521 0.0960036 4.713 0.288004C4.905 0.480004 5.00067 0.717337 5 1V2H13V1C13 0.71667 13.096 0.479003 13.288 0.287003C13.48 0.0950034 13.7173 -0.000663206 14 3.46021e-06C14.2833 3.46021e-06 14.521 0.0960036 14.713 0.288004C14.905 0.480004 15.0007 0.717337 15 1V2H16C16.55 2 17.021 2.196 17.413 2.588C17.805 2.98 18.0007 3.45067 18 4V18C18 18.55 17.804 19.021 17.412 19.413C17.02 19.805 16.5493 20.0007 16 20H2ZM2 18H16V8H2V18Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export { HomeIcon, CalendarIcon };
