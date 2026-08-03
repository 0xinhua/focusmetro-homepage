import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-transparent">
      <div className="mx-auto w-full max-w-7xl px-6 pb-6 pt-2 sm:px-8">
        <div>
          <p className="text-lg font-semibold tracking-tight text-zinc-900">
            SpeedSound, LLC
          </p>
          <p className="mt-1 text-sm leading-6 text-muted">
            1401 Pennsylvania Ave, STE 105 Unit 2127
            <br />
            Wilmington, DE 19806 US
          </p>
          <p className="mt-1.5 text-sm text-muted">
            <a
              href="tel:+13023841230"
              className="transition-colors hover:text-zinc-900"
            >
              +1 3023841230
            </a>
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 SpeedSound
            <span className="mx-2 text-zinc-300" aria-hidden="true">
              ·
            </span>
            <a
              href="mailto:contact@speedsound.co"
              className="transition-colors hover:text-zinc-900"
            >
              contact@speedsound.co
            </a>
          </p>

          <nav className="flex items-center gap-x-2">
            <Link
              href="/privacy"
              className="transition-colors hover:text-zinc-900"
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-300" aria-hidden="true">
              ·
            </span>
            <Link
              href="/terms"
              className="transition-colors hover:text-zinc-900"
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
