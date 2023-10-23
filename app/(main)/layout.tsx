"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Navigation from "./_components/Navigation";
import { SearchCommand } from "@/components/search-command";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      redirect("/");
    }
  }, [isLoading, isAuthenticated]);

  return (
    <>
      {isLoading && (
        <div className="h-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <div className="h-full flex ">
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto">
          <SearchCommand/>
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
