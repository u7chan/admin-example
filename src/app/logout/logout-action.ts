"use server";
import { cookies } from "next/headers";

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "session",
    value: "",
    path: process.env.BASE_PATH,
    expires: 0,
  });
}
