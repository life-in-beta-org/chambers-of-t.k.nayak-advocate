export interface UpdateItem {
  category: string;
  title: string;
  excerpt: string;
}

export const updates: UpdateItem[] = [
  { category: "Publication placeholder", title: "A considered space for legal commentary", excerpt: "Sample copy reserved for a verified article, case note or professional publication." },
  { category: "Update placeholder", title: "Perspectives to be added", excerpt: "This entry can be replaced or removed when genuine chambers content is available." },
  { category: "Note placeholder", title: "Clarity in a changing legal landscape", excerpt: "Placeholder text for a future legal update or publication." },
];

export interface PracticeAreaSection {
  category: string;
  items: string[];
}

export interface PracticeArea {
  number: string;
  title: string;
  description: string;
  detailIntro?: string;
  sections: PracticeAreaSection[];
  services?: {
    title: string;
    description: string;
  }[];
}

export const practiceAreas: PracticeArea[] = [
  {
    number: "01",
    title: "Service Law",
    description:
      "Advice and litigation on recruitment, appointments, seniority, promotion, disciplinary proceedings and retirement benefits, for employees as well as public bodies before tribunals, High Courts and the Supreme Court of India.",
    detailIntro:
      "Service law is one of the core areas of the chambers' practice. The chambers advises and litigates on recruitment, service conditions, disciplinary action and retirement benefits before tribunals, High Courts and the Supreme Court of India.",
    sections: [
      {
        category: "Recruitment and appointments",
        items: [
          "Challenges to illegalities in advertisements, notifications and selection processes",
          "Disputes pertaining to appointment, cancellation of selection processes and termination",
          "Matters pertaining to reservation, eligibility and age-relaxation",
          "Regularisation of employees",
        ],
      },
      {
        category: "Service conditions and career progression",
        items: [
          "Seniority and promotion",
          "Pay fixation, pay parity and payment of arrears",
          "Transfers, deputation and absorption",
        ],
      },
      {
        category: "Disciplinary proceedings",
        items: [
          "Departmental inquiries",
          "Suspension, dismissal, removal and compulsory retirement",
          "Termination of service and reinstatement",
        ],
      },
      {
        category: "Retirement and consequent benefits",
        items: [
          "Pension, gratuity, provident fund and leave encashment",
          "Family pension and compassionate appointment",
        ],
      },
      {
        category: "Institutional and advisory work",
        items: [
          "Advising State governments, departments and statutory bodies on service rules",
          "Reviewing recruitment rules, notifications and policy decisions",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Criminal Law",
    description:
      "Representation from the pre-litigation stage through bail, quashing, trial and appeal, in matters ranging from conventional offences to economic offences and those under special statutes.",
    detailIntro:
      "The chambers appears in criminal matters before the Supreme Court of India, High Courts and district courts, for individuals, public officials and entities. Its work begins before a case reaches court and continues through bail, trial and appeal. The chambers handles offences under the substantive criminal law including specialized statutes. Matters range from conventional offences to economic and white-collar crime.",
    sections: [
      {
        category: "Bail and liberty",
        items: [
          "Anticipatory and Regular bail",
          "Cancellation of bail and challenges to bail conditions",
          "Challenges to arrest, detention and remand",
        ],
      },
      {
        category: "FIRs, complaints and quashing",
        items: [
          "Drafting and filing complaints and facilitating registration of FIRs",
          "Quashing of FIRs and criminal proceedings before the High Courts",
          "Transfer of investigation and challenges to investigation",
        ],
      },
      {
        category: "Trials, appeals and revisions",
        items: [
          "Conduct of trials before Magistrates and Sessions Courts",
          "Criminal appeals, revisions and Special Leave Petitions",
        ],
      },
      {
        category: "Economic and white-collar offences",
        items: [
          "Cheating, criminal breach of trust, forgery, cheque dishonour and money laundering",
          "Chit fund / collective investment schemes fraud",
        ],
      },
      {
        category: "Special statutes",
        items: [
          "Including but not limited to UAPA, Arms Act, NDPS, PMLA and POCSO matters",
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Constitutional Law",
    description:
      "Writ petitions, public interest litigation and Special Leave Petitions on enforcement of rights and validity of laws / State action, before the High Courts and the Supreme Court of India.",
    detailIntro:
      "Public law sits at the centre of the chambers' practice. Many of its service and public-appointment matters are, at heart, questions of equality, fairness and the limits of State power within the constitutional bounds. The chambers brings writ petitions under Article 32 before the Supreme Court and under Article 226 before the High Courts, and appears in Special Leave Petitions under Article 136. With experience on both sides of public-law litigation, the chambers also defends the validity of legislation and executive decisions, and advises public authorities on their constitutional obligations.",
    sections: [
      {
        category: "Fundamental rights and writs",
        items: [
          "Writs of mandamus, certiorari, prohibition, quo warranto and habeas corpus",
          "Enforcement of the right to equality, livelihood and personal liberty",
          "Challenges to arbitrary, discriminatory or disproportionate State action",
        ],
      },
      {
        category: "Validity of laws and executive action",
        items: [
          "Challenges to the constitutional validity of statutes, rules and notifications",
          "Challenges to policy decisions and administrative orders",
          "Defending legislation and government action for the State",
        ],
      },
      {
        category: "Public interest litigation",
        items: [
          "Filing and defending PILs on matters of public importance",
          "Representing affected groups in class action matters",
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Civil Law and Dispute Resolution",
    description:
      "Suits, appeals and execution proceedings in property, contractual and monetary disputes, with mediation and arbitration pursued wherever mandated / deemed appropriate.",
    detailIntro:
      "The chambers handles civil disputes from the first legal notice through trial, appeal and execution of decrees. It acts for individuals and businesses in disputes over property and monetary claims. Where a negotiated outcome serves the client better, the chambers pursues mediation, settlement or arbitration. Where it does not, it litigates with full preparation. The chambers appears before civil courts, the High Courts and the Supreme Court of India, and in arbitral proceedings.",
    sections: [
      {
        category: "Property and land",
        items: [
          "Declaration and partition suits",
          "Injunctions and others",
          "Landlord–tenant disputes and eviction proceedings",
          "Land acquisition and compensation matters",
          "Succession, wills, probate and letters of administration",
        ],
      },
      {
        category: "Contracts and monetary claims",
        items: [
          "Breach of contract and specific performance",
          "Recovery suits",
        ],
      },
      {
        category: "Arbitration and mediation",
        items: [
          "Arbitral proceedings",
          "Appointment of arbitrators, interim measures, and challenges to and enforcement of awards",
          "Pre-litigation and court-referred mediation",
        ],
      },
      {
        category: "Appeals and execution",
        items: [
          "First and second appeals, revisions and Special Leave Petitions",
          "Execution of decrees",
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Family and Matrimonial Law",
    description:
      "Advice and representation in marriage, divorce, maintenance, custody and other related proceedings, encouraging settlement wherever realistic, and litigating fully where it is not.",
    detailIntro:
      "Family disputes call for precision and empathy in equal measure. The chambers advises and represents clients in matrimonial and family matters with an eye to their long-term interests. The chambers encourages mediation and mutual settlement where they are realistic, and litigates fully where they are not, from the Family Court, all the way up the legal ladder to the Supreme Court of India.",
    sections: [
      {
        category: "Marriage and divorce",
        items: [
          "Registration of marriages under various acts",
          "Divorce by mutual consent and contested divorce and mediation",
          "Judicial separation and restitution of conjugal rights",
        ],
      },
      {
        category: "Maintenance and others",
        items: [
          "Interim and permanent maintenance and alimony",
          "Recovery of stridhan and disputes over joint property",
        ],
      },
      {
        category: "Custody",
        items: [
          "Child custody, visitation and guardianship",
          "Child support and relocation",
        ],
      },
      {
        category: "Ancillary criminal proceedings",
        items: [
          "Cases pertaining to cruelty and dowry",
        ],
      },
      {
        category: "Transfer and appellate work",
        items: [
          "Transfer petitions before the Supreme Court",
          "Appeals before the High Courts and the Supreme Court",
        ],
      },
    ],
  },
  {
    number: "06",
    title: "Corporate and Commercial Law",
    description:
      "Advice on structuring, contracts and regulatory compliance, and representation in commercial disputes and insolvency proceedings before Commercial Courts, the NCLT / NCLAT, the High Courts and the Supreme Court of India.",
    detailIntro:
      "The chambers advises companies, partnership firms and start-ups on intricacies that arise as a business is set up, grows and, at times, restructures. Its advisory work covers contracts, governance and regulatory compliance. When disputes arise, the chambers represents clients before the Commercial Courts, the National Company Law Tribunal and its appellate tribunal, the High Courts and the Supreme Court of India. The aim throughout is practical advice that accounts for both legal risk and commercial reality.",
    sections: [
      {
        category: "Corporate advisory",
        items: [
          "Structuring, incorporation and compliance",
          "Shareholder, partnership and joint venture agreements",
        ],
      },
      {
        category: "Commercial contracts",
        items: [
          "Drafting and reviewing commercial agreements, including supply, distribution, service and franchise agreements",
        ],
      },
      {
        category: "Commercial disputes",
        items: [
          "Suits before Commercial Courts",
          "Commercial arbitration",
          "Recovery of dues and enforcement of contractual rights",
        ],
      },
      {
        category: "Insolvency and restructuring",
        items: [
          "Proceedings under the Insolvency and Bankruptcy Code",
          "Representing creditors, debtors and resolution applicants",
        ],
      },
      {
        category: "Regulatory",
        items: [
          "Advice on sector-specific licensing and regulatory compliance",
          "Representation before regulators and appellate authorities",
        ],
      },
    ],
  },
  {
    number: "07",
    title: "Intellectual Property Rights",
    description:
      "Registration, licensing and enforcement of trademarks, copyright, patents and designs, including oppositions, infringement and passing-off actions.",
    detailIntro:
      "For many businesses and creators, a name, a brand or an original work is among their most valuable assets. The chambers helps clients secure these rights through registration, put them to commercial use through licensing and assignment, and defend them in case of infringement.",
    sections: [
      {
        category: "Trademarks",
        items: [
          "Clearance searches and filing",
          "Oppositions and rectification",
          "Infringement and passing-off actions",
        ],
      },
      {
        category: "Copyright",
        items: [
          "Registration of literary, artistic, musical and software works",
          "Licensing and assignment agreements",
          "Infringement actions, including but not limited to online piracy",
        ],
      },
      {
        category: "Patents and designs",
        items: [
          "Filing support and prosecution in coordination with registered patent agents",
          "Pre-grant and post-grant oppositions",
          "Design registration and infringement",
        ],
      },
      {
        category: "Enforcement and commercial use",
        items: [
          "Injunctions",
          "Domain name disputes",
          "Licensing, franchising and technology transfer agreements",
        ],
      },
    ],
  },
  {
    number: "08",
    title: "Consumer Laws",
    description:
      "Representation of consumers and businesses in disputes over deficient services, defective goods, insurance, banking, medical negligence and real estate, before Consumer Commissions at every level.",
    detailIntro:
      "The Consumer Protection Act gives consumers a specialized and faster route to relief. The chambers represents both complainants seeking assistance and businesses defending claims. It also advises companies on compliance, advertising and e-commerce obligations.",
    sections: [
      {
        category: "Complaints and defence",
        items: [
          "Deficiency in service and defective goods",
          "Unfair and restrictive trade practices",
          "Product liability claims against manufacturers, sellers and service providers",
          "Defending businesses against consumer complaints",
        ],
      },
      {
        category: "Insurance, banking and medical claims",
        items: [
          "Insurance claims, including health, life, motor and property insurance",
          "Disputes with banks and financial institutions over services and charges",
          "Medical negligence claims against hospitals and doctors",
        ],
      },
      {
        category: "Real estate",
        items: [
          "Delayed possession, refunds and compensation from builders",
        ],
      },
      {
        category: "E-commerce and advertising",
        items: [
          "Disputes with online marketplaces and sellers",
          "Compliance with the E-Commerce Rules",
          "Misleading advertisements and proceedings arising therefrom",
        ],
      },
      {
        category: "Appeals and execution",
        items: [
          "Appeals and revisions before the State and National Commissions",
          "Appeals before the Supreme Court",
          "Execution of orders and recovery of compensation",
        ],
      },
    ],
  },
  {
    number: "09",
    title: "Environmental Laws",
    description:
      "Advice and litigation on environmental clearances, pollution control, forest and wildlife matters, and mining, before the National Green Tribunal, the High Courts and the Supreme Court of India.",
    detailIntro:
      "Environmental law touches land, industry, mining, infrastructure and public health. The chambers advises businesses, project proponents, public authorities and affected communities on their rights and obligations under the Environment (Protection) Act, the Water Act, the Air Act, the Wildlife (Protection) Act, and laws relating to forest conservation. It represents clients in regulatory proceedings and in litigation before the National Green Tribunal, the High Courts and the Supreme Court. Its constitutional practice informs this work, as the right to a clean environment has been recognised as part of the right to life under Article 21.",
    sections: [
      {
        category: "Clearances and compliance",
        items: [
          "Environmental clearances",
          "Consent to establish and consent to operate from State Pollution Control Boards",
          "Waste management, hazardous substances and pollution compliance",
        ],
      },
      {
        category: "Enforcement and defence",
        items: [
          "Show-cause notices, closure directions and environmental compensation",
          "Prosecutions under environmental statutes",
          "Appeals against orders of Pollution Control Boards",
        ],
      },
      {
        category: "Natural resources and land",
        items: [
          "Mining, quarrying and mineral concession matters",
          "Forest rights and land-use disputes",
          "Wildlife and protected-area matters",
        ],
      },
      {
        category: "Litigation and public interest",
        items: [
          "Original Applications before the National Green Tribunal",
          "Public interest litigation on pollution, conservation and public health",
          "Appeals against NGT orders before the Supreme Court",
        ],
      },
    ],
  },
];