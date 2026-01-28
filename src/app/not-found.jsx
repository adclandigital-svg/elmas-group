"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      router.back();
    }, 2000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1>404</h1>
        <p>Page not found. Redirecting you back…</p>
      </div>
    </div>
  );
}
