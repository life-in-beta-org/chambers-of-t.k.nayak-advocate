// export interface PracticeArea {
//   number: string;
//   title: string;
//   description: string;
// }

export interface UpdateItem {
  category: string;
  title: string;
  excerpt: string;
}

// export const practiceAreas: PracticeArea[] = [
//   { number: "01", title: "Corporate and Commercial Law", description: "Placeholder description for commercial advisory and business-related enquiries." },
//   { number: "02", title: "Civil Litigation and Dispute Resolution", description: "Placeholder description for civil disputes, strategy and representation." },
//   { number: "03", title: "Family Law", description: "Placeholder description for family-related legal consultations." },
//   { number: "04", title: "Intellectual Property", description: "Placeholder description for protection and advisory work concerning intellectual property." },
//   { number: "05", title: "Criminal Law", description: "Placeholder description for criminal law enquiries and representation." },
//   { number: "06", title: "Constitutional and Administrative Law", description: "Placeholder description for public law and administrative matters." },
// ];

export const updates: UpdateItem[] = [
  { category: "Publication placeholder", title: "A considered space for legal commentary", excerpt: "Sample copy reserved for a verified article, case note or professional publication." },
  { category: "Update placeholder", title: "Perspectives to be added", excerpt: "This entry can be replaced or removed when genuine chambers content is available." },
  { category: "Note placeholder", title: "Clarity in a changing legal landscape", excerpt: "Placeholder text for a future legal update or publication." },
];



export interface PracticeArea {
  number: string;
  title: string;
  description: string;
  services: {
    title: string;
    description: string;
  }[];
}

