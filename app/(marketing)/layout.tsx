import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full md:pt-40 pt-32">{children}</main>
    </div>
  );
};

export default MarketingLayout;
