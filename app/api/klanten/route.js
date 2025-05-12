import { NextResponse } from "next/server";
import { query } from "@/app/_db/db";

export async function GET(request) {
  try {
    const klanten = await query({
      query:
        "SELECT klantID, voornaam, naam, telefoonnummer, email, admin FROM tblKlanten",
    });
    return NextResponse.json(klanten);
  } catch (err) {
    console.error("Klanten GET error:", err);
    return NextResponse.json(
      { error: "Kon klanten niet ophalen." },
      { status: 500 }
    );
  }
}