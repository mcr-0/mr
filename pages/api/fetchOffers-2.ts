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

const apiKey = "26364|5TzQWMqiSi7G50xQpwAfB1niUU1QYiFYB3PcBXht6bba467e"; // Enter the API key that you have generated on our main Offer API page
const endpoint = "https://verifysuper.com/api/v2"; // The endpoint show in our main Offer API page

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const userAgent = req.headers["user-agent"];

  if (!userAgent) {
    res.status(400).json({ error: "Missing User Agent" });
    return;
  }

  const data = {
    ip: "23.81.55.243", // Fixed IP address
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
