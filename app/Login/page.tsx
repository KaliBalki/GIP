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

const Page: React.FC = () => {
  return (
    <>
      <div className="flex  justify-center my-32">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Inloggen</CardTitle>
            <CardDescription className="text-center">
              Voer uw gegevens in om in te loggen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="u@example.com"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password">Wachtwoord</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="mt-1"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Button type="submit" className="w-full">
              Inloggen
            </Button>
            <Link
              href="/Signup"
              className="mt-3 text-sm text-blue-600 hover:underline"
            >
              Nog geen account?
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Page;