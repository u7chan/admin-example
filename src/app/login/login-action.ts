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
  let errorMessage = "";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await login({ email, password });

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
  } catch (e: unknown) {
    errorMessage = e instanceof Error ? e.message : "";
  }
  return {
    email,
    password,
    errorMessage,
  };
}

async function login(params: { email: string; password: string }) {
  // TODO: fake authentication
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
  if (params.email !== "example@example.com" || params.password !== "test") {
    throw new Error("認証に失敗しました。");
  }
}
