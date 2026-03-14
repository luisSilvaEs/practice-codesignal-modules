import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
} from "@/components/ui/menubar";
import { ChevronDown, Play, Upload, Clock, Moon, User } from "lucide-react";
import { cn } from "@/lib/utils";

import { useTheme } from "@/context/ThemeContext";

const LANGUAGES = ["TypeScript", "JavaScript", "Python", "Java", "C++"];

interface TopBarProps {
  problemTitle?: string;
  taskNumber?: number;
  totalTasks?: number;
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const pad = (n: number) => String(n).padStart(2, "0");
  const display =
    h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;

  return (
    <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono tabular-nums">
      <Clock className="size-3.5" />
      {display}
    </span>
  );
}

function LanguageSelector({
  language,
  onChange,
}: {
  language: string;
  onChange: (l: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-md bg-background hover:bg-background border border-[#2e3250] px-3 py-1.5 text-sm text-foreground transition-colors"
      >
        {language}
        <ChevronDown
          className={cn(
            "size-3.5 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <div className="absolute top-full mt-1 left-0 z-50 min-w-35 rounded-md border border-[#2e3250] bg-background py-1 shadow-xl">
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                onChange(lang);
                setOpen(false);
              }}
              className={cn(
                "w-full px-3 py-1.5 text-left text-sm transition-colors hover:bg-[#252840]",
                lang === language ? "text-[#7c84f0]" : "text-[#c8cce8]",
              )}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TopBar({
  problemTitle = "Array Manipulation",
  taskNumber = 1,
  totalTasks = 5,
}: TopBarProps) {
  const [language, setLanguage] = useState("TypeScript");
  const { setTheme } = useTheme();

  return (
    <header className="flex h-12 items-center justify-between border-b border-border bg-background px-4 shrink-0">
      {/* Left: logo + breadcrumb */}
      <div className="flex items-center gap-3 karina">
        {/* CodeSignal-style logo mark */}
        <div className="flex items-center gap-1.5">
          <div className="flex size-7 items-center justify-center rounded bg-[#7c84f0]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7L5.5 10.5L12 3.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-sm font-semibold text-foreground tracking-tight">
            CodeSignal
          </span>
        </div>

        <span className="text-[#2e3250]">/</span>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#8b8fa8]">Practice</span>
          <span className="text-[#2e3250]">/</span>
          <span className="text-[#c8cce8] font-medium">{problemTitle}</span>
        </div>

        <span className="rounded bg-muted border border-[#2e3250] px-2 py-0.5 text-xs text-[#8b8fa8]">
          {taskNumber}/{totalTasks}
        </span>
      </div>

      {/* Center: language + timer */}
      <div className="flex items-center gap-4">
        <LanguageSelector language={language} onChange={setLanguage} />
        <Timer />
      </div>

      {/* Right: actions + avatar */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="border-[#2e3250] bg-muted text-[#c8cce8] hover:bg-[#252840] hover:text-foreground gap-1.5"
        >
          <Play className="size-3.5" />
          Run
        </Button>
        <Button
          size="sm"
          className="bg-[#4caf7d] hover:bg-[#43a371] text-foreground border-0 gap-1.5"
        >
          <Upload className="size-3.5" />
          Submit
        </Button>
        <Menubar className="flex border-0">
          <MenubarMenu>
            <MenubarTrigger className="text-foreground hover:bg-muted aria-expanded:bg-muted aria-expanded:text-foreground">
              <Moon className="size-3.5" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarGroup>
                <MenubarItem onClick={() => setTheme("system")}>
                  System
                </MenubarItem>
                <MenubarItem onClick={() => setTheme("light")}>
                  Light
                </MenubarItem>
                <MenubarItem onClick={() => setTheme("dark")}>Dark</MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <div className="ml-1 flex size-7 items-center justify-center rounded-full bg-[#7c84f0] text-foreground text-xs font-semibold cursor-pointer hover:bg-[#6b73e0] transition-colors">
          <User className="size-3.5" />
        </div>
      </div>
    </header>
  );
}
