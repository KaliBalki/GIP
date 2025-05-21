import { NextResponse } from "next/server";
import { query } from "@/app/_db/db";

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await query({
      query: "DELETE FROM tblTicket WHERE ticketID = ?",
      values: [id],
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(`/api/tickets/${id} DELETE error:`, err);
    return NextResponse.json(
      { error: "Kon ticket niet verwijderen." },
      { status: 500 }
    );
  }
}
