export function normalizeStats(
  stats: (
    | { base_stat: number; name: string }
    | { base_stat: number; stat: { name: string } }
  )[]
): { base_stat: number; name: string }[] {
  return stats.map((s) =>
    "stat" in s ? { base_stat: s.base_stat, name: s.stat.name } : s
  );
}
