import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CONTENT_MAX_WIDTH_CLASS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/75 text-zinc-900 backdrop-blur-md dark:bg-zinc-950/75 dark:text-zinc-50">
      <div
        className={`mx-auto flex h-14 w-full ${CONTENT_MAX_WIDTH_CLASS} items-center justify-between px-5 sm:px-6`}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <Image
            src="/focusmetro_logo.webp"
            alt="Focus Metro"
            width={28}
            height={28}
            className="size-7 rounded-lg"
            priority
          />
          <span className="text-[17px] font-semibold tracking-tight">
            Focus Metro
          </span>
        </Link>

        <ThemeToggle />
      </div>
    </header>
  );
}
