import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="absolute inset-0">
        <Image
          width={2000}
          height={2000}
          src="/image/bg-login.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
