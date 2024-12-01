"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { loginAction } from "./login-action";

export function LoginForm() {
  return (
    <form className="space-y-4" action={loginAction}>
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
  );
}
