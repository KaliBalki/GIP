"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    voornaam: "",
    naam: "",
    telefoonnummer: "",
    email: "",
    wachtwoord: "",
    geboortedatum: "",
    geslacht: "M",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert("Account succesvol aangemaakt!");
        setFormData({
          voornaam: "",
          naam: "",
          telefoonnummer: "",
          email: "",
          wachtwoord: "",
          geboortedatum: "",
          geslacht: "M",
        });
      } else {
        alert("Fout bij aanmaken account: " + result.error);
      }
    } catch (err: any) {
      alert("Netwerkfout: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Registreren</CardTitle>
          <CardDescription className="text-center">
            Maak een nieuw account aan
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="voornaam">Voornaam</Label>
              <Input
                id="voornaam"
                name="voornaam"
                value={formData.voornaam}
                onChange={handleChange}
                placeholder="Jan"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="naam">Achternaam</Label>
              <Input
                id="naam"
                name="naam"
                value={formData.naam}
                onChange={handleChange}
                placeholder="Jansen"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="telefoonnummer">Telefoonnummer</Label>
              <Input
                type="tel"
                id="telefoonnummer"
                name="telefoonnummer"
                value={formData.telefoonnummer}
                onChange={handleChange}
                placeholder="+31 6 12345678"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="u@example.com"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="wachtwoord">Wachtwoord</Label>
              <Input
                type="password"
                id="wachtwoord"
                name="wachtwoord"
                value={formData.wachtwoord}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="geboortedatum">Geboortedatum</Label>
              <Input
                type="date"
                id="geboortedatum"
                name="geboortedatum"
                value={formData.geboortedatum}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label>Geslacht</Label>
              <RadioGroup
                name="geslacht"
                value={formData.geslacht}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, geslacht: value }))
                }
                className="flex space-x-6 mt-1"
              >
                <div className="flex items-center">
                  <RadioGroupItem value="M" id="geslacht-man" />
                  <Label htmlFor="geslacht-man" className="ml-2">
                    Man
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="V" id="geslacht-vrouw" />
                  <Label htmlFor="geslacht-vrouw" className="ml-2">
                    Vrouw
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Button type="submit" className="w-full">
              Registreren
            </Button>
            <Link
              href="/login"
              className="mt-3 text-sm text-blue-600 hover:underline"
            >
              Heb je al een account?
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Page;
