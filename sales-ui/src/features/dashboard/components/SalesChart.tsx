"use client";

import { useEffect, useState } from "react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { salesChartData } from "../data/mockDashboard";

export default function SalesChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-w-0 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-zinc-100">
            Sales Analytics
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Revenue performance over time
          </p>
        </div>

        <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-1">
          <span className="text-sm text-amber-400">
            Last 90 Days
          </span>
        </div>
      </div>

      <div className="h-[320px] min-w-0">
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={0}
        >
          <AreaChart data={salesChartData}>
            <defs>
              <linearGradient
                id="salesGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#f59e0b"
                  stopOpacity={0.3}
                />

                <stop
                  offset="95%"
                  stopColor="#f59e0b"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#27272a"
              vertical={false}
            />

            <XAxis
              dataKey="date"
              tick={{ fill: "#a1a1aa" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#a1a1aa" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor:
                  "#18181b",
                border:
                  "1px solid #27272a",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#f59e0b"
              strokeWidth={3}
              fill="url(#salesGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}