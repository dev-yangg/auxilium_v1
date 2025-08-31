import { megrim } from "@/app/ui/fonts";
import Link from "next/link";
import AppLogo from "./AppLogo";
import TextFlip from "./TextFlip";

export default function AppHeader() {
  return (
    <header className="flex p-4">
      <Link
        href={`/`}
        className={`${megrim.className} flex items-center justify-center gap-1`}>
        <AppLogo className="inline-block place-items-center" />
        {/* <span>Auxilium</span> */}
        <TextFlip text="Auxilium" />
      </Link>
    </header>
  );
}
