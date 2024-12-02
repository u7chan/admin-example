"use server";
import { cookies } from "next/headers";

export interface FormState {
  email: string;
  password: string;
  errorMessage: string;
}

export async function loginAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  let errorMessage = "";
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
  if (email !== "example@example.com" || password !== "test") {
    errorMessage = "認証に失敗しました。";
  }
  const cookieStore = await cookies();
  cookieStore.set({
    name: "session",
    value: "dummy",
    path: process.env.BASE_PATH,
    sameSite: "strict",
    secure: false,
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });
  return {
    email,
    password,
    errorMessage,
  };
}
