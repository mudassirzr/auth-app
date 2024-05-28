"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout, selectLoginState } from "@/lib/features/auth/authSlice";

import styles from "../styles/layout.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const Nav = () => {
  const pathname = usePathname();
  const loggedIn = useAppSelector(selectLoginState);
  const dispatch = useAppDispatch();
  console.log(loggedIn,'kdkdk')
  return loggedIn ? (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/quotes" ? styles.active : ""
        }`}
        href="/quotes"
      >
        Quotes
      </Link>
      <a onClick={()=>dispatch(logout())} className={styles.link}>
        Logout
      </a>
    </nav>
  ) : null;
};
