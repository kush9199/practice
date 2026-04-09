import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/40">
      <div className="min-h-screen w-full max-w-md px-6 py-16">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">OrgLadder</h1>
          <p className="text-sm text-muted-foreground">
            Organize your work beautifully
          </p>
        </div>

        <Card>
          <CardContent className="p-6">{children}</CardContent>
        </Card>
      </div>
      <p className="text-center text-xs text-muted-foreground py-4">
          © {new Date().getFullYear()} sankagetsu
        </p>
    </div>
  );
}
