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
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", wachtwoord: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (result.success) {
        localStorage.setItem("LoggedIn", "true");
        localStorage.setItem("admin", result.admin ? "true" : "false");
        localStorage.setItem("klantID", String(result.klantID));

        alert("Inloggen gelukt!");

        router.push(result.admin ? "/admin" : "/");
      } else {
        alert("Fout: " + result.error);
      }
    } catch (err: any) {
      alert("Netwerkfout: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Inloggen</CardTitle>
          <CardDescription className="text-center">
            Voer uw gegevens in om in te loggen
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
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
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Button type="submit" className="w-full">
              Inloggen
            </Button>
            <Link
              href="/signup"
              className="mt-3 text-sm text-blue-600 hover:underline"
            >
              Nog geen account?
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Page;