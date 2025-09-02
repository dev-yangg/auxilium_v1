"use client";

import Link from "next/link";
import AppLogo from "../AppLogo";
import { useState } from "react";
import DashboardLink from "./DashboardLink";
import { dashboard_links } from "./links";
import clsx from "clsx";

export default function DashboardAside({
  asideVisibility,
  setAsideVisibility,
}: {
  asideVisibility: boolean;
  setAsideVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [mouseOnAside, setMouseOnAside] = useState(false);

  return (
    <aside
      className={clsx(
        "bg-primary z-10 h-full w-full xs:w-60 absolute top-0 after:absolute after:h-full after:w-0.5 after:bg-faded-transparent after:right-0 after:top-0 transition-transform duration-300 ease-in-out ",
        { "-translate-x-full": !asideVisibility }
      )}
      onMouseEnter={() => setMouseOnAside(true)}
      onMouseLeave={() => setMouseOnAside(false)}>
      <header className="relative after:absolute after:w-full after:h-0.5 after:bg-faded-transparent after:left-0 after:bottom-0 py-4.5 px-5 flex items-center justify-between ">
        <Link
          href={"/"}
          className="inline-flex ites-center gap-x-2  rounded-sm p-1">
          <AppLogo className="aspect-square" />
          <p className="font-megrim font-black">Auxilium</p>
        </Link>
        <button
          className={`outline outline-transparent rounded-full w-5 aspect-square relative hover:bg-faded-transparent hover:outline-secondary focus:bg-faded-transparent focus:outline-secondary  focus:opacity-100 transition-all duration-300 ease-in-out ${
            mouseOnAside ? "opacity-100" : "md:opacity-0"
          }`}
          onClick={() => setAsideVisibility(!asideVisibility)}>
          <div className="w-1/3 h-[1px] bg-secondary absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-45 rounded-sm origin-left"></div>
          <div className="w-1/3 h-[1px] bg-secondary absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45 rounded-sm origin-left"></div>
        </button>
      </header>
      <ul className="flex flex-col py-8 px-3 gap-y-2">
        {dashboard_links.map((link) => (
          <li key={link.path}>
            <DashboardLink title={link.title} path={link.path} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
