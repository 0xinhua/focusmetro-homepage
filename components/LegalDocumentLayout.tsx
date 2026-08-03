import { SiteHeader } from "@/components/SiteHeader";

export function LegalDocumentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col bg-white text-neutral-900">
      <SiteHeader />
      <main className="flex-1">
        <article
          className="
            prose prose-neutral mx-auto max-w-[720px] px-6 pb-24 pt-14 sm:px-8 sm:pt-16
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-neutral-900
            prose-h1:mb-2 prose-h1:text-4xl
            prose-h2:mt-10 prose-h2:mb-3 prose-h2:text-lg
            prose-p:text-[0.95rem] prose-p:leading-7 prose-p:text-neutral-500
            prose-lead:mt-0 prose-lead:mb-8 prose-lead:text-[1.05rem] prose-lead:font-normal prose-lead:leading-7 prose-lead:text-neutral-800
            prose-a:font-normal prose-a:text-neutral-700 prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-neutral-900
            prose-strong:font-semibold prose-strong:text-neutral-800
          "
        >
          {children}
        </article>
      </main>
    </div>
  );
}
