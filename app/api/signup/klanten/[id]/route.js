import { NextResponse } from "next/server";
import { query } from "@/app/_db/db";

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const result = await query({
      query: "DELETE FROM tblKlanten WHERE klantID = ?",
      values: [id],
    });
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: "Klant niet gevonden." },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Klanten DELETE error:", err);
    return NextResponse.json(
      { error: "Kon klant niet verwijderen." },
      { status: 500 }
    );
  }
}