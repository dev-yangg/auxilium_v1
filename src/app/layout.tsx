import type { Metadata } from "next";
import "./globals.css";
import { poppins, megrim } from "./ui/fonts";
import AppHeader from "./components/shared/AppHeader";

export const metadata: Metadata = {
  title: "Auxilium",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.className} ${megrim.variable} font-regular text-regular antialiased`}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
