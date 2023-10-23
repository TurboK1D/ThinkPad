"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useConvexAuth } from "convex/react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">
        <span className="underline font-extrabold">ThinkPad:</span> Your Digital
        Canvas for Notes, Tasks, and Strategies for Tomorrow.
      </h1>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Link href="/documents">
          <Button className="font-bold">
            Enter ThinkPad
            <ArrowRightIcon className="h-4 w-4 ml-4" />
          </Button>
        </Link>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button className="font-bold">
            Get ThinkPad Free
            <ArrowRightIcon className="h-4 w-4 ml-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
