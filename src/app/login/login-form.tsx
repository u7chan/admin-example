"use client";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FormState, loginAction } from "@/app/login/login-action";

const initialState: FormState = {
  email: "",
  password: "",
  errorMessage: "",
};

export function LoginForm() {
  const [state, formAction, loading] = useActionState(
    loginAction,
    initialState
  );
  return (
    <>
      {state?.errorMessage && (
        <Label className="text-red-500">{state.errorMessage}</Label>
      )}
      <form className="space-y-4" action={formAction}>
        <div>
          <Label htmlFor="email">メールアドレス</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="example@example.com"
            disabled={loading}
            defaultValue={state.email}
          />
        </div>
        <div>
          <Label htmlFor="password">パスワード</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            placeholder="********"
            disabled={loading}
            defaultValue={state.password}
          />
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          ログイン
        </Button>
      </form>
    </>
  );
}
