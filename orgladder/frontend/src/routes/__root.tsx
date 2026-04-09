import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "@/store/AuthStore";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";

const queryClient = new QueryClient();

const App = () => {
  const [open, setOpen] = useState(false);
  const initAuth = useAuthStore((s) => s.initAuth);
  useEffect(() => {
    initAuth();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              <Link to={"/"}>OrgLadder</Link>
            </h1>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-4 md:flex">
              <Button variant="ghost" className="text-sm">
                <Link to={"/login"}>Login</Link>
              </Button>
              <Button className="text-sm">Get Started</Button>
              <ModeToggle/>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          

          {/* Mobile Menu */}
          {open && (
            <div className="border-t px-4 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
                <Button className="w-full">Get Started</Button>
                <ModeToggle/>
              </div>
            </div>
          )}
        </header>
        <Outlet />
      </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export const Route = createRootRoute({
  component: App,
});
