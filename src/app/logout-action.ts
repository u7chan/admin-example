"use server";
import { cookies } from "next/headers";

export interface FormState {
  reload: boolean;
}

export async function logoutAction(
  _prevState: FormState,
  _formData: FormData
): Promise<FormState> {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "session",
    value: "",
    path: process.env.BASE_PATH,
    expires: 0,
  });
  return {
    reload: true,
  };
}
