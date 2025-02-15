import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import MainFooter from "@/components/layout/MainFooter";
import MainNavbar from "@/components/layout/MainNavbar";
import PageLoader from "@/components/motion/PageLoader";
import SmoothScrolling from "@/components/motion/SmoothScrolling";
import { Providers } from "./providers";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

const avianoBold = localFont({
  src: "./fonts/AvianoSansBold.otf",
  variable: "--font-aviano-bold",
  weight: "100 900",
});
const avianoRegular = localFont({
  src: "./fonts/AvianoSansRegular.otf",
  variable: "--font-aviano-regular",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://hazel-ecommerce-website.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitSans.variable} ${avianoBold.variable} ${avianoRegular.variable}  antialiased`}
      >
        <PageLoader>
          {" "}
          <Providers>
            <SmoothScrolling>
              <MainNavbar />
              <div> {children}</div>
              <MainFooter />
            </SmoothScrolling>
          </Providers>
        </PageLoader>
      </body>
    </html>
  );
}
