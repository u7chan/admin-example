import { Button } from "@/components/ui/button";
import Image from "next/image";

const BASE_PATH = process.env.BASE_PATH;

export default function Home() {
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
