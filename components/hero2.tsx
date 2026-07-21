import React from "react";
import Image from "next/image";
import nightPoster from "@/public/assets/hero-night-poster.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
const hero2 = () => {
  return (
    <section>
      <div className="relative h-svh w-full">
        <Image
          src={nightPoster}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        ></Image>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex h-full flex-col ">
          <div className="flex flex-1 items-center">
            <div className="side-width">
              <div className="max-w-2xl px-4">
                <p className="text-overlay-cream/80">
                  Web Designer &#8226; Frontend Developer
                </p>
                <h1 className="mt-5 heading-clamp leading-[0.9] tracking-tight ">
                  Modern websites <br />
                  built with design, <br />
                  performance, and purpose.
                </h1>
                <p className="mt-5 text-overlay-cream/80">
                  I build responsive websites and interactive user interfaces
                  with clean code, smooth animations, and attention to every
                  detail.
                </p>
              </div>

              <div className=" mt-5 flex gap-4 md-gap-6 lg-gap-8">
                <Button>
                  <Link href={"#work"} className="flex gap-3">
                    View Selected Work <ArrowUpRightIcon className="" />
                  </Link>
                </Button>
                <Button
                  variant={"ghost"}
                  className="bg-overlay-cream/25 hover:bg-overlay-cream/15 "
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          <div className="shrink-0 pb-7 sm:pb-9">
            <div className="side-width">
              <p className="flex ">
                <span className="size-2 rounded-full bg-success" />
                <span>Availabe for New Work</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero2;
