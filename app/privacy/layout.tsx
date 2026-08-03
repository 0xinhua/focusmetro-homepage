import { LegalDocumentLayout } from "@/components/LegalDocumentLayout";

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LegalDocumentLayout>{children}</LegalDocumentLayout>;
}
