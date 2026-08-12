// SEO landing page data — one entry per service, targeting Everett WA local search

export interface SeoFaq {
  q: string
  a: string
}

export interface SeoServiceData {
  slug: string
  metaTitle: string
  metaDesc: string
  h1: string
  heroImg: string
  intro: string
  whyLocal: string[]
  faqs: SeoFaq[]
  nearbyAreas: string[]
  schemaType: string
}

export const SEO_SERVICES: SeoServiceData[] = [
  {
    slug: 'interior',
    metaTitle: 'Interior Car Detailing Everett WA | Everett Lux Detailing',
    metaDesc: 'Professional interior car detailing in Everett, WA. Deep vacuum, steam cleaning, shampoo extraction & odor removal. Mobile service — we come to you. Call (425) 230-0876.',
    h1: 'Interior Car Detailing in Everett, WA',
    heroImg: 'https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?w=1600&h=700&fit=crop&auto=format',
    intro: "If you live in Everett and your car's interior is overdue for a serious clean, Everett Lux Detailing brings the full detailing shop experience right to your driveway. Our interior car detailing service in Everett, WA removes years of built-up dirt, pet hair, food odors, and grime from every surface — seats, carpets, vents, door panels, and more. We use professional-grade steam cleaners, hot-water extraction machines, and odor-neutralizing treatments that you won't find at a drive-through wash. Whether you drive a daily commuter or a family SUV, our mobile interior detail leaves your vehicle looking and smelling like it just rolled off the lot.",
    whyLocal: [
      "Based in Everett at 11615 25th Ave SE — we know Snohomish County roads and conditions",
      "We come to your home, office, or apartment in Everett — no drop-off required",
      "Everett's wet winters breed mold and mildew; our steam treatment kills it at the source",
      "Serving Everett neighborhoods: Mukilteo Blvd corridor, Silver Lake, Riverview, Holly, Pinehurst",
      "Flexible same-week and weekend appointments for Everett residents",
    ],
    faqs: [
      { q: 'How much does interior car detailing cost in Everett, WA?', a: 'Our interior detailing in Everett starts at $150 for a standard sedan. SUVs, trucks, and larger vehicles are priced at $175–$225 depending on size and condition. We provide free quotes over the phone — call (425) 230-0876.' },
      { q: 'Do you come to my house in Everett?', a: 'Yes — we are 100% mobile. We bring all our own equipment including water and power. Whether you are in South Everett, Silver Lake, or near Boeing, we come to you.' },
      { q: 'How long does an interior detail take?', a: 'Most interior details in Everett take 2–4 hours depending on vehicle size and how soiled the interior is. We will give you a realistic time estimate when you book.' },
      { q: 'Can you remove pet hair from my car in Everett?', a: 'Absolutely. Pet hair removal is one of our most requested add-ons in Everett. We use specialized tools to extract embedded hair from carpets and upholstery that vacuums alone cannot reach.' },
      { q: 'Will interior detailing remove bad odors from my car?', a: 'Yes. We use an enzyme-based odor neutralizer and can add an ozone treatment (+$60) for severe smoke, pet, or mold odors. This eliminates odors at the molecular level rather than just masking them.' },
      { q: 'How often should I get my car interior detailed in Everett?', a: "We recommend every 4–6 months for Everett drivers. Snohomish County's rainy season brings in mud, moisture, and mold risk — more frequent detailing helps protect your upholstery and prevents long-term damage." },
    ],
    nearbyAreas: ['Marysville', 'Lynnwood', 'Mukilteo', 'Mill Creek', 'Silver Lake', 'South Everett'],
    schemaType: 'AutoRepair',
  },
  {
    slug: 'exterior',
    metaTitle: 'Exterior Car Detailing Everett WA | Everett Lux Detailing',
    metaDesc: 'Mobile exterior car detailing in Everett, WA. Foam wash, clay bar, iron decontamination & paint sealant. We come to you. Free quotes — (425) 230-0876.',
    h1: 'Exterior Car Detailing in Everett, WA',
    heroImg: 'https://images.unsplash.com/photo-1708805282706-f44730b7e527?w=1600&h=700&fit=crop&auto=format',
    intro: "Everett's roads leave a mark on your paint — tree sap from the PNW forests, road salt in winter, industrial fallout near the waterfront, and constant rain that leaves hard water spots. Everett Lux Detailing's exterior car detailing service tackles all of it. We use a multi-stage process: foam cannon pre-soak, iron decontamination spray, clay bar treatment to remove embedded contaminants, a careful two-bucket hand wash, wheel and tire scrubbing, trim dressing, and a hand-applied paint sealant. The result is paint that looks showroom-fresh and stays protected through the next season of Everett weather.",
    whyLocal: [
      "Everett's marine climate causes accelerated paint oxidation — we treat and prevent it",
      "Industrial fallout near Paine Field and the waterfront etches paint; our iron remover dissolves it safely",
      "Tree sap and pollen from Snohomish County's tree canopy are no match for our clay bar treatment",
      "We detail at your Everett home or workplace — no waiting at a shop",
      "Our paint sealant is specifically chosen for the Pacific Northwest's wet conditions",
    ],
    faqs: [
      { q: 'How much does exterior detailing cost in Everett, WA?', a: 'Exterior detailing in Everett starts at $200 for a sedan. SUVs and trucks run $225–$275. Call (425) 230-0876 for a free, no-obligation quote.' },
      { q: 'Is exterior detailing worth it for a daily driver in Everett?', a: "Yes. Everett's frequent rain and road contaminants cause paint degradation over time. Regular exterior details every 3–4 months extend your paint's life and preserve your vehicle's resale value." },
      { q: 'What is the difference between a car wash and exterior detailing?', a: 'A car wash removes surface dirt. Exterior detailing goes much deeper — clay bar removes embedded particles, iron remover dissolves brake dust, and a paint sealant protects the clear coat. It is like a car wash plus a full paint treatment.' },
      { q: 'Do you detail cars in the rain in Everett?', a: 'We prefer covered areas like garages or carports when possible. If no cover is available, we work in light rain with appropriate techniques. We will always communicate about conditions when booking.' },
      { q: 'Can exterior detailing remove tree sap and bird droppings in Everett?', a: 'Yes — both are acidic and damage clear coat over time. Our clay bar and decontamination process safely removes tree sap, bird droppings, and industrial fallout without scratching the paint.' },
      { q: 'How long does exterior detailing take?', a: 'An exterior detail in Everett typically takes 2–3 hours. Larger vehicles like SUVs and trucks can take up to 4 hours. We work efficiently and never rush the process.' },
    ],
    nearbyAreas: ['Marysville', 'Lynnwood', 'Mukilteo', 'Edmonds', 'Mill Creek', 'Bothell'],
    schemaType: 'AutoRepair',
  },
  {
    slug: 'full-service',
    metaTitle: 'Full Service Car Detailing Everett WA | Everett Lux Detailing',
    metaDesc: 'Complete mobile car detailing in Everett, WA — interior + exterior in one session. Best value package from $300. We come to you. Call (425) 230-0876.',
    h1: 'Full Service Car Detailing in Everett, WA',
    heroImg: 'https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?w=1600&h=700&fit=crop&auto=format',
    intro: "The full service detail is the complete transformation package — everything inside and out in a single appointment. If you want your Everett vehicle to look and feel like new, this is the service. We combine our entire interior deep clean (vacuum, steam, shampoo, odor treatment) with our complete exterior process (foam wash, clay bar, iron decontamination, hand wash, paint sealant) into one seamless session. It is the most popular choice for Everett residents preparing to sell a vehicle, returning from a long trip, or simply wanting that genuine \"brand new car\" feeling again.",
    whyLocal: [
      "Most popular package for Everett residents — best value when you need everything done",
      "Ideal before selling your vehicle — Everett buyers notice a detailed car and pay more",
      "We handle vehicles in any condition — from daily drivers to neglected cars",
      "Serving all of Everett including Mukilteo Blvd, Silver Lake, Riverview, and South Everett",
      "One appointment, one price — no upsells at the door",
    ],
    faqs: [
      { q: 'What is included in a full service detail in Everett?', a: 'Our full service detail combines interior detailing (vacuum, steam clean, shampoo, odor treatment, glass) and exterior detailing (foam wash, clay bar, iron decontamination, hand wash, sealant) into one complete session.' },
      { q: 'How much does a full detail cost in Everett, WA?', a: 'Full service detailing in Everett starts at $300 for a sedan. SUVs and trucks start at $375. Call (425) 230-0876 for a precise quote — we do not charge surprise fees.' },
      { q: 'How long does a full detail take in Everett?', a: 'Plan for 4–6 hours for most vehicles. Larger SUVs, trucks, and vans may take up to 8 hours. We will give you an accurate time window when you book.' },
      { q: 'Should I detail my car before selling it in Everett?', a: "Absolutely. A full detail typically adds $500–$1,500 to the perceived value of a used vehicle. Everett buyers are savvy — a clean car sells faster and at a higher price." },
      { q: 'Do you offer full service detailing for trucks and SUVs in Everett?', a: 'Yes. We detail all vehicle types including SUVs, trucks, minivans, and crossovers common in the Everett area. Pricing adjusts for size.' },
      { q: 'Is the full service detail the same as a "full detail"?', a: 'Yes — a full detail means both interior and exterior are addressed. Our full service package is a true full detail, not just an exterior wash with a quick vacuum.' },
    ],
    nearbyAreas: ['Marysville', 'Lynnwood', 'Mukilteo', 'Edmonds', 'Mill Creek', 'Bothell'],
    schemaType: 'AutoRepair',
  },
  {
    slug: 'paint-correction',
    metaTitle: 'Paint Correction Everett WA | Everett Lux Detailing',
    metaDesc: 'Professional paint correction in Everett, WA. Remove swirl marks, scratches & oxidation with machine polishing. Mobile service. From $335 — Call (425) 230-0876.',
    h1: 'Paint Correction in Everett, WA',
    heroImg: 'https://images.unsplash.com/photo-1622329821376-a19fd6002562?w=1600&h=700&fit=crop&auto=format',
    intro: "If your car's paint has swirl marks from automatic car washes, light scratches from parking lots, or the dull haze of oxidation, paint correction is the only real fix. Everett Lux Detailing offers professional machine polishing in Everett, WA that removes these defects at the clear-coat level — not just hiding them temporarily with wax. We use dual-action and rotary polishers with measured cutting compounds and finishing polishes to restore true depth, clarity, and gloss to your paint. The result is a mirror-like finish that turns heads whether you're on Broadway, Evergreen Way, or pulling into a show.",
    whyLocal: [
      "Everett's rainy season and automatic car washes create swirl marks — we eliminate them",
      "UV exposure in the Pacific Northwest summers causes oxidation; we reverse it completely",
      "We measure paint thickness before polishing to ensure your clear coat is never over-cut",
      "Mobile service — bring showroom paint back without leaving your Everett driveway",
      "Paint correction prep for ceramic coating, our most popular upgrade in Everett",
    ],
    faqs: [
      { q: 'How much does paint correction cost in Everett, WA?', a: 'Paint correction in Everett starts at $335 for a single-stage polish on a sedan. Multi-stage correction and larger vehicles run $450–$800+. Call (425) 230-0876 for an assessment.' },
      { q: 'What causes swirl marks on cars in Everett?', a: "Swirl marks come from automatic car washes, improper hand washing, and dry wiping. Everett's frequent rain also causes drivers to wipe water off without lubrication, scratching the clear coat." },
      { q: 'Can paint correction fix deep scratches on my car?', a: 'Paint correction removes defects within the clear coat — swirls, light scratches, water spots, and oxidation. Deep scratches that go to the base coat or metal require touch-up paint. We will assess your paint and give you honest expectations before starting.' },
      { q: 'Is paint correction permanent?', a: 'The removed defects are permanently gone. However, new swirls will form if the car is washed improperly. We recommend following with a ceramic coating for long-term protection.' },
      { q: 'How long does paint correction take in Everett?', a: 'Single-stage correction takes 4–6 hours. Multi-stage correction for heavily swirled or oxidized paint can take 8–12 hours. We will quote the time accurately during your assessment.' },
      { q: 'Should I get paint correction before ceramic coating?', a: 'Yes — always. Ceramic coating locks in whatever defects are in the paint. We include a single-stage correction in our ceramic coating package so the finish sealed is flawless.' },
    ],
    nearbyAreas: ['Marysville', 'Lynnwood', 'Mukilteo', 'Kirkland', 'Bellevue', 'Mill Creek'],
    schemaType: 'AutoRepair',
  },
  {
    slug: 'ceramic-coating',
    metaTitle: 'Ceramic Coating Everett WA | Everett Lux Detailing',
    metaDesc: 'Professional ceramic coating in Everett, WA. Long-lasting paint protection against rain, UV & contamination. Mobile application. From $500 — Call (425) 230-0876.',
    h1: 'Ceramic Coating in Everett, WA',
    heroImg: 'https://images.unsplash.com/photo-1528597469186-bddab681a37f?w=1600&h=700&fit=crop&auto=format',
    intro: "For Everett drivers who want the best long-term protection available, professional ceramic coating is the gold standard. A true nano-ceramic coating chemically bonds to your paint and creates a hard, hydrophobic shell that repels water, blocks UV rays, resists bird droppings and tree sap, and keeps the car cleaner between washes. Unlike wax or sealant that wears off in weeks, a professionally applied ceramic coating lasts 2–5 years. Everett Lux Detailing applies professional-grade ceramic coatings right in your driveway — no need to leave your car at a shop for days.",
    whyLocal: [
      "Everett's heavy rainfall makes hydrophobic ceramic coating an especially smart investment",
      "UV protection is critical in PNW summers — ceramic significantly slows paint oxidation",
      "Industrial fallout near Paine Field and Port of Everett is repelled by the ceramic's hardness",
      "We include a single-stage paint correction in every ceramic package — the prep is everything",
      "Ceramic coating pays for itself in reduced washing frequency and preserved resale value",
    ],
    faqs: [
      { q: 'How much does ceramic coating cost in Everett, WA?', a: 'Ceramic coating in Everett starts at $500 for a sedan, which includes paint decontamination and a single-stage polish. SUVs and trucks start at $650. Call (425) 230-0876 for an exact quote.' },
      { q: 'How long does ceramic coating last on Everett roads?', a: "A professionally applied ceramic coating typically lasts 2–5 years in the Pacific Northwest. With proper maintenance washes, it can last even longer. Everett's wet winters actually help as rain sheets off the hydrophobic surface rather than pooling." },
      { q: 'Is ceramic coating worth it for a daily driver in Everett?', a: "Yes. Ceramic coating is especially valuable for Everett's conditions — rain, tree sap, and road grime are constant. The coating dramatically reduces the effort needed to keep the car clean and protects the paint from long-term degradation." },
      { q: 'How is ceramic coating different from wax or paint sealant?', a: "Wax sits on top of paint and lasts 4–8 weeks. Paint sealant bonds lightly and lasts 4–6 months. Ceramic coating chemically bonds at the molecular level and lasts years — it's in a completely different category." },
      { q: 'What preparation is needed before ceramic coating?', a: 'The paint must be fully decontaminated (clay bar, iron remover) and polished before coating. We include this in every ceramic package. Coating over contaminated or swirled paint locks those defects in permanently.' },
      { q: 'Can you apply ceramic coating at my home in Everett?', a: 'Yes. We apply ceramic coating mobile, at your location. We prefer a garage or covered area for the cure process, but we can work with your setup. We will coordinate the right conditions at booking.' },
    ],
    nearbyAreas: ['Marysville', 'Lynnwood', 'Mukilteo', 'Edmonds', 'Kirkland', 'Bellevue'],
    schemaType: 'AutoRepair',
  },
  {
    slug: 'headlight-restoration',
    metaTitle: 'Headlight Restoration Everett WA | Everett Lux Detailing',
    metaDesc: 'Headlight restoration in Everett, WA — remove haze, yellowing & cloudiness. Improve night visibility. Mobile service. $75/single, $150/pair — Call (425) 230-0876.',
    h1: 'Headlight Restoration in Everett, WA',
    heroImg: 'https://images.unsplash.com/photo-1708805283017-c662be2c7a44?w=1600&h=700&fit=crop&auto=format',
    intro: "Cloudy, yellowed headlights are not just an eyesore — they are a safety hazard. Hazy lenses can reduce your headlight output by up to 80%, making Everett's dark, rainy winter nights significantly more dangerous. Everett Lux Detailing's headlight restoration service uses a multi-step wet sanding process followed by compound polishing and a UV-resistant clear coat sealant to restore full optical clarity. The process takes about an hour per lens and the results are dramatic — from foggy yellow to crystal clear. All for a fraction of the cost of headlight replacement.",
    whyLocal: [
      "Everett's overcast winters make clear headlights critical for safe night driving",
      "UV from Pacific Northwest summers rapidly yellows polycarbonate lenses",
      "Washington State requires functioning headlights — cloudy lenses can fail inspection",
      "Quick 1-hour mobile service — we come to your Everett home or workplace",
      "Our UV-resistant sealant prevents re-yellowing for 1–2 years",
    ],
    faqs: [
      { q: 'How much does headlight restoration cost in Everett, WA?', a: 'Headlight restoration in Everett is $75 for a single headlight or $150 for both. We come to your location — call (425) 230-0876 to book.' },
      { q: 'How long does headlight restoration last?', a: 'Our UV-resistant clear coat sealant keeps headlights clear for 1–2 years in Everett conditions. Parking in a garage or shaded area extends the results further.' },
      { q: 'Is headlight restoration better than replacement in Everett?', a: "For most vehicles, yes. Headlight assemblies cost $100–$400+ each before installation. Our restoration achieves similar clarity at a fraction of the cost. We'll tell you honestly if a lens is too far gone for restoration." },
      { q: 'Will restored headlights pass a Washington State vehicle inspection?', a: 'Yes. Our restoration brings lenses back to clear, functional condition that meets Washington State headlight standards.' },
      { q: 'How long does headlight restoration take?', a: 'About 45–60 minutes per headlight, or 1.5–2 hours for both. We perform the service mobile at your Everett location.' },
      { q: 'Can you restore extremely yellowed headlights?', a: 'In most cases, yes. Even severely oxidized lenses respond well to our wet sanding process. We will assess them and give you a clear expectation before we start.' },
    ],
    nearbyAreas: ['Marysville', 'Lynnwood', 'Mukilteo', 'Mill Creek', 'Silver Lake', 'South Everett'],
    schemaType: 'AutoRepair',
  },
  {
    slug: 'mold-remediation',
    metaTitle: 'Car Mold Removal Everett WA | Everett Lux Detailing',
    metaDesc: 'Professional car mold removal & remediation in Everett, WA. Steam treatment, ozone therapy & 6-month warranty. Mobile service. Call for quote: (425) 230-0876.',
    h1: 'Car Mold Removal & Remediation in Everett, WA',
    heroImg: 'https://images.unsplash.com/photo-1620584898989-d39f7f9ed1b7?w=1600&h=700&fit=crop&auto=format',
    intro: "Everett's wet climate is the perfect breeding ground for car mold. A slow window leak, wet carpets, a forgotten water bottle — and within days you can have a serious mold problem growing inside your vehicle. Beyond the musty smell, car mold poses genuine health risks, especially for children and allergy sufferers. Everett Lux Detailing specializes in vehicle mold remediation — a full-service process that uses high-temperature steam treatment, commercial water extraction, anti-microbial application, and ozone therapy to eliminate mold at the source and prevent it from returning. We back every mold job with a 6-month mold-free warranty.",
    whyLocal: [
      "Everett averages 38 inches of rain per year — car mold is extremely common here",
      "We are specialists in PNW vehicle mold: we know the conditions and the right treatments",
      "Ozone treatment eliminates mold spores and bacteria that steam alone cannot reach",
      "Our 6-month mold-free warranty is unique in the Everett area",
      "We serve Everett, Marysville, Lynnwood, and all of Snohomish County for mold cases",
    ],
    faqs: [
      { q: 'How much does car mold removal cost in Everett, WA?', a: 'Car mold remediation is priced by severity and vehicle size. Call (425) 230-0876 for a free assessment — pricing typically ranges from $250 for minor mold to $600+ for severe cases.' },
      { q: 'Why is car mold so common in Everett?', a: "Everett's rainy climate means moisture gets into vehicles frequently through window seals, door seals, sunroof drains, and HVAC systems. Once moisture sits in carpet or upholstery, mold develops within 24–48 hours." },
      { q: 'Is car mold dangerous?', a: 'Yes. Black mold and common vehicle mold species produce mycotoxins that can cause respiratory issues, allergic reactions, and chronic health problems — especially in children and those with asthma.' },
      { q: 'Can I remove car mold myself?', a: "DIY mold removal with household cleaners rarely eliminates the root cause. Mold grows into carpet backing, foam padding, and behind panels. Our steam treatment and ozone therapy reach areas that surface cleaning can't." },
      { q: 'What is your mold-free warranty?', a: 'We back every mold remediation in Everett with a 6-month warranty. If mold returns within 6 months from the same source, we treat it again at no charge.' },
      { q: 'How long does mold remediation take in Everett?', a: 'Depending on severity, mold remediation takes a half to full day. Ozone treatment requires the vehicle to sit sealed for several hours after initial cleaning. We will give you a timeline at assessment.' },
    ],
    nearbyAreas: ['Marysville', 'Lynnwood', 'Mukilteo', 'Mill Creek', 'Edmonds', 'Bothell'],
    schemaType: 'AutoRepair',
  },
  {
    slug: 'rv-detailing',
    metaTitle: 'RV Detailing Everett WA | Everett Lux Detailing',
    metaDesc: 'Professional RV & motorhome detailing in Everett, WA. Exterior wash, oxidation removal, roof cleaning & ceramic coating. Mobile service. Call for quote: (425) 230-0876.',
    h1: 'RV & Motorhome Detailing in Everett, WA',
    heroImg: 'https://images.unsplash.com/photo-1708805282695-ef186db20192?w=1600&h=700&fit=crop&auto=format',
    intro: "Your RV is one of the biggest investments you own — and it faces some of the harshest conditions of any vehicle. Everett's rain, UV exposure, road grime, and moss growth on fiberglass and rubber roofs take a real toll. Everett Lux Detailing provides specialized RV and motorhome detailing in Everett, WA, including full exterior wash, rubber roof cleaning and conditioning, oxidation removal and polish, rubber seal treatment, and optional ceramic coating to protect your investment for years. We detail Class A, B, and C motorhomes and travel trailers, and we come to your storage lot or home in the Everett area.",
    whyLocal: [
      "Everett's wet climate breeds roof moss and algae on fiberglass RVs — we remove and prevent it",
      "Many Everett RV owners store near Boeing or off Hwy 2 — we come to your storage location",
      "Pacific Northwest UV and rain cause severe oxidation on older fiberglass; we reverse it",
      "We condition rubber roof seals that Everett winters crack and degrade",
      "Ceramic coating is especially valuable for RVs — longer time between details, better protection",
    ],
    faqs: [
      { q: 'How much does RV detailing cost in Everett, WA?', a: 'RV detailing is priced by length and service level. Call (425) 230-0876 for a free quote — typical pricing ranges from $400 for a small Class B to $1,200+ for a large Class A with oxidation removal.' },
      { q: 'Do you come to RV storage facilities in Everett?', a: 'Yes. We frequently detail RVs at storage facilities around Everett and Marysville. As long as we have reasonable access and space to work, we can come to your storage location.' },
      { q: 'How do you remove oxidation from an RV in Everett?', a: "Oxidation on fiberglass RV panels requires a compound polish and multi-step buffing process. Everett's combination of UV and rain accelerates oxidation — we restore the gel coat to its original shine and apply a protective sealant or ceramic coating." },
      { q: 'Can you detail the roof of my RV?', a: "Yes. We clean and treat rubber (EPDM/TPO) roofs, which are prone to moss and algae growth in Everett's climate. We also condition the rubber to prevent cracking and seal any minor surface oxidation." },
      { q: 'How often should I detail my RV in Everett?', a: 'We recommend a full exterior detail at least once a year for Everett-stored RVs. If your RV is used seasonally and stored outdoors, consider twice yearly to combat moss growth and moisture damage.' },
      { q: 'Can you apply ceramic coating to an RV?', a: 'Yes. Ceramic coating is one of the best investments for RVs in the Pacific Northwest. It dramatically reduces moss adhesion, repels water, and makes routine cleaning much easier. Call us to discuss the right package for your RV.' },
    ],
    nearbyAreas: ['Marysville', 'Arlington', 'Monroe', 'Mukilteo', 'Lynnwood', 'Bothell'],
    schemaType: 'AutoRepair',
  },
]

export function getSeoService(slug: string): SeoServiceData | undefined {
  return SEO_SERVICES.find(s => s.slug === slug)
}
