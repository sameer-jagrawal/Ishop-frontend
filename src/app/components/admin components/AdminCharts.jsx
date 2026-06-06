const COLORS = ["#01A49E", "#6366f1", "#f59e0b", "#ef4444", "#10b981", "#8b5cf6"];

export function BarChart({ data = [], labelKey = "_id", valueKey = "count", height = 180 }) {
  const max = Math.max(...data.map((item) => Number(item[valueKey] || 0)), 1);

  return (
    <div className="flex items-end gap-2" style={{ height }}>
      {data.map((item, index) => {
        const value = Number(item[valueKey] || 0);
        const barHeight = Math.max((value / max) * (height - 42), 8);

        return (
          <div key={`${item[labelKey]}-${index}`} className="flex min-w-0 flex-1 flex-col items-center gap-2">
            <div className="flex w-full items-end rounded-sm bg-gray-100" style={{ height: height - 42 }}>
              <div
                className="w-full rounded-sm"
                style={{ height: barHeight, backgroundColor: COLORS[index % COLORS.length] }}
                title={`${item[labelKey]}: ${value}`}
              />
            </div>
            <span className="max-w-full truncate text-[11px] text-gray-500">{item[labelKey]}</span>
          </div>
        );
      })}
    </div>
  );
}

export function PieChart({ data = [], labelKey = "_id", valueKey = "count", size = 150 }) {
  const total = data.reduce((sum, item) => sum + Number(item[valueKey] || 0), 0);
  const stops = data.reduce((segments, item, index) => {
    const value = Number(item[valueKey] || 0);
    const percent = total ? (value / total) * 100 : 0;
    const start = segments.cursor;
    const end = start + percent;

    return {
      cursor: end,
      values: [...segments.values, `${COLORS[index % COLORS.length]} ${start}% ${end}%`],
    };
  }, { cursor: 0, values: [] }).values;

  return (
    <div className="flex items-center gap-5">
      <div
        className="shrink-0 rounded-full border border-gray-100"
        style={{
          width: size,
          height: size,
          background: `conic-gradient(${stops.length ? stops.join(", ") : "#e5e7eb 0 100%"})`,
        }}
      />
      <div className="space-y-2 text-sm">
        {data.map((item, index) => (
          <div key={`${item[labelKey]}-${index}`} className="flex items-center gap-2 text-gray-600">
            <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
            <span className="capitalize">{String(item[labelKey] || "none").replaceAll("_", " ")}</span>
            <span className="text-gray-400">({item[valueKey] || 0})</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProgressList({ data = [], labelKey = "_id", valueKey = "count" }) {
  const max = Math.max(...data.map((item) => Number(item[valueKey] || 0)), 1);

  return (
    <div className="space-y-3">
      {data.map((item, index) => {
        const value = Number(item[valueKey] || 0);
        return (
          <div key={`${item[labelKey]}-${index}`}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="capitalize text-gray-600">{String(item[labelKey] || "none").replaceAll("_", " ")}</span>
              <span className="text-gray-500">{value}</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${Math.max((value / max) * 100, 4)}%`,
                  backgroundColor: COLORS[index % COLORS.length],
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
