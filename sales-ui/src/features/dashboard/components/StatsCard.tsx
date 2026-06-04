import { DashboardStat } from "../types/dashboard.types";

interface StatsCardProps {
  stat: DashboardStat;
}

export default function StatsCard({stat,}: StatsCardProps) {
  
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            {stat.title}
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100">
            {stat.value}
          </h3>
        </div>

        <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-1">
          <span className="text-sm font-medium text-amber-400">
            {stat.change}
          </span>
        </div>
      </div>

      <p className="mt-5 text-sm text-zinc-500">
        {stat.description}
      </p>
    </div>
  );
}