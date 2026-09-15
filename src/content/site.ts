/**
 * Every piece of copy and data on the site, taken from the "Final Version"
 * design in the Promise Point design folder. Pages read from here so copy
 * changes never require touching layout code.
 */

export type Img = { src: string; alt: string; width: number; height: number };

export const site = {
  name: "Promise Point",
  legalName: "Promise Point General Trading Nigeria Limited",
  shortLegalName: "Promise Point GTNL",
  url: "https://promisepointgtnl.com",
  description:
    "A woman-led cassava business in Ikole, Ekiti State. We buy from our own registered farmer network, process at an FSSC 6.0V certified facility, and pay farmers into real bank accounts they reach by dialling a short code.",
  ussdCode: "*347*319#",
  ussdHref: "tel:*347*319%23",
  phone: "07020479821",
  phoneHref: "tel:+2347020479821",
  voiceLine: "+234 201 700 1183",
  voiceLineHref: "tel:+2342017001183",
  email: "info@promisepointgtnl.com",
  address: [
    "KM 3, Itapaji-Iyemero Road",
    "Ikole Local Government, Ekiti State",
    "Nigeria",
  ],
  foodSafetyPolicyUrl: "https://promisepointgtnl.com/download/2852/",
  disclaimer:
    "Financial accounts and regulated payment services are provided through licensed financial partners. Promise Point General Trading Nigeria Limited is not a bank, does not hold customer deposits and does not provide regulated financial services independently. Farmer data is processed under the Nigeria Data Protection Act with the farmer's consent.",
  lastUpdated: "6 August 2026",
} as const;

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/agrifintech", label: "AgriFintech" },
  { href: "/produce", label: "Produce" },
  { href: "/ecosystem", label: "Ecosystem" },
] as const;

export const logo = {
  src: "/images/brand/logo-full.jpg",
  alt: "Promise Point",
  width: 840,
  height: 386,
} satisfies Img;

export const photos = {
  facilityAerial: {
    src: "/images/photos/processing-facility-aerial.jpg",
    alt: "Aerial view of the Promise Point processing facility and surrounding farmland in Ikole, Ekiti State",
    width: 1080,
    height: 719,
  },
  farmlandAerial: {
    src: "/images/photos/farmland-aerial.jpg",
    alt: "Aerial view of cultivated farmland beside a reservoir in Ekiti State",
    width: 1080,
    height: 719,
  },
  warehouse: {
    src: "/images/photos/warehouse-starch-bags.jpg",
    alt: "Bags of Promise Point cassava starch stacked on pallets in the warehouse",
    width: 1080,
    height: 719,
  },
  processingTeam: {
    src: "/images/photos/processing-team.jpg",
    alt: "Three Promise Point processing staff in uniform in front of stacked starch bags",
    width: 1080,
    height: 720,
  },
  livestock: {
    src: "/images/photos/livestock-unit.jpg",
    alt: "A Promise Point staff member tending pigs in the farm's livestock unit",
    width: 1080,
    height: 720,
  },
  portrait: {
    src: "/images/photos/cassava-field-portrait.jpg",
    alt: "A Promise Point team member in uniform standing in front of a cassava field",
    width: 1080,
    height: 720,
  },
} satisfies Record<string, Img>;

export type GalleryItem = Img & { caption: string };

export const farmGallery: GalleryItem[] = [
  { ...photos.facilityAerial, caption: "The processing site, Ikole" },
  { ...photos.portrait, caption: "In the cassava field" },
  { ...photos.warehouse, caption: "Starch, bagged and palletised" },
  { ...photos.farmlandAerial, caption: "Farmland beside the reservoir" },
  { ...photos.processingTeam, caption: "The processing team" },
  { ...photos.livestock, caption: "The livestock unit" },
];

