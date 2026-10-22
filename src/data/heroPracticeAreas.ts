import { Award, Briefcase, Building2, Landmark, Scale, ShieldAlert, Users } from "lucide-react";
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
    id: "service-law",
    label: "Service Law",
    title: "Service Law",
    description: "Advisory and litigation support for public sector employees, government servants, and statutory bodies.",
    services: ["Administrative Tribunals (CAT & SAT)", "Service Conditions & Promotions", "Disciplinary Enquiries & Appeals"],
    icon: Briefcase,
  },
  {
    id: "criminal-law",
    label: "Criminal Law",
    title: "Criminal Law",
    description: "Rigorous trial defence, appellate advocacy, and protection of individual liberty across all criminal courts.",
    services: ["Trial Defence & Sessions Practice", "Bail & Quashing Proceedings", "White-Collar & Economic Offences"],
    icon: ShieldAlert,
  },
  {
    id: "constitutional-law",
    label: "Constitutional Law",
    title: "Constitutional Law",
    description: "Protection of fundamental rights, judicial review, writ petitions, and public interest litigation before superior courts.",
    services: ["Writ Jurisdiction (Art. 32 & 226)", "Fundamental Rights & State Action", "Public Interest Litigation (PIL)"],
    icon: Landmark,
  },
  {
    id: "civil-law-dispute-resolution",
    label: "Civil Law & Dispute Resolution",
    title: "Civil Law and Dispute Resolution",
    description: "Comprehensive civil litigation, title disputes, contractual enforcement, and appellate remedies.",
    services: ["Property & Real Estate Disputes", "Contractual Breach & Recovery", "Injunctions & Judicial Remedies"],
    icon: Scale,
  },
  {
    id: "family-matrimonial-law",
    label: "Family & Matrimonial Law",
    title: "Family and Matrimonial Law",
    description: "Confidential, empathetic, and pragmatic counsel to resolve domestic and matrimonial matters.",
    services: ["Matrimonial & Divorce Proceedings", "Child Custody & Guardianship", "Estate Succession & Family Settlements"],
    icon: Users,
  },
  {
    id: "corporate-commercial-law",
    label: "Corporate & Commercial Law",
    title: "Corporate and Commercial Law",
    description: "Strategic commercial contracting, governance, restructuring, and high-stakes dispute resolution.",
    services: ["Commercial Contracting & Alliances", "Corporate Governance & Compliance", "Restructuring & NCLT Matters"],
    icon: Building2,
  },
  {
    id: "intellectual-property-rights",
    label: "Intellectual Property Rights",
    title: "Intellectual Property Rights",
    description: "Prosecution, commercialisation, and enforcement of trademarks, copyrights, patents, and trade secrets.",
    services: ["Trademark & Copyright Protection", "IP Litigation & Infringement", "Trade Secrets & Commercial Licensing"],
    icon: Award,
  },
];
