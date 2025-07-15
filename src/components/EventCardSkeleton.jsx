export default function EventCardSkeleton() {
  return (
    <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg animate-pulse space-y-4">
      <div className="h-32 bg-white/20 rounded-lg"></div>
      <div className="h-4 bg-white/20 rounded w-3/4"></div>
      <div className="h-4 bg-white/20 rounded w-1/2"></div>
      <div className="h-10 bg-yellow-400/30 rounded-full"></div>
    </div>
  );
}