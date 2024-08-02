import { google, sheets_v4 } from "googleapis";
import path from "path";

const getSheetData = async (): Promise<string[]> => {
  try {
    console.log(
      "GOOGLE_SHEETS_CREDENTIALS:",
      process.env.GOOGLE_SHEETS_CREDENTIALS,
    );
    console.log("GOOGLE_SHEETS_ID:", process.env.GOOGLE_SHEETS_ID);

    const auth = new google.auth.GoogleAuth({
      keyFile: path.resolve(process.env.GOOGLE_SHEETS_CREDENTIALS!),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client as any });

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;
    const range = "Sheet1!A2:A"; // Zakres danych w arkuszu

    console.log("Fetching data from Google Sheets");
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    console.log("Fetched data:", rows);
    return rows ? rows.flat() : [];
  } catch (error) {
    console.error("Error in getSheetData:", error);
    throw error;
  }
};

export default getSheetData;
