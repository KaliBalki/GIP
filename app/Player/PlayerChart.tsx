"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export const description = "A multiple bar chart";
const chartData = [
  { month: "Goals", desktop: 186, mobile: 80 },
  { month: "Shots", desktop: 305, mobile: 200 },
  { month: "Passing", desktop: 237, mobile: 120 },
  { month: "Tackles", desktop: 73, mobile: 190 },
  { month: "Saves", desktop: 209, mobile: 130 },
  { month: "Catches", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Player",
    color: "#7145ad",
  },
  mobile: {
    label: "Team",
    color: "#f69053",
  },
} satisfies ChartConfig;
export function PlayerChart() {
  return (
    <Card className="bg-[#0a0a0a44] mt-4">
      <CardHeader className="items-center pb-4 text-center">
        <CardTitle className="text-lg sm:text-xl">
          Fade vs FC Barcelona
        </CardTitle>
        <CardDescription>21 June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className=" max-h-[350px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground text-center">
          If you recognize any issue, Contact us!
        </div>
      </CardFooter>
    </Card>
  );
}
