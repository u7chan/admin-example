"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { logoutAction } from "@/app/logout/logout-action";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    logoutAction().then(() => {
      router.replace("/");
    });
  }, [router]);
  return <></>;
}