export const practiceAreas: PracticeArea[] = [
  {
    number: "01",
    title: "Service Law",
    description:
      "The firm's Service Law team provides robust advisory and litigation support for public sector employees, government servants, statutory bodies, and institutions. We understand the unique administrative framework governing public employment and are committed to safeguarding our clients' rights while maintaining institutional discipline.",
    services: [
      {
        title: "Litigation and Representation",
        description:
          "Representation before the Central Administrative Tribunal (CAT), State Administrative Tribunals (SAT), High Courts, and the Supreme Court.",
      },
      {
        title: "Service Conditions and Career Progression",
        description:
          "Matters relating to recruitment, probation, confirmation, seniority lists, and promotions.",
      },
      {
        title: "Disciplinary Proceedings",
        description:
          "Defence in departmental inquiries, charge-sheets, suspension orders, and departmental appeals.",
      },
      {
        title: "Pay and Benefits",
        description:
          "Disputes concerning pay scales, allowances, MACP/ACP benefits, and service tenure adjustments.",
      },
      {
        title: "Superannuation and Retirement",
        description:
          "Matters involving pensionary benefits, gratuity, provident fund, commuted value of pension, and terminal dues.",
      },
    ],
  },
  {
    number: "02",
    title: "Criminal Law",
    description:
      "The firm's Criminal Law practice is built on a foundation of rigorous defence, trial expertise, and an unwavering commitment to protecting individual liberties and corporate integrity. We handle matters ranging from traditional offences to complex economic crimes.",
    services: [
      {
        title: "Trial Defence and Litigation",
        description:
          "Representation across Sessions Courts, Magistrate Courts, High Courts, and the Supreme Court.",
      },
      {
        title: "Bail and Personal Liberty",
        description:
          "Matters involving anticipatory bail, regular bail, suspension of sentence, and quashing of criminal complaints and FIRs under Section 482 of the CrPC or corresponding statutory provisions.",
      },
      {
        title: "White-Collar Crime Defence",
        description:
          "Corporate fraud, corruption, money laundering under PMLA, bank frauds, insider trading, and tax evasion investigations by enforcement agencies.",
      },
      {
        title: "Cybercrimes and Digital Offences",
        description:
          "Data theft, online fraud, intermediary liability, and electronic evidence management.",
      },
      {
        title: "Compounding and Settlements",
        description:
          "Matters relating to compoundable offences and strategic pre-litigation dispute resolution.",
      },
    ],
  },
  {
    number: "03",
    title: "Civil Law",
    description:
      "The firm handles a broad spectrum of civil litigation and dispute resolution for individuals, businesses, and institutional clients. Our civil law practice focuses on protecting property rights, enforcing contractual obligations, and securing effective judicial remedies.",
    services: [
      {
        title: "Property and Real Estate Litigation",
        description:
          "Title suits, partition suits, landlord-tenant disputes, eviction proceedings, and mortgage enforcement.",
      },
      {
        title: "Contractual Disputes",
        description:
          "Breach of contract, suits for specific performance, damages, and recovery of dues.",
      },
      {
        title: "Injunctive and Declaratory Reliefs",
        description:
          "Legal remedies to protect immediate rights and property possession and prevent irreparable harm.",
      },
      {
        title: "Execution Proceedings",
        description:
          "Enforcement of domestic and foreign court decrees, arbitral awards, and tribunal orders.",
      },
      {
        title: "Alternative Dispute Resolution",
        description:
          "Domestic and international commercial arbitration, institutional mediation, and conciliation.",
      },
    ],
  },
  {
    number: "04",
    title: "Family Law",
    description:
      "Navigating domestic and personal disputes requires a delicate balance of legal expertise, strategic negotiation, and emotional sensitivity. The firm's Family Law practice offers confidential, empathetic, and pragmatic counsel to resolve sensitive personal matters.",
    services: [
      {
        title: "Matrimonial Disputes",
        description:
          "Contested and mutual consent divorce, judicial separation, and annulment of marriage.",
      },
      {
        title: "Financial Alimony and Maintenance",
        description:
          "Interim and permanent maintenance, spousal support, and settlement agreements.",
      },
      {
        title: "Child Custody and Guardianship",
        description:
          "Child custody, visitation rights, parenting plans, and inter-parental disputes.",
      },
      {
        title: "Adoptions and Parentage",
        description:
          "Legal compliance for domestic adoptions, guardianship petitions, and applicable surrogacy-related legal frameworks.",
      },
      {
        title: "Estate Planning and Succession",
        description:
          "Drafting wills, family settlements, and trust deeds, and administering or partitioning ancestral and personal estates.",
      },
    ],
  },
  {
    number: "05",
    title: "Corporate and Commercial Law",
    description:
      "The Corporate and Commercial team offers comprehensive legal services across the lifecycle of business entities, from incorporation to restructuring and dissolution. We combine commercial acumen with deep regulatory insights to deliver risk-aware and business-oriented solutions.",
    services: [
      {
        title: "Mergers, Acquisitions and Restructuring",
        description:
          "Buyouts, amalgamations, demergers, joint ventures, and capital reductions.",
      },
      {
        title: "Commercial Contracting",
        description:
          "Drafting, reviewing, and negotiating high-value commercial agreements, master service agreements, vendor contracts, and strategic alliance frameworks.",
      },
      {
        title: "Regulatory Compliance and Governance",
        description:
          "Advice on corporate laws, company secretarial duties, SEBI regulations, and RBI guidelines.",
      },
      {
        title: "Insolvency and Corporate Distress",
        description:
          "Advice to creditors and corporate debtors on restructuring, resolution plans, and proceedings before the National Company Law Tribunal (NCLT).",
      },
      {
        title: "Commercial Litigation and Arbitration",
        description:
          "High-stakes shareholder disputes, corporate governance conflicts, and cross-border commercial litigation.",
      },
    ],
  },
  {
    number: "06",
    title: "Intellectual Property Rights (IPR)",
    description:
      "In a modern knowledge-driven economy, protecting intangible assets is vital to maintaining competitive advantage. The firm's IPR practice offers end-to-end services covering the creation, prosecution, commercialisation, and enforcement of intellectual property.",
    services: [
      {
        title: "Registration and Portfolio Management",
        description:
          "Trademarks, copyrights, patents, and industrial designs across domestic and international jurisdictions.",
      },
      {
        title: "IP Litigation and Enforcement",
        description:
          "Trademark infringement, copyright piracy, passing-off actions, patent revocation, and anti-counterfeiting raids.",
      },
      {
        title: "Commercial IP Transactions",
        description:
          "Technology transfer agreements, licensing contracts, franchising agreements, and assignment deeds.",
      },
      {
        title: "Trade Secrets and Confidentiality",
        description:
          "Non-disclosure frameworks, trade secret policies, and employee confidentiality covenants.",
      },
      {
        title: "Digital Property and Domain Disputes",
        description:
          "Domain name disputes under UDRP, digital rights management, and online brand protection.",
      },
    ],
  },
  {
    number: "07",
    title: "Constitutional Law",
    description:
      "The firm's Constitutional Law practice focuses on protecting fundamental rights, upholding democratic principles, and ensuring executive and legislative accountability. Our constitutional lawyers combine deep jurisprudential insight with rigorous appellate advocacy to navigate complex constitutional matters before the highest judicial forums of the country.",
    services: [
      {
        title: "Writ Jurisdiction and Extraordinary Remedies",
        description:
          "Filing and defending Habeas Corpus, Mandamus, Certiorari, Prohibition, and Quo Warranto petitions under Article 32 before the Supreme Court and Article 226 before High Courts.",
      },
      {
        title: "Enforcement of Fundamental Rights",
        description:
          "Protecting individuals and corporate entities against arbitrary state action affecting constitutional guarantees, equality before law, freedom of speech, trade, and personal liberty.",
      },
      {
        title: "Public Interest Litigation (PIL)",
        description:
          "Initiating or defending public interest actions concerning governance gaps, environmental protection, human rights, and institutional accountability.",
      },
      {
        title: "Constitutional Challenges",
        description:
          "Challenges to the constitutional validity of central and state legislation, ordinances, delegated legislation, rules, notifications, and executive actions on grounds including ultra vires, legislative incompetence, and violation of the basic structure doctrine.",
      },
      {
        title: "Advisory and Consultancy",
        description:
          "Legal opinions on constitutional and administrative law interfaces, regulatory overlaps, and statutory duties of public authorities.",
      },
      {
        title: "Election and Statutory Body Disputes",
        description:
          "Election petitions, autonomous institution matters, public service commissions, anti-defection laws, and disputes involving constitutional or statutory bodies.",
      },
    ],
  },
];