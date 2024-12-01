import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

const BASE_PATH = process.env.BASE_PATH;

export default async function Home() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (!session) {
    redirect("/login");
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
      <Button>Click me</Button>
    </div>
  );
}
