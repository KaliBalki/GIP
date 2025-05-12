import { NextResponse } from "next/server";
import { query } from "@/app/_db/db";

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      voornaam,
      naam,
      telefoonnummer,
      email,
      wachtwoord,
      geboortedatum,
      geslacht,
    } = data;

    // Basis-validatie
    if (
      !voornaam ||
      !naam ||
      !telefoonnummer ||
      !email ||
      !wachtwoord ||
      !geboortedatum ||
      !geslacht
    ) {
      return NextResponse.json(
        { error: "Alle velden zijn verplicht." },
        { status: 400 }
      );
    }

    const result = await query({
      query: `
        INSERT INTO tblKlanten
          (voornaam, naam, telefoonnummer, email, wachtwoord, geboortedatum, geslacht)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      values: [
        voornaam,
        naam,
        telefoonnummer,
        email,
        wachtwoord,
        geboortedatum,
        geslacht,
      ],
    });

    return NextResponse.json(
      { success: true, klantID: result.insertId },
      { status: 201 }
    );
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: "Er is iets misgegaan bij het registreren." },
      { status: 500 }
    );
  }
}