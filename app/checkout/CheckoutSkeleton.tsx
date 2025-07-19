// components/skeletons/CheckoutSkeleton.tsx
export default function CheckoutSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="h-6 w-1/3 bg-gray-300 rounded mb-6" />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5 space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-300 rounded" />
          ))}
          <div className="h-12 bg-gray-400 rounded mt-4" />
        </div>

        <div className="lg:w-2/5 space-y-4">
          <div className="h-6 w-1/2 bg-gray-300 rounded" />
          <div className="h-24 bg-gray-200 rounded" />
          <div className="h-6 bg-gray-300 rounded" />
          <div className="h-10 bg-gray-400 rounded" />
        </div>
      </div>
    </div>
  );
}
