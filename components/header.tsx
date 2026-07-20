import { NAV_LINKS } from "@/lib/context";
import { link } from "fs";
import Link from "next/link";

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
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default header;
