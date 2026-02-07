import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", leads: 45 },
  { month: "Feb", leads: 52 },
  { month: "Mar", leads: 48 },
  { month: "Apr", leads: 70 },
  { month: "May", leads: 65 },
  { month: "Jun", leads: 85 },
  { month: "Jul", leads: 92 },
  { month: "Aug", leads: 88 },
  { month: "Sep", leads: 105 },
  { month: "Oct", leads: 115 },
  { month: "Nov", leads: 125 },
  { month: "Dec", leads: 140 },
];

export function MonthlyGrowthChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-xl border border-border bg-card p-6 shadow-sm"
    >
      <h3 className="mb-4 text-lg font-semibold text-foreground">
        Monthly Lead Growth
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 90%)" />
            <XAxis
              dataKey="month"
              stroke="hsl(0, 0%, 45%)"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              stroke="hsl(0, 0%, 45%)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(0, 0%, 90%)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="hsl(186, 67%, 36%)"
              strokeWidth={3}
              dot={{ fill: "hsl(186, 67%, 36%)", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: "hsl(186, 67%, 36%)" }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