export const processingGallery: GalleryItem[] = [
  { ...photos.warehouse, caption: "Graded starch, ready to ship" },
  { ...photos.processingTeam, caption: "Processing staff on shift" },
  { ...photos.facilityAerial, caption: "The certified facility" },
  { ...photos.livestock, caption: "Peel and pulp feed the livestock unit" },
  { ...photos.farmlandAerial, caption: "Where the root is grown" },
];

export const heroStats = [
  { value: "2,013", label: "Farmers registered" },
  { value: "*347*319#", label: "Works on any phone" },
  { value: "FSSC 6.0V", label: "Certified processing" },
  { value: "4", label: "Languages supported" },
];

export const ticker = [
  "Dial *347*319#",
  "Cassava starch",
  "Ikole, Ekiti State",
  "FSSC 6.0V certified",
  "Yoruba · Hausa · Igbo · English",
  "AI voice: +234 201 700 1183",
  "Paid the same day",
  "No app. No data.",
  "Woman-led since 2021",
];

export const pillars = [
  {
    n: "01",
    title: "AgriFintech",
    href: "/agrifintech",
    cta: "See how farmers get paid",
    body: "Farmer registration, produce payments, savings and credit — reached by USSD and AI voice, delivered with licensed financial partners.",
    tags: ["USSD", "AI voice", "Virtual accounts"],
  },
  {
    n: "02",
    title: "Produce",
    href: "/produce",
    cta: "See the product range",
    body: "Cassava sourced from our own registered network in Ekiti, processed into starch, flour, garri and by-products at a certified facility.",
    tags: ["Starch", "Flour", "Garri"],
  },
  {
    n: "03",
    title: "Ecosystem",
    href: "/ecosystem",
    cta: "Explore partnership",
    body: "Banks, lenders, off-takers, input providers and agencies reaching rural agriculture through infrastructure that already works there.",
    tags: ["Banks", "Off-takers", "Agencies"],
  },
];

export const channels = [
  {
    title: "USSD — *347*319#",
    body: "Register, check a balance, transfer, buy airtime, pay a bill and see delivery records. No data, no download.",
  },
  {
    title: "AI voice — +234 201 700 1183",
    body: "A spoken assistant in Yoruba, Hausa, Igbo and English for farmers who cannot read a menu, escalating to a human when it cannot help.",
  },
  {
    title: "Field agents",
    body: "Registration and produce collection recorded on the spot, with a receipt the farmer keeps.",
  },
];

export const screens = [
  {
    value: "6",
    title: "Menu options",
    body: "Register in any of six roles — farmer, student farmer, staff, aggregator, haulage driver or vendor.",
  },
  {
    value: "0 MB",
    title: "Data required",
    body: "The session runs on the network layer every handset already has.",
  },
  {
    value: "182",
    title: "Characters per reply",
    body: "The whole interaction fits inside one session, so nothing times out mid-transaction.",
  },
];

export const ussdMenu = [
  "Register as Farmer",
  "Register as Student Farmer",
  "Register as Staff",
  "Aggregator (Buyer)",
  "Haulage Driver",
  "Register as Vendor",
];

export type Product = Img & {
  name: string;
  state: "Available" | "Coming soon";
  body: string;
  plate: string;
};

export const products: Product[] = [
  {
    name: "Cassava starch",
    state: "Available",
    body: "Refined from premium cassava roots sourced through our own farmer network. Food-grade and industrial specifications.",
    src: "/images/products/cassava-starch.png",
    alt: "A bowl of fine white cassava starch",
    width: 635,
    height: 393,
    plate: "#EAF4EC",
  },
  {
    name: "Cassava flour",
    state: "Coming soon",
    body: "Naturally gluten-free and rich in fibre, for food processors and home bakers. Line commissioning in progress.",
    src: "/images/products/cassava-flour.png",
    alt: "Cassava flour in a bowl beside peeled cassava root",
    width: 656,
    height: 380,
    plate: "#FCF3DC",
  },
  {
    name: "Garri",
    state: "Coming soon",
    body: "Hygienically processed cassava granules — crunchy, clean, and made for local and export markets.",
    src: "/images/products/garri.png",
    alt: "A bowl of yellow garri granules",
    width: 390,
    height: 280,
    plate: "#F5F1E4",
  },
  {
    name: "By-products",
    state: "Coming soon",
    body: "Peels and pulp for livestock feed, bio-materials and sustainable reuse, keeping waste inside the value chain.",
    src: "/images/products/by-products.png",
    alt: "Whole and cut cassava roots",
    width: 611,
    height: 408,
    plate: "#EDF2E8",
  },
];

