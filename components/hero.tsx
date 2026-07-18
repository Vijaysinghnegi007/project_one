"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import dayPoster from "@/public/assets/hero-day-poster.webp";
import nightPoster from "@/public/assets/hero-night-poster.webp";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {ArrowUpRightIcon } from "@phosphor-icons/react/ssr"

export default function Hero() {
  const { resolvedTheme } = useTheme();

  const poster = resolvedTheme === "dark" ? nightPoster : dayPoster;

  return (
    <section className="relative h-svh w-full">
      <div>
        <Image
          src={poster}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 flex h-full flex-col ">
        <div className="h-16 shrink-0 sm-h-20" />

        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14 ">
            <div className="max-w-2xl px-4">
              <p className="text-overlay-cream/70">Web Designer, Frontend Devloper</p>
              <h1 className="mt-5  text-[clamp(2.25rem, 5vw,4.25rem)]">
                Mordern Software <br />
                build to think,
                <hr />
                shipped end to end.
              </h1>

              <p>
                I'm Vijay Singh Negi, a Web Designer that design morder web apps
                and responsive designs.
              </p>
            </div>
            <div className="flex gap-4 md:gap-6 lg:gap-8">
              <Button>
                <Link href={"#work"} className="flex gap-3">
                  {" "}
                  View Selected Work <ArrowUpRightIcon className="" />
                </Link>
              </Button>
              <Button>
                <Link href={"#contact"}>
                  {" "}
                  Get in Touch 
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
