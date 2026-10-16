import { FileText, Landmark, Scale, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HeroPracticeArea {
  id: string;
  label: string;
  title: string;
  description: string;
  services: string[];
  icon: LucideIcon;
}

export const heroPracticeAreas: HeroPracticeArea[] = [
  {
    id: "corporate-commercial",
    label: "Corporate & Commercial Law",
    title: "Corporate & Commercial Law",
    description: "Placeholder guidance for businesses navigating commercial relationships and legal obligations.",
    services: ["Business & Commercial Law", "Contracts & Agreements", "Corporate Disputes"],
    icon: Scale,
  },
  {
    id: "litigation-dispute-resolution",
    label: "Litigation & Dispute Resolution",
    title: "Litigation & Dispute Resolution",
    description: "Placeholder guidance for disputes, proceedings and carefully considered legal representation.",
    services: ["Civil Litigation", "Constitutional Matters", "Appeals & Proceedings"],
    icon: FileText,
  },
  {
    id: "family-personal-law",
    label: "Family & Personal Law",
    title: "Family & Personal Law",
    description: "Placeholder guidance for personal legal matters requiring clarity, care and discretion.",
    services: ["Family Law Consultation", "Matrimonial Disputes", "Personal Legal Matters"],
    icon: Users,
  },
  {
    id: "criminal-regulatory-law",
    label: "Criminal & Regulatory Law",
    title: "Criminal & Regulatory Law",
    description: "Placeholder guidance for criminal defence and regulatory proceedings pending verification.",
    services: ["Criminal Defence", "Bail Applications", "Regulatory Proceedings"],
    icon: Landmark,
  },
];
