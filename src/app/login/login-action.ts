"use server";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  if (email !== "example@example.com" || password !== "test") {
    throw new Error("Unauthorized");
  }
}
