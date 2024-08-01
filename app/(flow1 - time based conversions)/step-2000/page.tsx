"use client";
import { useEffect, useState } from "react";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Button } from "@/components/ui/button";

type Offer = {
  offerid: number;
  name: string;
  name_short: string;
  description: string;
  adcopy: string;
  picture: string;
  payout: string;
  country: string;
  device: string;
  link: string;
  epc: string;
  boosted: boolean;
  ctype: string;
  cvr: string;
};

const OffersPage = () => {
  const [value, setValue] = useState("");
  const [boostedOffers, setBoostedOffers] = useState<Offer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  const [clickedOffers, setClickedOffers] = useState<Set<number>>(new Set());

  const baseUrl = "https://rewards.coinmaster.com/rewards/rewards.html?c=";
  const params = [
    "pe_RICHHpWPBO_20240722",
    "pe_RICHvvqUYO_20240722",
    "pe_CHATBisXFKC_20240727",
    "pe_FCBhvMKTZ_20240727",
    "pe_INSEqdWWZ_20240726",
    "pe_FCBgVFRaE_20240726",
    "pe_EMAILcQPNxR_20240721",
    "pe_FCByVaCRp_20240726",
    "pe_TWINlHiAr_20240725",
    "pe_FCBVabUUU_20240725",
    "pe_FCBBhhVYA_20240725",
    "pe_INSnvNOaU_20240725",
    "pe_TWINlHiAr_20240725",
  ];
  const defaultClasses =
    "text-blue-600 hover:text-zinc-900 text-center  btndisabled rounded py-2 bg-white";

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("/api/fetchOffers");
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          const filteredOffers = data.offers.filter(
            (offer: Offer) => offer.offerid === 57813,
          );
          setBoostedOffers(filteredOffers || []);
        }
      } catch (err) {
        console.error("Frontend Fetch Error:", err);
        setError("Failed to fetch offers");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown !== null) {
      if (countdown > 0) {
        timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      } else {
        setCountdown(null);
        setCompletedTasks((prev) => prev + 1);
      }
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleOfferClick = (offerid: number, event: React.MouseEvent) => {
    // event.preventDefault();
    if (countdown === null && !clickedOffers.has(offerid)) {
      setClickedOffers(new Set(clickedOffers.add(offerid)));
      if (offerid === 10001) {
        setCountdown(10);
      } else if (offerid === 10002) {
        setCountdown(30);
      } else {
        setCountdown(5);
      }
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="1-step px-2">
      <div className="absolute -top-0 left-1/2 -translate-x-1/2 transform">
        <span className="relative flex">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-500">
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
      <p className="pt-4 text-center text-xl font-bold text-orange-500">
        Step 2 - Final Step
      </p>

      <h3 className="mb-4 mt-4 text-left text-2xl font-semibold text-zinc-900">
        Play Coin Master & Complete Village Level 3!
      </h3>

      {/* <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}

      <ul>
        {boostedOffers.map((offer) => (
          <li key={offer.offerid} className="mb-2">
            <a
              href={offer.link}
              className="offer flex rounded hover:bg-gray-100"
              target="_blank"
              onClick={(event) => handleOfferClick(offer.offerid, event)}
            >
              <img
                src={offer.picture}
                alt="offer"
                height={64}
                width={64}
                className="h-14 w-14 rounded-lg"
              />
              <div className="-mb-2 ml-2 flex w-full items-center gap-2 border-gray-300">
                <div className="w-full text-left">
                  <h3 className="text-[14px] font-medium leading-tight">
                    {offer.name_short}
                  </h3>
                  <p className="block max-h-10 overflow-hidden text-[12px] text-gray-900">
                    {offer.adcopy}
                  </p>
                </div>
                <div>
                  <div className="block w-20 rounded-3xl bg-blue-700 p-1 text-center text-xs font-semibold leading-5 text-white">
                    Get
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            TIP: Are you out of spins? Click here
          </AccordionTrigger>
          <AccordionContent>
            <div className="completed-apps relative my-3 rounded-xl bg-slate-200 p-4 text-left shadow">
              <div className="flex">
                <h1 className="mb-2 text-left text-2xl font-bold text-gray-700">
                  Would you like to speed up the process?
                </h1>
              </div>
              <p>
                Come back any time to use Extra Free Spins. Click links below to
                receive 15, 25 or even 50 extra spins.
              </p>
              <div className="free-spins flex items-center justify-center">
                <div className="grid w-full grid-cols-2 gap-2 p-4">
                  {params.map((param, index) => (
                    <a
                      key={index}
                      href={`${baseUrl}${param}`}
                      className={defaultClasses}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Free Spins #{index + 1}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="completed-apps relative my-3 rounded-xl bg-slate-200 p-4 text-left shadow">
        <div className="flex">
          <h1 className="text-left text-2xl font-bold text-gray-700">
            {/* Completed: {completedTasks}/2 */}
            Status: Not Completed
          </h1>
        </div>

        <div className="check-button mx-auto">
          <div className="flex items-center justify-between">
            {countdown !== null && (
              <div className="">
                <p className="hidden pt-4 text-center text-xl font-bold text-green-500">
                  Checking completion ({countdown})
                </p>
              </div>
            )}

            {completedTasks === 1 && (
              <div className="w-full">
                <p className="text-md py-2">
                  Click the button below once you&quot;ve completed the required
                  level.
                </p>
                <Link
                  href="/travel"
                  className="focus:shadow-outline mt-2 flex w-full items-center justify-center rounded-2xl bg-blue-700 px-4 py-2 font-bold leading-10 text-white hover:bg-blue-700 focus:outline-none"
                >
                  <span>Confirm completion</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
