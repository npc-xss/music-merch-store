import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  className?: string;
  category: string;
  icon: React.ReactNode;
}

export default function CategoryTabs({
  className,
  category,
  icon,
}: CategoryTabsProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer gap-2 rounded-xl border bg-neutral-800 p-4 hover:bg-neutral-700",
        className
      )}
    >
      {icon}
      <h1>{category}</h1>
    </div>
  );
}
