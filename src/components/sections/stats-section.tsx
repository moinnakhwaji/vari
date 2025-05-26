import { cn } from "@/lib/utils";
import { campaignStats } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="py-16 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {campaignStats.map((stat, index) => (
            <div
              key={stat.id}
              className={cn(
                "text-center text-white",
                index < campaignStats.length - 1 ? "border-r border-white/30" : "",
              )}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}