"use client";
import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
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
export const description = "A radar chart with multiple data";
const chartData = [
{ month: "Doelpunten", desktop: 186, mobile: 80 },
{ month: "Schoten", desktop: 305, mobile: 200 },
{ month: "Passes", desktop: 237, mobile: 120 },
{ month: "Tackles", desktop: 73, mobile: 190 },
{ month: "Intercepties", desktop: 209, mobile: 130 },
{ month: "Reddingen", desktop: 214, mobile: 140 },
{ month: "Vangballen", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Player",
    color: "#324332",
  },
  mobile: {
    label: "Team",
    color: "#6bff6b",
  },
} satisfies ChartConfig;

export function PlayerChartR() {
  return (
    <Card className="bg-[#0a0a0a44] mt-4">
      <CardHeader className="items-center pb-4 text-center">
        {/* Using responsive text size for iPhone (small devices) */}
        <CardTitle className="text-lg sm:text-xl">
          Fade vs FC Barcelona
        </CardTitle>
        <CardDescription>21 June 2024</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
            <Radar dataKey="mobile" fill="var(--color-mobile)" />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground text-center">
          If you recognize any issue, Contact us!
        </div>
      </CardFooter>
    </Card>
  );
}
