"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // user না থাকলে login page এ পাঠাবে
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  // user না থাকলে কিছু render করবে না (redirect হচ্ছে)
  if (!user) return null;

  // user থাকলে children render করবে
  return <>{children}</>;
};

export default ProtectedRoute;
