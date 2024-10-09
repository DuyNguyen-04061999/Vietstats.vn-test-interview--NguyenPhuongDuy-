import React from "react";
import LoginForm from "./login-form";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f9f9f9] rounded-[30px] flex w-[880px] h-[486px] justify-between overflow-hidden">
      <LoginForm />
      <div
        className="bg-[#DFA128] h-full w-1/2 flex-shrink-0 relative"
        style={{
          clipPath: "polygon(41% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <Image
          src="/image/right-img.png"
          alt="img"
          width={291}
          height={228}
          className="absolute top-1/2 -translate-y-1/2 right-10 select-none"
        />
      </div>
    </div>
  );
};

export default LoginPage;
