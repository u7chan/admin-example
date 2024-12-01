import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="max-w-md w-full">
        <CardHeader>
          <h2 className="text-center text-2xl font-bold">ログイン</h2>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                type="email"
                id="email"
                required
                placeholder="example@example.com"
              />
            </div>
            <div>
              <Label htmlFor="password">パスワード</Label>
              <Input
                type="password"
                id="password"
                required
                placeholder="********"
              />
            </div>
            <Button type="submit" className="w-full">
              ログイン
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
