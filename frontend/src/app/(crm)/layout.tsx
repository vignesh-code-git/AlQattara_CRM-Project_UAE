import Sidebar from "@/components/Sidebar";

export default function CrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />

      <main
        style={{
          marginLeft: "250px",
          minHeight: "100vh",
          backgroundColor: "#f8f9fc",
        }}
      >
        {children}
      </main>
    </div>
  );
}