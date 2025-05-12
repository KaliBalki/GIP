"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

interface Ticket {
  ticketID: number;
  naam: string;
  prijs: number;
  aantal: number;
  veldid: number;
}

interface Klant {
  klantID: number;
  naam: string;
  voornaam: string;
  telefoonnummer: string;
  email: string;
  admin: boolean;
}

export default function AdminPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [klanten, setKlanten] = useState<Klant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [tRes, kRes] = await Promise.all([
        fetch("/api/tickets"),
        fetch("/api/klanten"),
      ]);
      const tData = await tRes.json();
      const kData = await kRes.json();
      setTickets(tData);
      setKlanten(kData);
    } catch (err) {
      toast.error("Kon data niet laden");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTicket = async (id: number) => {
    if (!confirm(`Weet je zeker dat je ticket ${id} wilt verwijderen?`)) return;
    try {
      const res = await fetch(`/api/tickets/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Ticket verwijderd");
        setTickets((prev) => prev.filter((t) => t.ticketID !== id));
      } else {
        toast.error("Verwijderen mislukt");
      }
    } catch {
      toast.error("Netwerkfout");
    }
  };

  const handleDeleteKlant = async (id: number) => {
    if (!confirm(`Weet je zeker dat je klant ${id} wilt verwijderen?`)) return;
    try {
      const res = await fetch(`/api/klanten/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Klant verwijderd");
        setKlanten((prev) => prev.filter((k) => k.klantID !== id));
      } else {
        toast.error("Verwijderen mislukt");
      }
    } catch {
      toast.error("Netwerkfout");
    }
  };

  return (
    <div className="p-8 space-y-10">
      <Card>
        <CardHeader>
          <CardTitle>Tickets Beheer</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Naam</TableHead>
                <TableHead>Prijs</TableHead>
                <TableHead>Aantal</TableHead>
                <TableHead>Veld ID</TableHead>
                <TableHead>Acties</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((t) => (
                <TableRow key={t.ticketID}>
                  <TableCell>{t.ticketID}</TableCell>
                  <TableCell>{t.naam}</TableCell>
                  <TableCell>€{t.prijs.toFixed(2)}</TableCell>
                  <TableCell>{t.aantal}</TableCell>
                  <TableCell>{t.veldid}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteTicket(t.ticketID)}
                    >
                      Verwijder
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>{loading && <span>Laden...</span>}</CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Klanten Beheer</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Voornaam</TableHead>
                <TableHead>Naam</TableHead>
                <TableHead>Telefoon</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Admin?</TableHead>
                <TableHead>Acties</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {klanten.map((k) => (
                <TableRow key={k.klantID}>
                  <TableCell>{k.klantID}</TableCell>
                  <TableCell>{k.voornaam}</TableCell>
                  <TableCell>{k.naam}</TableCell>
                  <TableCell>{k.telefoonnummer}</TableCell>
                  <TableCell>{k.email}</TableCell>
                  <TableCell>{k.admin ? "Ja" : "Nee"}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteKlant(k.klantID)}
                    >
                      Verwijder
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>{loading && <span>Laden...</span>}</CardFooter>
      </Card>
    </div>
  );
}
