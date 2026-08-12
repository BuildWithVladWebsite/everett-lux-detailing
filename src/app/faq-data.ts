export interface FaqItem {
  question: string
  answer: string
  category: string
}

export const FAQ_ITEMS: FaqItem[] = [
  // Booking & Availability
  {
    category: 'Booking & Availability',
    question: 'How do I book an appointment?',
    answer: 'The easiest way is to call or text us at (425) 230-0876. You can also fill out the contact form on our website and we\'ll get back to you within a few hours. We offer flexible scheduling Monday through Saturday, 8am–7pm.',
  },
  {
    category: 'Booking & Availability',
    question: 'How far in advance do I need to book?',
    answer: 'We typically ask for 24–48 hours notice, but we do our best to accommodate last-minute requests. For larger jobs like paint correction or ceramic coating, booking a few days ahead ensures we can dedicate the right amount of time to your vehicle.',
  },
  {
    category: 'Booking & Availability',
    question: 'Do you work on weekends?',
    answer: 'Yes — we work Monday through Saturday. Saturday appointments fill up fast, so we recommend booking early in the week if you need a weekend slot.',
  },
  {
    category: 'Booking & Availability',
    question: 'What areas do you serve?',
    answer: 'We serve all of Snohomish County including Everett, Marysville, Lynnwood, Mukilteo, Edmonds, Mill Creek, Bothell, Shoreline, and the greater Seattle metro including Kirkland, Bellevue, and Redmond. Not sure if we cover your area? Just call us.',
  },

  // Services & Pricing
  {
    category: 'Services & Pricing',
    question: 'How much does a full detail cost?',
    answer: 'Our Full Service Package (interior + exterior) starts at $300. Final pricing depends on vehicle size and condition. A standard sedan will be at the lower end; large SUVs, trucks, and vans may be higher. We always confirm the price before starting any work.',
  },
  {
    category: 'Services & Pricing',
    question: 'Why does pricing vary by vehicle size?',
    answer: 'Larger vehicles simply take more time, product, and labor. A full-size truck or 3-row SUV has significantly more interior surface area than a compact sedan. We price fairly based on what the job actually requires — no flat fees that cut corners on bigger vehicles.',
  },
  {
    category: 'Services & Pricing',
    question: 'Do you offer any discounts or packages?',
    answer: 'We offer discounts for repeat customers and referrals. If you book multiple services together (like interior + exterior + ceramic coating), we can often bundle them at a better rate than booking separately. Give us a call and we\'ll work out the best option for you.',
  },
  {
    category: 'Services & Pricing',
    question: 'What\'s the difference between a detail and a car wash?',
    answer: 'A car wash is a quick clean of surface dirt. A detail is a thorough, methodical process that cleans, restores, and protects every surface of your vehicle — inside and out. We use professional-grade equipment and products, not the automated brushes and chemicals a drive-through wash uses.',
  },

  // Mobile Detailing
  {
    category: 'Mobile Detailing',
    question: 'What does "mobile detailing" mean?',
    answer: 'Mobile detailing means we come to you — your home, your office, or anywhere your car is parked. We bring our own water supply, power equipment, and everything needed to complete the job on-site. You don\'t need to drop off your car anywhere.',
  },
  {
    category: 'Mobile Detailing',
    question: 'Do I need to provide water or power?',
    answer: 'No. We are fully self-contained and bring our own water and power supply. All we need is access to your vehicle and enough space to work around it.',
  },
  {
    category: 'Mobile Detailing',
    question: 'What if it rains on the day of my appointment?',
    answer: 'Light rain generally doesn\'t stop us for interior work or paint correction. For exterior details or ceramic coating applications, we may need to reschedule or work under a covered area to ensure the best results. We\'ll communicate with you if weather becomes a factor.',
  },
  {
    category: 'Mobile Detailing',
    question: 'Can you detail my car at my workplace?',
    answer: 'Absolutely — that\'s one of the most popular options. Many of our clients book appointments during their workday so their car is ready when they head home. As long as there\'s a parking spot with enough space around the vehicle, we\'re good to go.',
  },

  // Paint & Protection
  {
    category: 'Paint & Protection',
    question: 'What is paint correction and do I need it?',
    answer: 'Paint correction uses a machine polisher to remove a microscopic layer of clear coat, eliminating swirl marks, light scratches, water spots, and oxidation. If your paint looks dull or swirled in direct sunlight, correction is the right service. It\'s also required before applying ceramic coating, since defects would otherwise be permanently sealed in.',
  },
  {
    category: 'Paint & Protection',
    question: 'How long does ceramic coating last?',
    answer: 'A professionally applied ceramic coating typically lasts 2–5 years depending on how the car is maintained, weather exposure, and the products used during washing. We use professional-grade coatings that are significantly more durable than consumer-grade DIY products.',
  },
  {
    category: 'Paint & Protection',
    question: 'Can ceramic coating be applied to any vehicle?',
    answer: 'Yes, ceramic coating can be applied to any vehicle. However, we always perform a paint correction or thorough surface prep before coating — the paint needs to be clean and defect-free for the ceramic to bond properly and look its best.',
  },
  {
    category: 'Paint & Protection',
    question: 'Will paint correction remove all scratches?',
    answer: 'Paint correction removes scratches and swirls that are within the clear coat layer. A quick test: run your fingernail lightly across the scratch. If it doesn\'t catch, correction can likely remove it. If it catches (meaning it\'s cut through the clear coat into the base coat), it\'s too deep for correction alone and may need touch-up paint.',
  },

  // Mold & Odor
  {
    category: 'Mold & Odor',
    question: 'Can you remove mold from my car?',
    answer: 'Yes — mold remediation is one of our specialty services. We use a multi-stage process including high-temperature steam treatment, water extraction, anti-microbial application, and ozone therapy to eliminate mold at the source. We back every mold removal with a 6-month mold-free warranty.',
  },
  {
    category: 'Mold & Odor',
    question: 'What is the 6-month mold-free warranty?',
    answer: 'If mold returns within 6 months of our remediation treatment from the same source we treated, we\'ll come back and re-treat at no charge. It\'s our guarantee that we\'re fixing the problem, not just masking it.',
  },
  {
    category: 'Mold & Odor',
    question: 'Can you get rid of strong odors like smoke or pet smell?',
    answer: 'Yes. We offer ozone odor elimination as an add-on service. Ozone treatment neutralizes odors at the molecular level — it doesn\'t just mask them with fragrance. For severe odors (heavy smoke, mold, pet accidents), we combine extraction, steam cleaning, and ozone for the best results.',
  },
]

export const FAQ_CATEGORIES = Array.from(new Set(FAQ_ITEMS.map(f => f.category)))

// Home page preview — pick 5 most universally useful questions
export const FAQ_PREVIEW: FaqItem[] = [
  FAQ_ITEMS.find(f => f.question.includes('How do I book'))!,
  FAQ_ITEMS.find(f => f.question.includes('How much does a full detail'))!,
  FAQ_ITEMS.find(f => f.question.includes('Do I need to provide water'))!,
  FAQ_ITEMS.find(f => f.question.includes('paint correction and do I need'))!,
  FAQ_ITEMS.find(f => f.question.includes('Can you remove mold'))!,
  FAQ_ITEMS.find(f => f.question.includes('difference between a detail'))!,
]
