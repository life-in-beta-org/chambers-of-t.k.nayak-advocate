export interface PracticeArea {
  number: string;
  title: string;
  description: string;
}

export interface UpdateItem {
  category: string;
  title: string;
  excerpt: string;
}

export const practiceAreas: PracticeArea[] = [
  { number: "01", title: "Corporate and Commercial Law", description: "Placeholder description for commercial advisory and business-related enquiries." },
  { number: "02", title: "Civil Litigation and Dispute Resolution", description: "Placeholder description for civil disputes, strategy and representation." },
  { number: "03", title: "Family Law", description: "Placeholder description for family-related legal consultations." },
  { number: "04", title: "Intellectual Property", description: "Placeholder description for protection and advisory work concerning intellectual property." },
  { number: "05", title: "Criminal Law", description: "Placeholder description for criminal law enquiries and representation." },
  { number: "06", title: "Constitutional and Administrative Law", description: "Placeholder description for public law and administrative matters." },
];

export const updates: UpdateItem[] = [
  { category: "Publication placeholder", title: "A considered space for legal commentary", excerpt: "Sample copy reserved for a verified article, case note or professional publication." },
  { category: "Update placeholder", title: "Perspectives to be added", excerpt: "This entry can be replaced or removed when genuine chambers content is available." },
  { category: "Note placeholder", title: "Clarity in a changing legal landscape", excerpt: "Placeholder text for a future legal update or publication." },
];
