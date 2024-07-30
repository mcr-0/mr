"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="">
      <div className="absolute -top-0 left-1/2 -translate-x-1/2 transform">
        <span className="relative flex">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
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
      <p className="pt-4 text-center text-xl font-bold text-green-500">
        You're eligible!
      </p>

      <h1>Are you on TikTok?</h1>

      <Link href="/" className="w-full">
        <Button
          className="h-16 w-full text-lg font-semibold"
          size="lg"
          color="danger"
        >
          Create A New Account
        </Button>
      </Link>
    </div>
  );
}
