"use client";
import { login, logout, selectLoginState } from "@/lib/features/auth/authSlice";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function withPublic(Component: React.FC) {
  return function WithPublic(props: any) {
    const loggedIn = useAppSelector(selectLoginState);
    const router = useRouter();
    console.log(loggedIn, "lslsl");
    useEffect(() => {
      if (loggedIn) {
        router.push("/");
      }
    }, [loggedIn]);
    if (loggedIn) {
      return <div>Please Wait...</div>;
    }
    return <Component {...props} />;
  };
}

function withProtected(Component: React.FC) {
  return function WithProtected(props: any) {
    const loggedIn = useAppSelector(selectLoginState);
    const router = useRouter();
    useEffect(() => {
      if (!loggedIn) {
        router.push("/login");
      }
    }, [loggedIn]);
    if (!loggedIn) {
      return <div style={{ color: "red" }}>Access Denied, redirecting....</div>;
    }
    return <Component {...props} />;
  };
}

export { withPublic, withProtected };
