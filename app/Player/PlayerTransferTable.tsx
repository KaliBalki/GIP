import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PlayerTransferTable: React.FC = () => {
  return (
    <div className="mt-10">
      <Table>
        <TableCaption>
          If you recognize any mistake, please contact us
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Season</TableHead>
            <TableHead>Club</TableHead>
            <TableHead>Apps (Subs)</TableHead>
            <TableHead className="text-right">Goals</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">2024/2025</TableCell>
            <TableCell>Newcastle United</TableCell>
            <TableCell>23 (1)</TableCell>
            <TableCell className="text-right">2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2024/2025</TableCell>
            <TableCell>Newcastle United</TableCell>
            <TableCell>23 (1)</TableCell>
            <TableCell className="text-right">2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2024/2025</TableCell>
            <TableCell>Newcastle United</TableCell>
            <TableCell>23 (1)</TableCell>
            <TableCell className="text-right">2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2024/2025</TableCell>
            <TableCell>Newcastle United</TableCell>
            <TableCell>23 (1)</TableCell>
            <TableCell className="text-right">2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2024/2025</TableCell>
            <TableCell>Newcastle United</TableCell>
            <TableCell>23 (1)</TableCell>
            <TableCell className="text-right">2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2024/2025</TableCell>
            <TableCell>Newcastle United</TableCell>
            <TableCell>23 (1)</TableCell>
            <TableCell className="text-right">2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PlayerTransferTable;
