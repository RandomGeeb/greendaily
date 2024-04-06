import { Silkscreen } from "next/font/google";
import "./globals.css";

const pixel = Silkscreen({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Green Daily",
  description: "Team INC HackOMania '24 submission 🌿",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pixel.className}>{children}</body>
    </html>
  );
}