export const impactShort = [
  { value: "2,013", label: "Farmers registered", note: "Verified profiles on the platform" },
  { value: "₦15.6m", label: "Transaction value", note: "All channels, to date" },
  { value: "20,000 MT", label: "Harvest supported", note: "Growth tons since 2021" },
  { value: "5,000 MT", label: "Product sold", note: "Starch and derivatives" },
];

export const claims = [
  "FSSC 6.0V certified processing facility",
  "High-grade starch and flour for food and industrial use",
  "Eco-conscious production from farm to finish",
  "Supporting local farmers and sustainable growth",
];

export const faqs = [
  {
    q: "What do you add to the soil before you plant a crop?",
    a: "We prioritise soil health with natural, organic additives — composting, organic fertilisers and careful crop rotation to keep soil nutrient-rich. These techniques raise yields and produce healthier crops while reducing dependency on harmful chemical additives.",
  },
  {
    q: "Do you use pesticides in cassava farming?",
    a: "We take a natural approach to pest control and avoid harmful pesticides. We rely on integrated pest management — beneficial insects, crop rotation and organic repellents — so our cassava stays free from harmful chemicals and the wider ecosystem stays healthy.",
  },
  {
    q: "Where does the water come from that you use on your crops?",
    a: "Water conservation is a priority. We harvest rainwater, use drip irrigation and prioritise water-saving techniques, so crops get what they need while this vital resource is conserved for future generations.",
  },
];

export const quotes = [
  {
    text: "I've been working with Promise Point for over two years, and I'm continually impressed by their processing capabilities. The consistency in quality has helped us improve our business.",
    name: "Olusegun Oduyale",
    role: "Consultant",
    tone: "light",
  },
  {
    text: "Working with Promise Point has been an incredible experience. Their expertise in cassava farming has helped me scale up my operations, making my farming business more efficient and profitable.",
    name: "Ajewole Busayo",
    role: "Community Engagement Coordinator",
    tone: "dark",
  },
  {
    text: "Since partnering with Promise Point, my farm has seen tremendous growth. Their focus on sustainable practices has not only improved my yield but also helped me reduce costs.",
    name: "Taofiq Odukojo",
    role: "Quality Control & Compliance",
    tone: "light",
  },
  {
    text: "Their training and quality control significantly increased my yield. I've also gained access to a reliable distribution network, ensuring my cassava reaches processing plants without delay.",
    name: "Dorcas Adegoke",
    role: "Sales Manager",
    tone: "light",
  },
] as const;

export const problems = [
  { title: "The branch is hours away", body: "A day of travel and transport cost to withdraw money earned from a single delivery." },
  { title: "The phone is not a smartphone", body: "Apps are not an option. Anything that requires data or a download excludes most of the network." },
  { title: "Money leaves immediately", body: "Payment arrives and is moved out the same day, so no balance and no history ever accumulate." },
  { title: "No record means no credit", body: "Years of reliable supply exist in nobody's system, so affordable financing stays out of reach." },
  { title: "Farm records are on paper", body: "Plot size, yield and delivery history are fragmented across notebooks and memory." },
  { title: "Buyers change every season", body: "Without a standing off-taker, price and payment timing are renegotiated at every harvest." },
];

