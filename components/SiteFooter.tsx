import Link from "next/link";
import { CONTENT_MAX_WIDTH_CLASS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-transparent">
      <div
        className={`mx-auto w-full ${CONTENT_MAX_WIDTH_CLASS} px-5 pb-8 pt-10 sm:px-6 sm:pt-14`}
      >
        <div>
          <p className="text-lg tracking-tight text-zinc-900 dark:text-zinc-50">
            SpeedSound, LLC
          </p>
          <p className="mt-1 text-sm leading-6 text-muted">
            1401 Pennsylvania Ave, STE 105 Unit 2127
            <br />
            Wilmington, DE 19806 US
          </p>
          <p className="mt-1 text-sm leading-6 text-muted">
            <a
              href="mailto:contact@speedsound.co"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              contact@speedsound.co
            </a>
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SpeedSound</p>

          <nav className="flex items-center gap-x-2">
            <Link
              href="/privacy"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-300 dark:text-zinc-600" aria-hidden="true">
              ·
            </span>
            <Link
              href="/terms"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
