import Image from "next/image";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col bg-background">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 14% 20%, rgb(212 160 23 / 0.07), transparent 30%), radial-gradient(circle at 86% 18%, rgb(24 24 27 / 0.04), transparent 34%), linear-gradient(180deg, #fafafa 0%, #f4f4f5 100%)",
        }}
      />

      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-10 sm:px-8 lg:py-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <section className="max-w-xl">
            <h1 className="animate-hero-rise text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.5rem]">
              Focus sessions as metro rides.
            </h1>

            <p className="animate-hero-rise-delay-1 mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
             Turn every focus session into a subway ride — and every completed ride into a station you've earned.
            </p>

            <div className="animate-hero-rise-delay-2 mt-8">
              <AppStoreBadge />
            </div>
          </section>

          <section
            className="animate-hero-rise-delay-1 flex justify-center lg:justify-end lg:self-end"
            aria-label="Focus Metro app preview"
          >
            <div className="animate-phone-float relative mt-6 w-[210px] sm:mt-10 sm:w-[240px] lg:mt-14 lg:w-[260px]">
              <Image
                src="/focusmetro-iPhone-screenshot.webp"
                alt="Focus Metro app showing a focus ride timer on iPhone"
                width={780}
                height={1600}
                priority
                className="h-auto w-full drop-shadow-[0_24px_60px_-22px_rgba(24,24,27,0.5)]"
              />
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