export const steps = [
  { title: "Register", body: "Through a field agent or by dialling the USSD code." },
  { title: "Get verified", body: "Identity confirmed and a farmer profile created." },
  { title: "Supply produce", body: "Cassava delivered to a collection point or lifted from the farm." },
  { title: "Delivery recorded", body: "Weight and grade captured, receipt issued on the spot." },
  { title: "Payment deposited", body: "Value paid into the farmer's partner-powered account." },
  { title: "Access the money", body: "Balance, transfers, airtime and bills over USSD." },
  { title: "Profile strengthens", body: "Every completed cycle improves credit readiness." },
];

export const services = [
  { title: "Dedicated virtual accounts", body: "A real account number in the farmer's name, issued by our banking partner.", soon: false },
  { title: "Produce payments", body: "Payment for a delivery lands in that account rather than as cash in a yard.", soon: false },
  { title: "Balance enquiry", body: "Check the balance from any handset, at any time, at USSD session cost.", soon: false },
  { title: "Money transfers", body: "Send to another Promise Point farmer or out to any Nigerian bank account.", soon: false },
  { title: "Airtime and data", body: "Buy for yourself or for a family member without leaving the farm.", soon: false },
  { title: "Electricity and bills", body: "Pay a meter or a subscription without a trip to town.", soon: false },
  { title: "Transaction history", body: "Every payment and deduction, readable and printable as a statement.", soon: false },
  { title: "Savings", body: "Set aside a share of each produce payment automatically.", soon: false },
  { title: "Financing", body: "Input and equipment credit assessed on real supply history, through partner lenders.", soon: false },
  {
    title: "Mobile app",
    body: "For farmers with a smartphone. Everything it will do is already available over USSD and voice — the app adds convenience, not capability.",
    soon: true,
  },
];

export const signals = [
  "Farm size",
  "Crop type",
  "Production history",
  "Delivery consistency",
  "Purchase value",
  "Payment behaviour",
  "Platform engagement",
  "Repayment record",
];

export const processing = [
  { title: "FSSC 6.0V certified", body: "Food safety management audited to the current scheme version, with policy published." },
  { title: "Traceable to the farmer", body: "Every batch links back to the registered profiles that supplied it." },
  { title: "Graded on arrival", body: "Weight and grade captured at collection, so price is applied against a recorded standard." },
  { title: "Nothing wasted", body: "Peel and pulp are recovered as feed and bio-material inputs rather than discarded." },
];

export const partners = [
  { title: "Banks and fintechs", body: "Reach 2,013 verified rural customers through one integration, with USSD already built.", cta: "Talk to us about accounts" },
  { title: "Development finance", body: "A working channel into smallholder agriculture with per-farmer records behind it.", cta: "Request a diligence pack" },
  { title: "Impact investors", body: "Rural financial inclusion with measurable, farmer-level reporting.", cta: "See the impact data" },
  { title: "Input providers", body: "Reach farmers at the moment they are paid, with financing attached.", cta: "Discuss distribution" },
  { title: "Insurance", body: "Verified farm size, crop and production history for index and yield products.", cta: "Explore cover" },
  { title: "Off-takers and buyers", body: "Traceable cassava starch from a certified facility and a known farmer network.", cta: "Request a specification" },
  { title: "Government and agencies", body: "Programme delivery on infrastructure that already reaches these communities.", cta: "Start a conversation" },
];

export const impact = [
  { value: "2,013", label: "Farmers registered", note: "Verified profiles on the platform", verified: true },
  { value: "155", label: "Active in the last 30 days", note: "Farmers who transacted or delivered", verified: true },
  { value: "₦15.6m", label: "Transaction value processed", note: "All channels, to date", verified: true },
  { value: "264", label: "Payouts requested", note: "98 completed, 166 requiring follow-up", verified: true },
  { value: "—", label: "Produce purchased", note: "Awaiting verified tonnage", verified: false },
  { value: "—", label: "Value paid to farmers", note: "Awaiting finance sign-off", verified: false },
  { value: "—", label: "Women and youth participation", note: "Not yet captured at registration", verified: false },
  { value: "—", label: "LGAs covered", note: "Ekiti confirmed; count to be verified", verified: false },
];

