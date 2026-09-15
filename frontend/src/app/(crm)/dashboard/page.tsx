export default function DashboardPage() {
  return (
    <div
      style={{
        padding: "32px",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "28px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Dashboard
      </h1>

      <p
        style={{
          marginTop: "8px",
          color: "#6b7280",
          fontSize: "14px",
        }}
      >
        Welcome to your Water CRM dashboard.
      </p>

      {/* Dashboard Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "32px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
          }}
        >
          <p style={{ color: "#6b7280", margin: 0 }}>
            Total Customers
          </p>

          <h2
            style={{
              margin: "12px 0 0",
              fontSize: "28px",
              color: "#111827",
            }}
          >
            0
          </h2>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
          }}
        >
          <p style={{ color: "#6b7280", margin: 0 }}>
            Total Orders
          </p>

          <h2
            style={{
              margin: "12px 0 0",
              fontSize: "28px",
              color: "#111827",
            }}
          >
            0
          </h2>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
          }}
        >
          <p style={{ color: "#6b7280", margin: 0 }}>
            Total Sales
          </p>

          <h2
            style={{
              margin: "12px 0 0",
              fontSize: "28px",
              color: "#111827",
            }}
          >
            AED 0
          </h2>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
          }}
        >
          <p style={{ color: "#6b7280", margin: 0 }}>
            Available Stock
          </p>

          <h2
            style={{
              margin: "12px 0 0",
              fontSize: "28px",
              color: "#111827",
            }}
          >
            0
          </h2>
        </div>
      </div>
    </div>
  );
}