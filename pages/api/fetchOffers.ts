import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

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

type ApiResponse = {
  success: boolean;
  offers?: Offer[];
  error?: string;
};

type Data = {
  offers?: Offer[];
  error?: string;
};

const apiKey = "26899|zknapf2UkQWLi3IAG0O6itg4Sor6bvoKeyCPebsM228cb54f"; // Enter the API key that you have generated on our main Offer API page
const endpoint = "https://locked2.com/api/v2"; // The endpoint show in our main Offer API page

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const userAgent = req.headers["user-agent"];
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (!userAgent) {
    res.status(400).json({ error: "Missing User Agent" });
    return;
  }

  if (!ip) {
    res.status(400).json({ error: "Missing IP Address" });
    return;
  }

  const data = {
    ip: ip.toString(), // Dynamic IP address
    user_agent: userAgent,
    // Enter other optional vars here (ctype, max, etc)
  };

  const url = `${endpoint}?${new URLSearchParams(data as any).toString()}`;
  console.log("Request URL:", url);

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      console.error("Response Error:", response.statusText);
      throw new Error(`Error: ${response.statusText}`);
    }

    // Jawne zadeklarowanie typu odpowiedzi
    const content: ApiResponse = (await response.json()) as ApiResponse;
    console.log("Response Content:", content);

    if (content.success) {
      res.status(200).json({ offers: content.offers });
    } else {
      console.error("API Error:", content.error);
      res.status(500).json({ error: content.error });
    }
  } catch (error) {
    console.error("Fetch Error:", (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
}
