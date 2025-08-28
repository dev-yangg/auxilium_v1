import { megrim } from "@/app/ui/fonts";
import Link from "next/link";
import AppLogo from "./AppLogo";

export default function AppHeader() {
  return (
    <header className="flex p-4">
      <Link
        href={`/`}
        className={`${megrim.className} flex items-center justify-center gap-1`}>
        <AppLogo />
        <span>Auxilium</span>
      </Link>
    </header>
  );
}
