"use client";
import { NAV_LINKS } from "@/lib/context";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

const header = () => {
  return (
    <header className="fixed insert-x-0 top-0 z-50 transition-colors duration-300 w-full">
      <div className="side-width">
        <div className=" py-4 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex item-center gap-1.5 text-base font-medium tracking-[0.01rem] text-overlay-cream "
          >
            <span>Vijay</span>
            <span className="size-1.5 rounded-xl bg-primary self-center-safe"></span>
          </Link>

          <nav className="flex items-center gap-8 text-sm text-overlay-cream/90">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b-2 border-transparent transition-all duration-300  ease-out hover:border-overlay-cream/70 active:border-overlay-cream"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-between items-center">
            <Link
              href="#contact"
              className="h-9 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all flex border-overlay-cream/50 bg-overlay-ink/50 text-overlay-cream backdrop-blur-sm hover:bg-overlay-ink/70"
            >
              <span className="size-2 rounded-full bg-success" />
              Let's Talk
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
