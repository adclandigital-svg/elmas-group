"use client";

import "./admin-login.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminAuth", "true");
        router.push("/admin/dashboard");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error('Login error:', error);
      alert("An error occurred during login");
    }
  };

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">
        <h2>Admin Panel</h2>
        <p>Sign in to manage your dashboard</p>

        <form onSubmit={handleLogin}>
          <div className="admin-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="admin@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="admin-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="admin-login-btn">Login</button>
        </form>
      </div>
    </main>
  );
}
