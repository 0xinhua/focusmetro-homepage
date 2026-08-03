import { LegalDocumentLayout } from "@/components/LegalDocumentLayout";

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LegalDocumentLayout>{children}</LegalDocumentLayout>;
}
