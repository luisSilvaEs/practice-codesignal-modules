import { useState } from "react";
import {
  LayoutDashboard,
  Code2,
  Trophy,
  BookOpen,
  BarChart2,
  Settings,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ElementType;
  label: string;
  id: string;
}

const TOP_ITEMS: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Code2, label: "Practice", id: "practice" },
  { icon: BookOpen, label: "Learn", id: "learn" },
  { icon: Trophy, label: "Leaderboard", id: "leaderboard" },
  { icon: BarChart2, label: "Stats", id: "stats" },
];

const BOTTOM_ITEMS: NavItem[] = [
  { icon: HelpCircle, label: "Help", id: "help" },
  { icon: Settings, label: "Settings", id: "settings" },
];

interface SidebarProps {
  defaultActive?: string;
}

export default function Sidebar({ defaultActive = "practice" }: SidebarProps) {
  const [active, setActive] = useState(defaultActive);

  return (
    <nav className="flex h-screen w-14 flex-col items-center border-r border-border bg-background py-3">
      {/* Top nav items */}
      <div className="flex flex-1 flex-col items-center gap-1">
        {TOP_ITEMS.map(({ icon: Icon, label, id }) => (
          <NavButton
            key={id}
            icon={Icon}
            label={label}
            active={active === id}
            onClick={() => setActive(id)}
          />
        ))}
      </div>

      {/* Bottom nav items */}
      <div className="flex flex-col items-center gap-1">
        {BOTTOM_ITEMS.map(({ icon: Icon, label, id }) => (
          <NavButton
            key={id}
            icon={Icon}
            label={label}
            active={active === id}
            onClick={() => setActive(id)}
          />
        ))}
      </div>
    </nav>
  );
}

function NavButton({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={cn(
        "group relative flex size-10 items-center justify-center rounded-lg transition-colors",
        active
          ? "bg-[#7c84f0]/15 text-[#7c84f0]"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r bg-[#7c84f0]" />
      )}
      <Icon className="size-5" />

      {/* Tooltip */}
      <span className="pointer-events-none absolute left-full ml-2 whitespace-nowrap rounded-md border border-[#2e3250] bg-[#1a1c2e] px-2 py-1 text-xs text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </button>
  );
}
