"use server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function loginAction(_prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  if (email !== "example@example.com" || password !== "test") {
    return {
      message: "Unauthorized",
    };
  }
}
