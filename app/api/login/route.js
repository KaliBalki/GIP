import { NextResponse } from "next/server";
import { query } from "@/app/_db/db";

export async function POST(request) {
  try {
    const { email, wachtwoord } = await request.json();

    if (!email || !wachtwoord) {
      return NextResponse.json(
        { success: false, error: "E-mail en wachtwoord zijn verplicht." },
        { status: 400 }
      );
    }

    const rows = await query({
      query: `
        SELECT klantID, admin
          FROM tblKlanten
         WHERE email = ? AND wachtwoord = ?
         LIMIT 1
      `,
      values: [email, wachtwoord],
    });

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, error: "Ongeldige inloggegevens." },
        { status: 401 }
      );
    }

    const { klantID, admin } = rows[0];
    return NextResponse.json(
      { success: true, klantID, admin: Boolean(admin) },
      { status: 200 }
    );
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { success: false, error: "Er is iets misgegaan bij het inloggen." },
      { status: 500 }
    );
  }
}