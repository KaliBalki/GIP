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
  { month: "Interceptions", desktop: 209, mobile: 130 },
  { month: "Saves", desktop: 214, mobile: 140 },
  { month: "Catches", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Barcelona",
    color: "#7145ad",
  },
  mobile: {
    label: "Real Madrid",
    color: "#f69053",
  },
} satisfies ChartConfig;

export function TeamChart() {
  return (
    <Card className="bg-[#0a0a0a44]">
      <CardHeader className="items-center pb-10 text-center">
        <CardTitle className="text-lg sm:text-xl">
          Barcelona vs Real Madrid
        </CardTitle>
        <CardDescription>21 June 2024</CardDescription>
      </CardHeader>
      {/* Set explicit height to avoid collapse and center content */}
      <CardContent className="flex justify-center items-center max-h-[400px]  ">
        <ChartContainer config={chartConfig} className="max-h-[360px] w-full">
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
      <CardFooter className="flex-col items-center gap-2 text-sm">
        <div className="leading-none text-muted-foreground text-center">
          If you recognize any issue, Contact us!
        </div>
      </CardFooter>
    </Card>
  );
}
