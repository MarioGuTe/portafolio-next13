import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Providers } from "./providers";

const poppins = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mario Gutiérrez Portafolio",
  description: "Portafolio de proyectos y trabajos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
