"use server";
import { config } from "@/lib/config";
import { cookies } from "next/headers";

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "session",
    value: "",
    path: config.BASE_PATH,
    expires: 0,
  });
}