export const ussdScreenshot = {
  src: "/images/platform/ussd-menu.png",
  alt: "The Promise Point USSD menu on a phone, listing six registration options",
  width: 589,
  height: 1280,
} satisfies Img;

export const contactMethods = [
  { label: "Hotline", value: "07020479821", href: "tel:+2347020479821", icon: "phone" },
  { label: "AI voice line", value: "+234 201 700 1183", href: "tel:+2342017001183", icon: "voice" },
  {
    label: "Our location",
    value: "KM 3, Itapaji-Iyemero Road, Ikole Local Government, Ekiti State",
    href: "https://maps.google.com/?q=Itapaji-Iyemero+Road+Ikole+Ekiti+State",
    icon: "map",
  },
  { label: "Official email", value: "info@promisepointgtnl.com", href: "mailto:info@promisepointgtnl.com", icon: "mail" },
] as const;

type LegalSection = { n: string; title: string; paras: string[]; bullets?: string[] };

export type LegalDoc = {
  slug: "privacy" | "terms" | "data-protection" | "complaints";
  label: string;
  title: string;
  scope: string;
  intro: string;
  foot: string;
  sections: LegalSection[];
};

const S = (n: string, title: string, paras: string[], bullets?: string[]): LegalSection => ({
  n,
  title,
  paras,
  bullets,
});

