"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <main className="page">
        <div className="loginCard">
          <div className="logo">CRM</div>

          <div className="header">
            <h1>Welcome back</h1>
            <p>Sign in to your account</p>
          </div>

          <form className="form">
            <div className="field">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="field">
              <div className="passwordHeader">
                <label htmlFor="password">Password</label>

                <button type="button" className="forgotPassword">
                  Forgot password?
                </button>
              </div>

              <div className="passwordWrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  className="showPassword"
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="submit" className="loginButton">
              Sign In
            </button>
          </form>

          <p className="footer">CRM Management System</p>
        </div>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: #f7f7fb;
        }

        .loginCard {
          width: 100%;
          max-width: 420px;
          padding: 40px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
        }

        .logo {
          width: 48px;
          height: 48px;
          margin: 0 auto 24px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;
          background: #111827;
          color: #ffffff;

          font-size: 13px;
          font-weight: 700;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .header h1 {
          margin: 0;
          color: #111827;
          font-size: 26px;
          font-weight: 600;
        }

        .header p {
          margin: 8px 0 0;
          color: #6b7280;
          font-size: 14px;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field label,
        .passwordHeader label {
          color: #374151;
          font-size: 13px;
          font-weight: 500;
        }

        .field input {
          width: 100%;
          height: 44px;
          padding: 0 12px;
          box-sizing: border-box;

          border: 1px solid #d1d5db;
          border-radius: 8px;

          outline: none;
          background: #ffffff;
          color: #111827;

          font-size: 14px;
        }

        .field input::placeholder {
          color: #9ca3af;
        }

        .field input:focus {
          border-color: #111827;
        }

        .passwordHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .forgotPassword {
          padding: 0;
          border: none;
          background: transparent;

          color: #2563eb;
          cursor: pointer;
          font-size: 12px;
        }

        .forgotPassword:hover {
          text-decoration: underline;
        }

        .passwordWrapper {
          position: relative;
        }

        .passwordWrapper input {
          padding-right: 60px;
        }

        .showPassword {
          position: absolute;
          top: 50%;
          right: 12px;
          transform: translateY(-50%);

          padding: 0;
          border: none;
          background: transparent;

          color: #6b7280;
          cursor: pointer;

          font-size: 12px;
        }

        .showPassword:hover {
          color: #111827;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 8px;

          color: #4b5563;
          font-size: 13px;
          cursor: pointer;
        }

        .remember input {
          width: 15px;
          height: 15px;
          cursor: pointer;
        }

        .loginButton {
          width: 100%;
          height: 44px;

          border: none;
          border-radius: 8px;

          background: #111827;
          color: #ffffff;

          cursor: pointer;

          font-size: 14px;
          font-weight: 500;
        }

        .loginButton:hover {
          opacity: 0.9;
        }

        .footer {
          margin: 28px 0 0;
          padding-top: 20px;

          border-top: 1px solid #f1f5f9;

          text-align: center;

          color: #9ca3af;
          font-size: 12px;
        }

        @media (max-width: 480px) {
          .page {
            padding: 16px;
          }

          .loginCard {
            padding: 28px 22px;
          }

          .header h1 {
            font-size: 23px;
          }
        }
      `}</style>
    </>
  );
}