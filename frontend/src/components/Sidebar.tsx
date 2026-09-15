"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "▦",
  },
  {
    label: "Utilities",
    href: "/utilities",
    icon: "▤",
  },
  {
    label: "Customers",
    href: "/customers",
    icon: "♙",
  },
  {
    label: "Cashier",
    href: "/cashier",
    icon: "▣",
  },
  {
    label: "Zones",
    href: "/zones",
    icon: "⌖",
  },
  {
    label: "Routes",
    href: "/routes",
    icon: "↝",
  },
  {
    label: "Salesman",
    href: "/salesman",
    icon: "♙",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <>
      <style>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background-color: #ffffff;
          border-right: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }

        .sidebar-logo {
          height: 72px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid #f1f1f1;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #5b3cc4;
          color: #ffffff;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 700;
        }

        .logo-text {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
        }

        .sidebar-nav {
          flex: 1;
          padding: 24px 16px;
          overflow-y: auto;
        }

        .sidebar-section-title {
          margin: 0 0 12px 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #9ca3af;
        }

        .sidebar-menu-item {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          height: 46px;
          padding: 0 14px;
          margin-bottom: 6px;
          border-radius: 10px;
          text-decoration: none;
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
          box-sizing: border-box;
          transition:
            background-color 0.2s ease,
            color 0.2s ease;
        }

        .sidebar-menu-item:hover {
          background-color: #f5f3ff;
          color: #5b3cc4;
        }

        .sidebar-menu-item.active {
          background-color: #5b3cc4;
          color: #ffffff;
          font-weight: 600;
        }

        .sidebar-menu-item.active:hover {
          background-color: #5b3cc4;
          color: #ffffff;
        }

        .sidebar-menu-icon {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
        }

        .sidebar-menu-label {
          white-space: nowrap;
        }

        .sidebar-bottom {
          padding: 16px;
          border-top: 1px solid #f1f1f1;
        }

        .sidebar-logout {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          height: 46px;
          padding: 0 14px;
          margin-top: 6px;
          border: none;
          border-radius: 10px;
          background-color: transparent;
          color: #6b7280;
          font-family: inherit;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          text-align: left;
          box-sizing: border-box;
          transition:
            background-color 0.2s ease,
            color 0.2s ease;
        }

        .sidebar-logout:hover {
          background-color: #fef2f2;
          color: #ef4444;
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 220px;
          }

          .sidebar-logo {
            padding: 0 18px;
          }

          .sidebar-nav,
          .sidebar-bottom {
            padding-left: 12px;
            padding-right: 12px;
          }
        }
      `}</style>

      <aside className="sidebar">
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-icon">W</div>
          <span className="logo-text">Water CRM</span>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <p className="sidebar-section-title">MAIN MENU</p>

          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sidebar-menu-item ${
                  isActive ? "active" : ""
                }`}
              >
                <span className="sidebar-menu-icon">
                  {item.icon}
                </span>

                <span className="sidebar-menu-label">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="sidebar-bottom">
          <Link href="/settings" className="sidebar-menu-item">
            <span className="sidebar-menu-icon">⚙</span>
            <span className="sidebar-menu-label">Settings</span>
          </Link>

          <button
            type="button"
            className="sidebar-logout"
            onClick={handleLogout}
          >
            <span className="sidebar-menu-icon">↪</span>
            <span className="sidebar-menu-label">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}