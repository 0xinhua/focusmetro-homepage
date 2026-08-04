import type { Metadata } from "next";
import { EnvelopeSimple, XLogo } from "@phosphor-icons/react/dist/ssr";
import { SiteHeader } from "@/components/SiteHeader";
import { SupportForm } from "@/components/SupportForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Get in touch with ${siteConfig.creator} about Focus Metro.`,
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-zinc-50">
      <SiteHeader />

      <main className="flex flex-1">
        <div className="mx-auto grid w-full max-w-7xl flex-1 lg:grid-cols-2">
          <section className="relative flex flex-col justify-between overflow-hidden px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(228 228 231 / 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgb(228 228 231 / 0.7) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative">
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                Get in touch
              </h1>
              <p className="mt-4 max-w-sm text-base leading-7 text-zinc-500">
                Questions about Focus Metro, billing, or feedback — we&apos;re
                here to help.
              </p>

              <ul className="mt-10 space-y-5">
                <li>
                  <a
                    href={`mailto:${siteConfig.supportEmail}`}
                    className="group inline-flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-zinc-900"
                  >
                    <EnvelopeSimple
                      className="size-5 text-zinc-400 transition-colors group-hover:text-zinc-600"
                      weight="regular"
                    />
                    {siteConfig.supportEmail}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-zinc-900"
                  >
                    <XLogo
                      className="size-5 text-zinc-400 transition-colors group-hover:text-zinc-600"
                      weight="regular"
                    />
                    @{siteConfig.xHandle}
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative mt-16 lg:mt-0">
              <p className="text-sm font-semibold tracking-tight text-zinc-900">
                SpeedSound, LLC
              </p>
              <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.addressLocality},{" "}
                {siteConfig.address.addressRegion}{" "}
                {siteConfig.address.postalCode}{" "}
                {siteConfig.address.addressCountry}
              </p>
              <p className="mt-1.5 text-sm text-zinc-500">
                <a
                  href="tel:+13023841230"
                  className="transition-colors hover:text-zinc-900"
                >
                  +1 3023841230
                </a>
              </p>
            </div>
          </section>

          <section className="flex bg-white px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
            <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
              <SupportForm />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
