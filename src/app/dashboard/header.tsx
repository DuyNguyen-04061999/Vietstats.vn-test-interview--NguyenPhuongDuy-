import Image from "next/image";
import React from "react";

const HeaderDashboard = () => {
  return (
    <div className="p-[30px] flex items-center justify-between">
      <div className="cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.54541"
            y="1.19995"
            width="22.9091"
            height="4.69565"
            rx="2.34783"
            fill="#DFA128"
          />
          <rect
            x="0.54541"
            y="9.6521"
            width="22.9091"
            height="4.69565"
            rx="2.34783"
            fill="#DFA128"
          />
          <rect
            x="0.54541"
            y="18.1042"
            width="22.9091"
            height="4.69565"
            rx="2.34783"
            fill="#DFA128"
          />
        </svg>
      </div>

      <div className="flex items-center gap-1 w-[124px]">
        <div className="w-10 h-10 border border-[#dfa128] rounded-full overflow-hidden">
          <Image
            src="/image/avatar.jpg"
            alt="avatar"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <p>123</p>

        <div className="ml-auto">
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.02957 6.23188L0.424188 2.46377C-0.0149287 2.00483 -0.112921 1.47971 0.130211 0.888406C0.372418 0.296135 0.805526 0 1.42953 0H8.57095C9.19496 0 9.62807 0.296135 9.87028 0.888406C10.1134 1.47971 10.0154 2.00483 9.5763 2.46377L5.97092 6.23188C5.83225 6.37681 5.68203 6.48551 5.52025 6.55797C5.35847 6.63043 5.18514 6.66667 5.00024 6.66667C4.81535 6.66667 4.64202 6.63043 4.48024 6.55797C4.31846 6.48551 4.16823 6.37681 4.02957 6.23188Z"
              fill="#DFA128"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
