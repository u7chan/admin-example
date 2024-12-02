"use client";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { FormState, logoutAction } from "@/app/logout-action";

const initialState: FormState = {
  reload: false,
};

export function LogoutButton() {
  const router = useRouter();
  const [state, formAction, loading] = useActionState(
    logoutAction,
    initialState
  );
  useEffect(() => {
    if (state.reload) {
      router.refresh();
    }
  }, [state.reload, router]);
  return (
    <form action={formAction}>
      <Button type="submit" disabled={loading}>
        ログアウト
      </Button>
    </form>
  );
}
