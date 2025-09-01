import type { Metadata } from "next";
import "./ui/styles/globals.css";
import { poppins, megrim } from "./ui/fonts";

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
        {children}
      </body>
    </html>
  );
}
