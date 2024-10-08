import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      {children}
    </div>
  );
}
