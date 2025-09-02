"use client";

import { useAside } from "@/app/dashboard/AsideContext";
import { LinkProps } from "@/app/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function DashboardLink({ path, title }: LinkProps) {
  const pathname = usePathname();
  const { setAsideVisibility } = useAside();
  const breakpoint = useRef(0);

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const breakpointValue = styles.getPropertyValue("--breakpoint-md");

    breakpoint.current = Number(breakpointValue.replace("px", ""));
  }, []);

  const handleClick = () => {
    // hide aside on mobile click
    if (window.innerWidth < Number(breakpoint.current)) {
      setAsideVisibility(false);
    }
  };
  return (
    <Link
      href={path}
      onClick={handleClick}
      className={clsx(
        "flex items-baseline hover:bg-faded-transparent py-3 px-4 gap-x-4 rounded-sm group transition-colors duration-300 ease-in-out",
        { "bg-faded-transparent": pathname === path }
      )}>
      <div
        className={clsx(
          "w-3 aspect-square outline outline-secondary group-hover:rounded-none -rotate-45 group-hover:rotate-45 transition-all duration-300 ease-in-out relative origin-center",
          { "rotate-45": pathname === path }
        )}>
        <div
          className={clsx(
            "w-1/3 aspect-square rounded-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out outline outline-secondary  group-hover:bg-secondary",
            {
              "bg-secondary": pathname === path,
              "bg-transparent": pathname !== path,
            }
          )}
        />
      </div>
      <span className="inline-block capitalize ">{title}</span>
    </Link>
  );
}
