import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Calendar,
  TrendingUp,
  TrendingDown,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  X,
  CalendarDays,
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SummaryCard } from "@/components/ui/summary-card";
import { mockLeads, mockActivities } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Lead } from "@/components/tables/LeadsTable";

const statusColors: Record<string, string> = {
  new: "bg-primary text-primary-foreground",
  contacted: "bg-accent text-accent-foreground",
  qualified: "bg-warning text-warning-foreground",
  proposal: "bg-primary/80 text-primary-foreground",
  negotiation: "bg-warning/80 text-warning-foreground",
  converted: "bg-success text-success-foreground",
  lost: "bg-destructive text-destructive-foreground",
};

const activityIcons: Record<string, React.ElementType> = {
  call: Phone,
  email: Mail,
  meeting: Calendar,
  note: MessageSquare,
};

const AgentDashboard = () => {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const myLeads = mockLeads.filter((l) => l.assignedAgent === "John Smith");
  const followUpsToday = myLeads.filter(
    (l) => l.nextFollowUp && new Date(l.nextFollowUp).toDateString() === new Date().toDateString()
  ).length;
  const convertedLeads = myLeads.filter((l) => l.status === "converted").length;
  const lostLeads = myLeads.filter((l) => l.status === "lost").length;

  return (
    <DashboardLayout role="agent" title="My Dashboard">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <SummaryCard
          title="My Leads"
          value={myLeads.length}
          icon={ClipboardList}
          delay={0}
        />
        <SummaryCard
          title="Follow-ups Today"
          value={followUpsToday}
          icon={Calendar}
          variant="warning"
          delay={0.1}
        />
        <SummaryCard
          title="Converted Leads"
          value={convertedLeads}
          icon={TrendingUp}
          variant="success"
          delay={0.2}
        />
        <SummaryCard
          title="Lost Leads"
          value={lostLeads}
          icon={TrendingDown}
          variant="destructive"
          delay={0.3}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        {/* My Leads Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="xl:col-span-2 rounded-xl border border-border bg-card shadow-sm overflow-hidden"
        >
          <div className="p-4 md:p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">My Leads</h2>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="min-w-[150px]">Lead Name</TableHead>
                  <TableHead className="min-w-[180px]">Contact Info</TableHead>
                  <TableHead className="min-w-[100px]">Status</TableHead>
                  <TableHead className="min-w-[140px]">Next Follow-up</TableHead>
                  <TableHead className="text-right min-w-[160px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLeads.slice(0, 6).map((lead, index) => (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-card-hover group"
                  >
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p className="text-muted-foreground truncate">{lead.email}</p>
                        <p className="text-muted-foreground">{lead.phone}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColors[lead.status]}>
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {lead.nextFollowUp ? (
                        <div className="flex items-center gap-2 text-sm">
                          <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          <span className="truncate">{lead.nextFollowUp}</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedLead(lead)}
                          className="shrink-0"
                        >
                          View
                        </Button>
                        <Button
                          size="sm"
                          className="gradient-teal text-primary-foreground shrink-0"
                          onClick={() => setSelectedLead(lead)}
                        >
                          Update
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        {/* Activity Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl border border-border bg-card shadow-sm overflow-hidden"
        >
          <div className="p-4 md:p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Activity Timeline</h2>
          </div>
          <div className="p-4 md:p-6">
            <div className="space-y-6">
              {mockActivities.map((activity, index) => {
                const Icon = activityIcons[activity.type] || MessageSquare;
                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 md:gap-4"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                        <Icon className="h-4 w-4 text-accent-foreground" />
                      </div>
                      {index < mockActivities.length - 1 && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-border" />
                      )}
                    </div>
                    <div className="flex-1 pt-1 min-w-0">
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3 flex-shrink-0" />
                        {activity.time}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lead Detail Modal */}
      <AnimatePresence>
        {selectedLead && (
          <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
            <DialogContent className="w-[95vw] max-w-lg max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Lead Details</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                {/* Lead Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-muted-foreground">Name</Label>
                    <p className="font-medium">{selectedLead.name}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Company</Label>
                    <p className="font-medium">{selectedLead.company}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <Label className="text-muted-foreground">Email</Label>
                    <p className="font-medium break-all">{selectedLead.email}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Phone</Label>
                    <p className="font-medium">{selectedLead.phone}</p>
                  </div>
                </div>

                {/* Status Update */}
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select defaultValue={selectedLead.status}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="qualified">Qualified</SelectItem>
                      <SelectItem value="proposal">Proposal</SelectItem>
                      <SelectItem value="negotiation">Negotiation</SelectItem>
                      <SelectItem value="converted">Converted</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label>Notes</Label>
                  <Textarea
                    placeholder="Add notes about this lead..."
                    className="min-h-[100px] resize-none"
                  />
                </div>

                {/* Follow-up Date */}
                <div className="space-y-2">
                  <Label>Next Follow-up Date</Label>
                  <Input type="date" defaultValue={selectedLead.nextFollowUp} />
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="flex-1 gradient-teal text-primary-foreground"
                    onClick={() => setSelectedLead(null)}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedLead(null)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
};

export default AgentDashboard;
