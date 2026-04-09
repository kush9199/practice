import AuthLayout from "@/modules/auth/components/AuthLayout";
import LoginForm from "@/modules/auth/components/LoginForm";
import { createFileRoute } from "@tanstack/react-router";

function Loginpage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
export const Route = createFileRoute("/login")({
  component: Loginpage,
});
