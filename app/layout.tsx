import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import * as React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative -z-20 h-full w-full bg-black`}
      >
        <div className="fixed bottom-0 left-0 right-0 -z-10 h-full w-full object-cover object-center opacity-80">
          <Image
            src="/blue-bg.png"
            alt="Background Image"
            className="h-full w-full object-cover opacity-100"
            width={1907}
            height={877}
            priority
          ></Image>
        </div>

        <header className="mx-auto max-w-7xl py-1 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-center text-xl text-white">
            <div className="">
              <span className="animate-pulse">Status: </span>
              <span className="font-semibold text-[#8FFF00]">Available!</span>
            </div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#8FFF00" />
              <path
                d="M5 10L8.5 13.5L14.5 6.5"
                stroke="#1E1E1E"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white">Get Access Now!</h1>
          <p className="mt-2 text-xs uppercase text-gray-100">
            *Access Upon completion 2 steps.
          </p>
        </header>
        <div className="relative p-4">
          <div className="m-auto w-full max-w-xl items-center justify-center rounded-3xl bg-white p-2 shadow-2xl">
            {children}
          </div>
        </div>
        <p className="pb-12 text-center text-xs text-gray-100">
          By continuing you agree with Terms & Privacy Policy.
        </p>
      </body>
    </html>
  );
}
