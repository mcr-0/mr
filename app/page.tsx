"use client";
import React, { use } from "react";
import Image from "next/image";
// import { Input } from "@nextui-org/input";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, MoveRight } from "lucide-react";
import { Label } from "@/components/ui/label";

// import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function LandingPage() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-300 p-3">
      <div className="absolute -top-0 left-1/2 -translate-x-1/2 transform">
        <span className="relative flex">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500">
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.47663 5.14451C8.43564 5.0565 8.34737 5.00002 8.25013 5.00002H5.28762L8.21137 0.383761C8.26012 0.306768 8.26311 0.209268 8.21913 0.129522C8.17513 0.0495118 8.09111 0 8.00011 0H4.00011C3.90536 0 3.81885 0.0534962 3.77637 0.138252L0.0263616 7.63827C-0.0123982 7.71552 -0.00815015 7.80752 0.037348 7.88126C0.0831098 7.955 0.163354 8 0.250102 8H2.82085L0.019594 14.653C-0.02816 14.7668 0.0143499 14.8988 0.119584 14.9633C0.160073 14.988 0.205073 15 0.249839 15C0.321587 15 0.392339 14.9692 0.441353 14.9113L8.44138 5.41123C8.50411 5.33676 8.51761 5.23275 8.47663 5.14451Z"
                fill="white"
              />
            </svg>
          </span>
        </span>
      </div>
      <p className="pt-4 text-center text-xl font-bold text-red-500">
        Play Games & Level Up!
      </p>

      <Image
        src="/fortnite_v2.png"
        width={400}
        height={300}
        alt="image"
        className="px-12 py-2"
        priority
      ></Image>
      <h1 className="px-4 text-center text-2xl font-bold text-neutral-800">
        Complete (2) Steps To Receive Access
      </h1>
      <div className="flex w-full flex-wrap gap-4 p-4 md:flex-nowrap">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input
            type="text"
            id="email"
            placeholder="Enter username..."
            className="h-16 w-full rounded-2xl bg-white text-lg"
          />
        </div>
        <Link href="tiktok" className="w-full">
          <Button
            className="h-16 w-full rounded-xl text-lg font-semibold"
            variant="destructive"
          >
            Get Started <MoveRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
