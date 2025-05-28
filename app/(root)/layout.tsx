import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Andrew", lastName: "Biney" };

  return (
    <main className="flex h-scree w-full font-inter">
      <Sidebar user={loggedIn} />
      {children}
    </main>
  );
}
