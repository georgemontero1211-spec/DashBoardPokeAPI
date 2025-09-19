type Stat = {
  base_stat: number;
  name: string;
};

type PokemonStatsChartProps = {
  stats: Stat[];
};

export default function PokemonStatsChart({ stats }: PokemonStatsChartProps) {
  const maxStat = Math.max(...stats.map(s => s.base_stat));

  return (
    <div className="flex flex-col gap-2 w-full mt-12">
      {stats.map((stat) => (
        <div key={stat.name} className="flex items-center gap-2">
          <span className="w-24 text-right font-medium capitalize">{stat.name}</span>
          <div className="flex-1 h-6 bg-gray-200 rounded">
            <div
              className="h-6 bg-blue-500 rounded"
              style={{ width: `${(stat.base_stat / maxStat) * 100}%` }}
            ></div>
          </div>
          <span className="w-8 text-right font-medium">{stat.base_stat}</span>
        </div>
      ))}
    </div>
  );
}
