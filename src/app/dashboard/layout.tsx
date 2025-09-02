"use client";
import DashboardAside from "../components/dashboard/DashboardAside";
import clsx from "clsx";
import { AsideProvider, useAside } from "./AsideContext";

const DashboardContent = ({ children }: { children: React.ReactNode }) => {
  const { asideVisibility, setAsideVisibility } = useAside();

  return (
    <section className="flex h-dvh">
      <DashboardAside
        asideVisibility={asideVisibility}
        setAsideVisibility={setAsideVisibility}
      />
      <main
        className={clsx(
          "grid grid-cols-1 h-full overflow-auto grow transition-all duration-300 ease-in-out",
          {
            "md:ml-60": asideVisibility,
            "md:ml-0": !asideVisibility,
          }
        )}>
        <header className="p-4 sticky top-0 left-0 right-0">
          <button
            className={clsx(
              "w-6 h-5 outline outline-faded-transparent hover:outline-faded rounded-xs p-1 gap-y-1 flex flex-col place-content-center hover:bg-faded-transparent group transition-all duration-300 ease-in-out",
              { "opacity-0": asideVisibility }
            )}
            onClick={() => setAsideVisibility(!asideVisibility)}>
            <div className="w-full h-0.5 bg-faded-transparent group-hover:bg-faded transition-colors duration-300 ease-in-out" />
            <div className="w-full h-0.5 bg-faded-transparent group-hover:bg-faded transition-colors duration-300 ease-in-out" />
          </button>
        </header>
        {children}
      </main>
    </section>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AsideProvider>
      <DashboardContent>{children}</DashboardContent>
    </AsideProvider>
  );
}
