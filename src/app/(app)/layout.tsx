import { MenuBar } from "@/components/menu-bar";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row w-full">
      <MenuBar />
      {children}
    </div>
  );
}
