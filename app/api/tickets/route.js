import { NextResponse } from "next/server";
import { query } from "@/app/_db/db";

export async function GET(request) {
  try {
    const tickets = await query({
      query: "SELECT ticketID, naam, prijs, aantal, veldid FROM tblTicket",
    });
    return NextResponse.json(tickets);
  } catch (err) {
    console.error("Tickets GET error:", err);
    return NextResponse.json(
      { error: "Kon tickets niet ophalen." },
      { status: 500 }
    );
  }
}