import { Poppins, Megrim } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const megrim = Megrim({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-megrim",
});

export { poppins, megrim };
