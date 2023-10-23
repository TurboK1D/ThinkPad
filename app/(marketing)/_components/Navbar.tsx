"use client";

import { Spinner } from "@/components/spinner";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center p-6 w-full ",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="ml-auto justify-between sm:justify-end flex items-center gap-x-2 w-full">
        <div className="flex gap-x-2">
          {isLoading && <Spinner />}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm" className="font-bold">
                  Login
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size="sm" className="font-bold">
                  Get Free ThinkPad
                </Button>
              </SignInButton>
            </>
          )}
          {isAuthenticated && !isLoading && (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/documents">Enter ThinkPad</Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};
