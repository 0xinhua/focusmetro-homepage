import Image from "next/image";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CONTENT_MAX_WIDTH_CLASS } from "@/lib/site";

const mockups = [
  {
    src: "/focusmetro-login-unlock-nyc-mta-station.webp",
    alt: "Focus Metro unlock screen with NYC MTA stations",
    width: 1125,
    height: 2436,
  },
  {
    src: "/focusmetro-lock-app.webp",
    alt: "Focus Metro lock apps screen",
    width: 1125,
    height: 2436,
  },
  {
    src: "/focusmetro-timer.webp",
    alt: "Focus Metro focus timer screen",
    width: 1125,
    height: 2436,
  },
] as const;

const features = [
  {
    title: "Unlock Stations by focusing",
    description:
      "Complete focus rides to unlock NYC MTA stations along your line.",
  },
  {
    title: "Lock Distractions Apps",
    description:
      "Shield selected apps while you ride so focus stays outside the phone.",
  },
  {
    title: "Focus Analytics get things done",
    description:
      "Track your focus time and see when you concentrate best.",
  },
] as const;

export default function Home() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col bg-background">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <div
          className={`mx-auto flex w-full ${CONTENT_MAX_WIDTH_CLASS} flex-1 flex-col px-5 pb-8 pt-12 sm:px-6 sm:pb-10 sm:pt-16 lg:pt-20`}
        >
          <section className="mx-auto max-w-2xl text-center">
            <h1 className="animate-hero-rise text-[2.35rem] font-semibold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Focus timer but different.
            </h1>
            <p className="animate-hero-rise-delay-1 mx-auto mt-5 max-w-xl text-lg font-medium leading-7 text-zinc-600 dark:text-zinc-200 sm:text-lg sm:leading-8">
             Explore NYC subway by focusing, turn focus session into a subway ride, block distraction Apps & unlock stations.
            </p>
            <div className="animate-hero-rise-delay-2 mt-8 flex justify-center">
              <AppStoreBadge />
            </div>
          </section>

          <section
            className="animate-hero-rise-delay-1 mt-12 flex flex-col items-center justify-center gap-4 sm:mt-16 sm:flex-row sm:gap-3"
            aria-label="Focus Metro app previews"
          >
            {mockups.map((mockup) => (
              <div
                key={mockup.src}
                className="relative w-full max-w-[220px] sm:w-[220px] sm:max-w-none sm:shrink-0"
              >
                <Image
                  src={mockup.src}
                  alt={mockup.alt}
                  width={mockup.width}
                  height={mockup.height}
                  priority
                  sizes="220px"
                  className="h-auto w-full rounded-2xl dark:ring-1 dark:ring-white/15"
                />
              </div>
            ))}
          </section>

          <section
            className="mt-16 space-y-8 text-left sm:mt-20 sm:space-y-10"
            aria-label="Core features"
          >
            {features.map((feature) => (
              <div key={feature.title}>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-xl">
                  {feature.title}
                </h2>
                <p className="mt-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-200 sm:text-base sm:leading-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
