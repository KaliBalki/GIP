import { NextResponse } from "next/server";
import { query } from "@/app/_db/db";

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const result = await query({
      query: "DELETE FROM tblTicket WHERE ticketID = ?",
      values: [id],
    });
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: "Ticket niet gevonden." },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Tickets DELETE error:", err);
    return NextResponse.json(
      { error: "Kon ticket niet verwijderen." },
      { status: 500 }
    );
  }
}