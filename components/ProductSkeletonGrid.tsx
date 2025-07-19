// components/product-grid-skeleton.tsx
export default function ProductSkeletonGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 animate-pulse flex flex-col gap-2"
        >
          <div className="w-full h-32 bg-gray-300 rounded" />
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-3 bg-gray-300 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-1/3 mt-auto" />
        </div>
      ))}
    </div>
  );
}
