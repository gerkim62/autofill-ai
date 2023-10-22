import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import TermsAlert from "@/components/TermsAlert";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autofill AI - Created by the Autofill Team",
  description:
    "A chrome extension that will Autofill online exams for you. You don't have to type anything!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body
        className={`${inter.className} flex flex-col min-h-screen w-[100vw]`}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="w-screen h-[60px] fixed top-0 z-[49] backdrop-blur-sm shadow-sm lg:hidden"></div>

        <TermsAlert />
        <div className="flex flex-grow w-[100vw] ">
          <div className="">
            <Sidebar />
          </div>

          <div
            className="relative z-5 flex-1 flex-grow min"
            style={{ minHeight: "calc(100vh - 270px)" }}
          >
            {children}
          </div>
        </div>
        <Footer />
      </body>
      </ClerkProvider>
    </html>
  );
}
