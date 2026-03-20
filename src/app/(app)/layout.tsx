import { isAuthenticated } from "@/auth/auth";
import { MenuBar } from "@/components/menu-bar";
import { redirect } from "next/navigation";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!(await isAuthenticated())) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-row w-full">
      <MenuBar />
      {children}
    </div>
  );
}
