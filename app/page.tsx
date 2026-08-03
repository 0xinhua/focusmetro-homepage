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

      <main className="flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:gap-8 lg:py-14">
          <section className="w-full min-w-0 text-left">
            <h1 className="animate-hero-rise text-[2.4rem] font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.85rem]">
              Focus timer for ADHD people.
            </h1>

            <p className="animate-hero-rise-delay-1 mt-5 text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8">
              Block distraction App, turn every focus session into a subway ride
              — and every completed ride into a station you&apos;ve earned.
            </p>

            <div className="animate-hero-rise-delay-2 mt-8">
              <AppStoreBadge />
            </div>
          </section>

          <section
            className="animate-hero-rise-delay-1 w-full min-w-0"
            aria-label="Focus Metro app preview"
          >
            <div className="relative w-full">
              <Image
                src="/focusmetro-mockup.webp"
                alt="Focus Metro app mockup"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 64vw"
                className="h-auto w-full rounded-2xl drop-shadow-[0_20px_48px_-20px_rgba(24,24,27,0.45)]"
              />
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
