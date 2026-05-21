import GlobalLoader from "./GlobalLoader";

function SkeletonBlock({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-xl bg-gray-200/80 ${className}`}
      aria-hidden="true"
    />
  );
}

function PageShell({ children, className = "" }) {
  return (
    <div className={`w-full bg-white ${className}`} role="status" aria-live="polite">
      <span className="sr-only">Loading</span>
      {children}
    </div>
  );
}

export function RouteLoader() {
  return <GlobalLoader fullScreen={false} />;
}

export function HomePageSkeleton() {
  return (
    <PageShell className="space-y-8">
      <SkeletonBlock className="h-[360px] w-full rounded-none md:h-[480px]" />
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-[1fr_1.4fr]">
        <SkeletonBlock className="h-44" />
        <SkeletonBlock className="h-44" />
      </div>
      <ProductGridSkeleton />
    </PageShell>
  );
}

export function ProductGridSkeleton({ count = 9 }) {
  return (
    <PageShell className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <SkeletonBlock className="aspect-square w-full" />
            <SkeletonBlock className="mt-4 h-4 w-3/4" />
            <SkeletonBlock className="mt-3 h-4 w-1/2" />
            <div className="mt-4 flex items-center justify-between">
              <SkeletonBlock className="h-6 w-24" />
              <SkeletonBlock className="h-9 w-9 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

export function ProductDetailsSkeleton() {
  return (
    <PageShell className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl bg-white p-6 shadow-xl md:p-10 lg:grid-cols-2">
        <div>
          <SkeletonBlock className="h-[450px] w-full rounded-3xl" />
          <div className="mt-5 flex gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonBlock key={index} className="h-[90px] w-[90px] rounded-2xl" />
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <SkeletonBlock className="h-10 w-4/5" />
          <SkeletonBlock className="h-5 w-2/3" />
          <SkeletonBlock className="h-24 w-full rounded-2xl" />
          <div className="grid gap-4 sm:grid-cols-2">
            <SkeletonBlock className="h-28 rounded-2xl" />
            <SkeletonBlock className="h-28 rounded-2xl" />
          </div>
          <SkeletonBlock className="h-28 w-full rounded-2xl" />
          <SkeletonBlock className="h-36 w-full rounded-2xl" />
          <SkeletonBlock className="h-44 w-full rounded-2xl" />
        </div>
      </div>
    </PageShell>
  );
}

export function AdminTableSkeleton({ rows = 8, columns = 6 }) {
  return (
    <PageShell className="min-h-screen p-2 md:p-4">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <SkeletonBlock className="h-8 w-48" />
          <SkeletonBlock className="mt-3 h-4 w-32" />
        </div>
        <SkeletonBlock className="h-10 w-32" />
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
        <div className="grid gap-4 border-b bg-gray-50 p-4" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
          {Array.from({ length: columns }).map((_, index) => (
            <SkeletonBlock key={index} className="h-4" />
          ))}
        </div>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="grid gap-4 border-b border-gray-100 p-4 last:border-b-0"
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: columns }).map((_, columnIndex) => (
              <SkeletonBlock
                key={columnIndex}
                className={columnIndex === 0 ? "h-12 w-12 rounded-xl" : "h-5"}
              />
            ))}
          </div>
        ))}
      </div>
    </PageShell>
  );
}

export function AdminDashboardSkeleton() {
  return (
    <PageShell className="space-y-8 bg-[#fff7f2] p-2">
      <div>
        <SkeletonBlock className="h-10 w-72" />
        <SkeletonBlock className="mt-3 h-5 w-80" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="w-full">
                <SkeletonBlock className="h-4 w-28" />
                <SkeletonBlock className="mt-3 h-8 w-32" />
              </div>
              <SkeletonBlock className="h-12 w-12" />
            </div>
            <SkeletonBlock className="mt-5 h-4 w-full" />
          </div>
        ))}
      </div>
      <AdminTableSkeleton rows={5} columns={6} />
    </PageShell>
  );
}

export function FormSkeleton() {
  return (
    <PageShell className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-5 shadow-md md:p-8">
        <SkeletonBlock className="h-8 w-56" />
        <SkeletonBlock className="mt-3 h-4 w-72" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>
              <SkeletonBlock className="h-4 w-24" />
              <SkeletonBlock className="mt-2 h-12 w-full" />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-end gap-3">
          <SkeletonBlock className="h-12 w-28" />
          <SkeletonBlock className="h-12 w-36" />
        </div>
      </div>
    </PageShell>
  );
}

export function ProfileSkeleton() {
  return (
    <PageShell className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-5">
        <SkeletonBlock className="h-10 w-64" />
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonBlock key={index} className="h-36 w-full rounded-2xl" />
        ))}
      </div>
    </PageShell>
  );
}
