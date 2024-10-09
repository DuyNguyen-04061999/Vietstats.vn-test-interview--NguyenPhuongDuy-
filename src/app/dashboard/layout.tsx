import HeaderDashboard from "@/app/dashboard/header";
import Sidebar from "@/app/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#fff6e9] h-screen w-screen overflow-y-scroll flex flex-col">
      <HeaderDashboard />
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
