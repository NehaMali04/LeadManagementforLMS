import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "John", converted: 24, pending: 8, lost: 3 },
  { name: "Sarah", converted: 18, pending: 12, lost: 5 },
  { name: "Mike", converted: 28, pending: 6, lost: 2 },
  { name: "Emily", converted: 22, pending: 10, lost: 4 },
  { name: "David", converted: 15, pending: 14, lost: 6 },
];

export function AgentPerformanceChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-xl border border-border bg-card p-6 shadow-sm"
    >
      <h3 className="mb-4 text-lg font-semibold text-foreground">
        Agent Performance
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 90%)" />
            <XAxis
              dataKey="name"
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
            <Legend
              verticalAlign="top"
              height={36}
              formatter={(value) => (
                <span className="text-sm capitalize text-foreground">{value}</span>
              )}
            />
            <Bar
              dataKey="converted"
              fill="hsl(142, 76%, 36%)"
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
            />
            <Bar
              dataKey="pending"
              fill="hsl(38, 92%, 50%)"
              radius={[4, 4, 0, 0]}
              animationDuration={1200}
            />
            <Bar
              dataKey="lost"
              fill="hsl(0, 84%, 60%)"
              radius={[4, 4, 0, 0]}
              animationDuration={1400}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
