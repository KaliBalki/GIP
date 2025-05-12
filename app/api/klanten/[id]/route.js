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

export async function PATCH(request, { params }) {
  const { id } = params;
  try {
    const { admin } = await request.json();
    if (typeof admin !== "boolean") {
      return NextResponse.json(
        { error: "Invalid admin value" },
        { status: 400 }
      );
    }

    const result = await query({
      query: "UPDATE tblKlanten SET admin = ? WHERE klantID = ?",
      values: [admin ? 1 : 0, id],
    });

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: "Klant niet gevonden." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, admin }, { status: 200 });
  } catch (err) {
    console.error("Klanten PATCH error:", err);
    return NextResponse.json(
      { error: "Kon admin-status niet bijwerken." },
      { status: 500 }
    );
  }
}