import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const BASE_PATH = process.env.BASE_PATH;

export default async function Home() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (!session) {
    redirect("/login", RedirectType.replace);
  }
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Image
        aria-hidden
        src={`${BASE_PATH}/globe.svg`}
        alt="Globe icon"
        width={16}
        height={16}
      />
      NEXT
      <Link href="/logout" replace>
        <Button>ログアウト</Button>
      </Link>
    </div>
  );
}
