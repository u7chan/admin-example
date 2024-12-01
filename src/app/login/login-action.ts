"use server";

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
  return {
    email,
    password,
    errorMessage,
  };
}