export const legalUpdated = "September 2026";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    label: "Privacy Policy",
    title: "Privacy Policy",
    scope: "Nigeria Data Protection Act 2023",
    intro:
      "How Promise Point General Trading Nigeria Limited collects, uses and protects the information of farmers, buyers, partners and anyone who contacts us.",
    foot: "This policy applies to our USSD service on *347*319#, our AI voice assistant on +234 201 700 1183, our field registration, this website and our produce trading operations.",
    sections: [
      S("01", "Who we are", [
        "Promise Point General Trading Nigeria Limited is an agricultural trading and agrifintech company registered in Nigeria, with operations at KM 3, Itapaji-Iyemero Road, Ikole Local Government, Ekiti State. For the purposes of data protection law we are the data controller for the information described in this policy.",
      ]),
      S(
        "02",
        "Information we collect",
        ["We collect only what we need to register a farmer, buy produce, make a payment and meet our legal obligations."],
        [
          "Identity details: name, date of birth, gender, phone number and the role you register under.",
          "Farm details: location, land size, crop, expected harvest and the aggregator or agent who registered you.",
          "Transaction records: produce delivered, weight, price, payment references and delivery history.",
          "Financial identifiers required by our licensed partners to open and operate an account in your name.",
          "Service records: USSD session activity, voice assistant interactions, support calls and complaints.",
        ],
      ),
      S(
        "03",
        "How we use your information",
        ["We use your information to operate the service you asked for and to keep records that protect both sides of a transaction."],
        [
          "To register you, verify who you are and create an account you can reach by phone.",
          "To pay you for produce and to keep an auditable record of what was delivered and paid.",
          "To assess eligibility for savings, inputs or credit offered with our financial partners, where you ask for it.",
          "To improve the USSD menu and the voice assistant, including in Yoruba, Hausa, Igbo and English.",
          "To meet reporting, tax, food safety and anti-money-laundering obligations.",
        ],
      ),
      S("04", "USSD and voice channels", [
        "Our USSD service runs on the network layer already present on every handset, so it needs no app and no data. Sessions carry only the menu choices you make and the identifiers needed to complete them.",
        "Calls to the AI voice assistant may be recorded so the session can be completed, reviewed for accuracy and escalated to a human agent when the assistant cannot help. We tell you at the start of a call when a recording is being made.",
      ]),
      S(
        "05",
        "Sharing with financial and trading partners",
        [
          "Financial accounts and regulated payment services are provided through licensed financial partners. Promise Point is not a bank, does not hold customer deposits and does not provide regulated financial services independently.",
          "We share the minimum information a partner needs to perform its role, under a written agreement that binds them to confidentiality and to the same standard of protection we apply.",
        ],
        [
          "Licensed banks and payment service providers, to open accounts and move funds.",
          "Telecommunications operators, to deliver the USSD session and voice service.",
          "Off-takers and processors, where a delivery record must be confirmed.",
          "Regulators, auditors and law enforcement, where we are legally required to disclose.",
        ],
      ),
      S("06", "Storage and how long we keep it", [
        "Records are held on access-controlled systems in Nigeria or with processors who meet the transfer conditions of the Nigeria Data Protection Act. Transaction and payment records are kept for the period required by financial and tax law. Registration records are kept for as long as you remain in the network, and afterwards only where a legal obligation requires it.",
      ]),
      S(
        "07",
        "Your rights",
        ["You may exercise any of the rights below free of charge by contacting us. We respond within 30 days and will tell you if we need longer."],
        [
          "Ask what information we hold about you and get a copy of it.",
          "Correct anything that is wrong or out of date.",
          "Ask us to delete information we no longer have a lawful reason to keep.",
          "Withdraw consent for anything you agreed to on that basis, including marketing.",
          "Object to a decision made about you by automated means and ask for a human review.",
        ],
      ),
      S("08", "Consent that works without literacy", [
        "Many farmers in our network do not read. Consent is therefore taken in the language the farmer speaks, in the presence of a field agent, and is confirmed on the handset by the farmer's own PIN. The farmer keeps a printed receipt of the registration. A farmer may withdraw consent at any time by dialling the short code or telling any field agent.",
      ]),
      S("09", "Children", [
        "We register student farmers under a school or cooperative programme. Where a registrant is under 18, participation requires the consent of a parent, guardian or the responsible institution, and no financial product is issued in that person's name.",
      ]),
      S("10", "Changes and contact", [
        "When this policy changes we publish the new version here and, where the change is material, notify registered farmers through the USSD channel. To ask a question, make a request or raise a concern, write to info@promisepointgtnl.com or call 07020479821.",
      ]),
    ],
  },
  {
    slug: "terms",
    label: "Terms of Service",
    title: "Terms of Service",
    scope: "Governed by Nigerian law",
    intro:
      "The terms on which you register with Promise Point, use our USSD and voice channels, sell produce to us or buy our processed products.",
    foot: "If any part of these terms is found unenforceable, the rest continues to apply. These terms are governed by the laws of the Federal Republic of Nigeria.",
    sections: [
      S("01", "Agreeing to these terms", [
        "By registering on *347*319#, using our voice assistant, selling produce to us or buying a product from us, you agree to these terms. If you do not agree, do not use the service.",
      ]),
      S("02", "Who may register", [
        "Registration is open in six roles — farmer, student farmer, staff, aggregator, haulage driver and vendor. You must be 18 or over to hold an account in your own name, or be enrolled through a school or cooperative programme as a student farmer.",
        "You must give accurate information. Registering with another person's identity, or holding more than one account to obtain a benefit twice, ends your participation and may be reported.",
      ]),
      S("03", "The USSD and voice service", [
        "The short code gives you registration, balance enquiry, transfers, airtime, bill payment and your delivery records. The service depends on your mobile network, and sessions can time out or fail for reasons outside our control. We do not charge for the menu itself; your network may charge for the session.",
      ]),
      S("04", "Financial services are provided by licensed partners", [
        "Accounts, transfers, savings and credit are provided by licensed financial institutions. Promise Point operates the channel through which you reach them. Where a product is provided by a partner, that partner's own terms also apply and are read to you before you accept.",
      ]),
      S(
        "05",
        "Selling produce to us",
        [
          "We buy cassava from farmers in our registered network. Weight is recorded at collection or at the factory gate on calibrated scales, and a receipt is issued at that point. Price is the rate communicated for that collection cycle, and payment is made into the account attached to your registration.",
        ],
        [
          "Produce must be your own and must not have been sold or pledged to another buyer.",
          "We may reject a delivery that fails our quality or moisture standard, and we tell you why at the point of rejection.",
          "Deductions for haulage, inputs or credit repayment are shown on the receipt before payment.",
        ],
      ),
      S("06", "Buying our products", [
        "Cassava starch, flour, garri and by-products are processed at our certified facility and sold against a written specification. Orders are confirmed by a quotation stating grade, quantity, price, packaging and delivery terms. Claims about quality must be raised within seven days of delivery, with the batch number, so the batch can be traced.",
      ]),
      S("07", "Keeping your account safe", [
        "Your PIN is how the system knows you are you. Do not share it with anyone, including our staff, agents or anyone claiming to call from Promise Point. We never ask for your PIN. If you think someone knows it, change it on the short code immediately and call the hotline.",
      ]),
      S("08", "Availability", [
        "We aim to keep the service running at all times, but we may suspend it for maintenance, at the instruction of a regulator or partner, or where we suspect fraud. We are not liable for interruptions caused by network outages, power failure or events outside our reasonable control.",
      ]),
      S("09", "Limits on our liability", [
        "We are responsible for losses we cause by failing to meet these terms. We are not responsible for losses arising from information you gave us that was wrong, from your sharing of your PIN, or from the acts of a third party we do not control. Nothing here removes a liability that cannot be excluded under Nigerian law.",
      ]),
      S("10", "Ending your participation", [
        "You may leave the network at any time; tell us and we will settle any outstanding payment due to you and close the channel. We may end participation where these terms are broken, where a legal obligation requires it, or where the account is used for fraud. Records we must keep by law survive the closure.",
      ]),
    ],
  },
  {
    slug: "data-protection",
    label: "Data Protection",
    title: "Data Protection",
    scope: "NDPA 2023 compliance statement",
    intro:
      "Our compliance position under the Nigeria Data Protection Act 2023, and the controls we operate over farmer data in the field and on our systems.",
    foot: "This statement sits alongside the Privacy Policy. Where the two overlap, the Privacy Policy describes what we do and this statement describes how we govern it.",
    sections: [
      S("01", "Our position", [
        "We process personal data as a data controller under the Nigeria Data Protection Act 2023, and we require every processor acting for us to meet the same standard. Data protection is treated as an operating requirement of the service, not a document.",
      ]),
      S(
        "02",
        "Lawful basis for each activity",
        ["We identify a lawful basis before a new processing activity begins."],
        [
          "Consent — registration, marketing, and the recording of voice sessions.",
          "Contract — produce purchase, payment and product supply.",
          "Legal obligation — tax, financial reporting, food safety traceability and anti-money-laundering checks.",
          "Legitimate interest — fraud prevention and the security of our own systems.",
        ],
      ),
      S("03", "Data minimisation", [
        "The USSD menu is deliberately short. Each step collects only the field that step needs, and no field is collected because it might be useful later. Where a partner asks for data we do not hold, we ask the partner to justify the request before we collect it.",
      ]),
      S(
        "04",
        "Security controls",
        ["Access is granted by role and reviewed when a role changes."],
        [
          "Personal data is encrypted in transit and at rest.",
          "Access to farmer records is limited to staff whose work requires it, and is logged.",
          "PINs are never visible to staff and cannot be retrieved, only reset by the account holder.",
          "Systems are backed up, and restoration is tested rather than assumed.",
        ],
      ),
      S("05", "Field agents and devices", [
        "Field agents collect data on managed devices under a written confidentiality undertaking. Records sync to our systems and are not retained on the device. An agent who leaves loses access on the day of departure, and the farmers they registered stay in the network unaffected.",
      ]),
      S("06", "Processors and third parties", [
        "Every processor is engaged under a written agreement covering purpose limitation, security, breach notification, sub-processing and deletion at the end of the engagement. We keep a register of processors and review it annually.",
      ]),
      S("07", "Transfers outside Nigeria", [
        "Where a processor operates outside Nigeria, we transfer data only to a jurisdiction or arrangement that satisfies the transfer conditions of the Act, and we document that assessment before the transfer begins.",
      ]),
      S("08", "If something goes wrong", [
        "A suspected breach is contained, assessed and recorded within 24 hours of discovery. Where the breach is likely to result in a risk to the people affected, we notify the Nigeria Data Protection Commission within 72 hours and inform those affected in language they can understand, including by phone call where reading a notice is not realistic.",
      ]),
      S("09", "Requests from data subjects", [
        "Requests reach us by email, by hotline, or through any field agent. We verify who is asking before we act, answer within 30 days, and keep a record of the request and the outcome. There is no charge.",
      ]),
      S("10", "Accountability", [
        "A named data protection contact within the company owns this statement, reviews it at least once a year, and reports on data protection to the leadership of the business. Write to info@promisepointgtnl.com marked for the attention of the data protection contact.",
      ]),
    ],
  },
  {
    slug: "complaints",
    label: "Complaints",
    title: "Complaints and farmer support",
    scope: "Response within 5 working days",
    intro:
      "If a payment is wrong, a delivery was mis-recorded, an agent behaved improperly or a product failed to meet specification, this is how to raise it and what happens next.",
    foot: "We do not penalise anyone for making a complaint in good faith. Retaliation against a farmer, staff member or supplier who raises a concern is itself a disciplinary matter.",
    sections: [
      S(
        "01",
        "How to raise a complaint",
        ["Use whichever route is easiest for you. All four reach the same log."],
        [
          "Call the hotline on 07020479821 and speak in Yoruba, Hausa, Igbo or English.",
          "Dial *347*319# and choose the support option to leave a complaint against a transaction.",
          "Tell any field agent or aggregator, who must log it on your behalf and give you the reference.",
          "Write to info@promisepointgtnl.com, or come to the office at KM 3, Itapaji-Iyemero Road, Ikole.",
        ],
      ),
      S("02", "What helps us resolve it faster", [
        "Give us the phone number you registered with, the date of the transaction, the payment or receipt reference if you have it, and what you expected to happen. If a person is involved, tell us who. If the complaint is about a product, give us the batch number on the bag.",
      ]),
      S(
        "03",
        "What happens next",
        ["Every complaint is logged with a reference and an owner."],
        [
          "Same day — the complaint is logged and you are given a reference number.",
          "Within 2 working days — we acknowledge it and tell you who is handling it.",
          "Within 5 working days — we give you an outcome, or explain what is still being checked and when we will come back.",
          "Within 15 working days — the matter is closed, including any payment correction due to you.",
        ],
      ),
      S("04", "Payment and account complaints", [
        "Where the complaint concerns an account, a transfer or a failed transaction, the licensed financial partner that provides the account is involved. We raise it with them, track it, and stay your point of contact so you do not have to chase two organisations. If the partner cannot resolve it, you may escalate to the Central Bank of Nigeria consumer protection channel, and we will give you the details and the case file you need.",
      ]),
      S("05", "Product and food safety complaints", [
        "Product complaints are traced to the batch and the production run, and the finding is recorded against that batch under our food safety system. Where a product is found to be out of specification, we replace or refund it and record the corrective action taken at the facility.",
      ]),
      S("06", "Conduct of agents and staff", [
        "No member of our staff or any agent may ask for your PIN, deduct an unagreed fee, or ask for a payment to register you. Registration is free. Report any such request immediately — it is treated as misconduct and investigated within 5 working days.",
      ]),
      S("07", "If you are not satisfied", [
        "Ask for the complaint to be reviewed by management, quoting your reference. A review is carried out by someone who was not involved in the original decision. If you remain dissatisfied, you keep every right you have under Nigerian law, including complaint to the relevant regulator, and we will not obstruct it.",
      ]),
      S("08", "Reporting anonymously", [
        "You can report a concern without giving your name, by phone or in writing. An anonymous report is investigated on the same terms, though we may be limited in what we can confirm back to you.",
      ]),
    ],
  },
];
