import { motion } from "framer-motion";
import { Eye, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  source: string;
  status: "new" | "contacted" | "qualified" | "proposal" | "negotiation" | "converted" | "lost";
  assignedAgent: string;
  date: string;
  nextFollowUp?: string;
}

interface LeadsTableProps {
  leads: Lead[];
  showAgent?: boolean;
  showActions?: boolean;
  onView?: (lead: Lead) => void;
  onUpdate?: (lead: Lead) => void;
}

const statusColors: Record<Lead["status"], string> = {
  new: "bg-primary text-primary-foreground",
  contacted: "bg-accent text-accent-foreground",
  qualified: "bg-warning text-warning-foreground",
  proposal: "bg-primary/80 text-primary-foreground",
  negotiation: "bg-warning/80 text-warning-foreground",
  converted: "bg-success text-success-foreground",
  lost: "bg-destructive text-destructive-foreground",
};

export function LeadsTable({
  leads,
  showAgent = true,
  showActions = true,
  onView,
  onUpdate,
}: LeadsTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold min-w-[150px]">Lead Name</TableHead>
            <TableHead className="font-semibold min-w-[120px]">Source</TableHead>
            <TableHead className="font-semibold min-w-[100px]">Status</TableHead>
            {showAgent && <TableHead className="font-semibold min-w-[140px]">Assigned Agent</TableHead>}
            <TableHead className="font-semibold min-w-[100px]">Date</TableHead>
            {showActions && <TableHead className="font-semibold text-right min-w-[80px]">Action</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead, index) => (
            <motion.tr
              key={lead.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group transition-colors hover:bg-card-hover"
            >
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell className="text-muted-foreground">{lead.source}</TableCell>
              <TableCell>
                <Badge className={statusColors[lead.status]} variant="secondary">
                  {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                </Badge>
              </TableCell>
              {showAgent && (
                <TableCell className="text-muted-foreground">{lead.assignedAgent}</TableCell>
              )}
              <TableCell className="text-muted-foreground">{lead.date}</TableCell>
              {showActions && (
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onView?.(lead)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      {onUpdate && (
                        <DropdownMenuItem onClick={() => onUpdate(lead)}>
                          Update Status
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              )}
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
