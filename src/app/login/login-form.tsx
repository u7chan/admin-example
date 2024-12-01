"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { loginAction } from "@/app/login/login-action";

const initialState = {
  message: "",
};

export function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);
  return (
    <>
      {state?.message && <Label>{state.message}</Label>}
      <form className="space-y-4" action={formAction}>
        <div>
          <Label htmlFor="email">メールアドレス</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="example@example.com"
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
          />
        </div>
        <Button type="submit" className="w-full">
          ログイン
        </Button>
      </form>
    </>
  );
}
