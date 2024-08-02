import { NextResponse } from "next/server";
import getSheetData from "@/lib/googleSheets";

export async function GET() {
  try {
    console.log("Starting to fetch data from Google Sheets in API route");
    const data = await getSheetData();
    console.log("Fetched data from Google Sheets in API route:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(
      "Error fetching data from Google Sheets in API route:",
      error,
    );
    let errorMessage = "Failed to fetch data";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
