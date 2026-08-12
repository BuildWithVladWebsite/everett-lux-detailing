export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  img: string
  content: Section[]
}

export interface Section {
  type: 'heading' | 'paragraph' | 'list' | 'tip' | 'image'
  text?: string
  items?: string[]
  src?: string
  alt?: string
  caption?: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ceramic-coating-worth-it',
    title: 'Is Ceramic Coating Actually Worth It? A Detailer\'s Honest Take',
    excerpt: 'Ceramic coating is one of the most talked-about services in auto detailing — but is the price tag justified? Here\'s what we tell every customer who asks.',
    date: 'July 28, 2025',
    readTime: '5 min read',
    category: 'Paint Protection',
    img: 'https://images.unsplash.com/photo-1528597469186-bddab681a37f?w=900&h=500&fit=crop&auto=format',
    content: [
      { type: 'paragraph', text: 'Every week, someone asks us the same question: "Is ceramic coating really worth the money?" It\'s a fair question — the service starts at $500 and can go well above $1,000 for larger vehicles. So let\'s cut through the hype and give you an honest answer.' },
      { type: 'heading', text: 'What Ceramic Coating Actually Does' },
      { type: 'paragraph', text: 'Ceramic coating is a liquid polymer that chemically bonds to your paint surface, creating a permanent (or semi-permanent) protective layer. Unlike wax, which sits on top of the paint and washes off in a few weeks, a ceramic coating becomes part of the surface.' },
      { type: 'list', items: ['Repels water, mud, and road grime', 'Blocks UV rays that cause oxidation and fading', 'Resists light swirl marks and contaminants', 'Makes washing your car dramatically easier', 'Gives your paint a deep, glass-like gloss'] },
      { type: 'heading', text: 'What It Does NOT Do' },
      { type: 'paragraph', text: 'This is where a lot of customers get misled by the marketing. Ceramic coating is not a force field. It will not prevent rock chips, deep scratches, or parking lot dings. It will not eliminate the need to wash your car. And it will not fix existing paint defects — which is why we always pair a coating with paint correction first.' },
      { type: 'tip', text: 'Pro Tip: If your paint has swirl marks, scratches, or oxidation before coating, those defects get locked in permanently under the ceramic layer. Always correct the paint first.' },
      { type: 'heading', text: 'How Long Does It Last?' },
      { type: 'paragraph', text: 'A professionally applied ceramic coating typically lasts 2–5 years depending on how the car is maintained, where it\'s stored, and what products are used during washes. Consumer-grade DIY coatings are thinner and usually last under a year. Professional-grade products we use are significantly more durable.' },
      { type: 'heading', text: 'So Is It Worth It?' },
      { type: 'paragraph', text: 'For daily drivers that you plan to keep for several years? Absolutely yes. The time you save on washing, the protection from the Pacific Northwest\'s UV and rain, and the maintained resale value easily justify the cost over the life of the coating. For a car you\'re selling in six months? Probably not the right investment.' },
      { type: 'paragraph', text: 'If you\'re on the fence, start with a full exterior detail and a quality paint sealant. You\'ll get a taste of the protection and gloss — and we can talk about upgrading to ceramic at your next appointment.' },
    ],
  },
  {
    slug: 'how-often-detail-car',
    title: 'How Often Should You Detail Your Car? The Honest Answer',
    excerpt: 'Most people either never detail their car or go overboard. Here\'s a straightforward schedule based on how you actually drive.',
    date: 'July 14, 2025',
    readTime: '4 min read',
    category: 'Maintenance Tips',
    img: 'https://images.unsplash.com/photo-1708805282706-f44730b7e527?w=900&h=500&fit=crop&auto=format',
    content: [
      { type: 'paragraph', text: 'One of the most common questions we get: "How often should I get my car detailed?" The honest answer is — it depends on how you use it. But we can give you a solid framework based on the hundreds of vehicles we\'ve worked on in Everett and Snohomish County.' },
      { type: 'heading', text: 'The Basic Schedule' },
      { type: 'list', items: ['Full interior & exterior detail: every 4–6 months', 'Interior-only detail: every 2–3 months (especially with kids or pets)', 'Exterior wash: every 2–4 weeks', 'Paint sealant refresh: once a year', 'Ceramic coating top-up: every 1–2 years (if coated)'] },
      { type: 'heading', text: 'Factors That Should Bump You Up' },
      { type: 'paragraph', text: 'Certain situations call for more frequent detailing. If any of these apply to you, don\'t wait six months.' },
      { type: 'list', items: ['You have pets that ride with you', 'You have young kids who eat in the car', 'You commute on unpaved or gravel roads', 'Your car sits outside in direct sun year-round', 'You live near salt water (Mukilteo, Edmonds area)', 'You recently dealt with a spill, mold, or strong odor'] },
      { type: 'tip', text: 'Tip: Catching a small mold or mildew issue early costs a fraction of a full remediation. If you notice a musty smell, don\'t wait.' },
      { type: 'heading', text: 'Signs Your Car Is Overdue' },
      { type: 'list', items: ['You can write your name in the dust on the dash', 'The seats feel sticky or have visible stains', 'There\'s a smell you can\'t identify', 'Your windows are hazy even after wiping', 'The paint feels rough or looks dull in sunlight'] },
      { type: 'paragraph', text: 'Regular detailing isn\'t just about aesthetics — it protects the materials inside your car from degradation and keeps your vehicle\'s value intact. A well-maintained interior can add hundreds of dollars to resale value.' },
    ],
  },
  {
    slug: 'remove-car-mold',
    title: 'Mold in Your Car: What Causes It, and How We Remove It for Good',
    excerpt: 'Mold is more common in Pacific Northwest vehicles than most people realize. Here\'s what causes it, why it\'s a health risk, and what a professional remediation actually involves.',
    date: 'June 30, 2025',
    readTime: '6 min read',
    category: 'Mold & Odor',
    img: 'https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?w=900&h=500&fit=crop&auto=format',
    content: [
      { type: 'paragraph', text: 'Mold in a car is more common than most people realize — especially here in the Pacific Northwest, where moisture levels are high and cars sit in damp conditions for months at a time. If you\'ve noticed a musty smell, visible spots on your upholstery, or unexplained allergy symptoms when driving, mold may already be the culprit.' },
      { type: 'heading', text: 'What Causes Car Mold?' },
      { type: 'list', items: ['A window, sunroof, or door seal left cracked in rain', 'A spilled drink that wasn\'t fully dried', 'Wet floor mats left in the car for days', 'Flooding or water intrusion from a leak', 'High humidity trapped in a garage or covered parking'] },
      { type: 'heading', text: 'Why It\'s More Than Just a Smell' },
      { type: 'paragraph', text: 'Mold spores are airborne. If you\'re driving with active mold in your car, you\'re breathing those spores every time you turn on the HVAC system. This can aggravate asthma, cause allergic reactions, and in some cases cause more serious respiratory issues — especially for children and elderly passengers.' },
      { type: 'tip', text: 'Warning: Surface wiping with household cleaners does NOT solve a mold problem. It removes visible growth but leaves spores in the fabric, padding, and HVAC system.' },
      { type: 'heading', text: 'How Professional Mold Remediation Works' },
      { type: 'paragraph', text: 'Our mold removal process is thorough and multi-stage. Here\'s what we actually do:' },
      { type: 'list', items: ['Full interior inspection to identify all affected areas', 'High-temperature steam treatment to kill mold on contact', 'High-powered water extraction to remove moisture', 'Anti-microbial treatment on all surfaces', 'Ozone treatment — kills remaining spores and neutralizes odors at the molecular level', 'Final drying and air quality inspection'] },
      { type: 'heading', text: 'Our 6-Month Warranty' },
      { type: 'paragraph', text: 'We\'re confident enough in our process to back it with a 6-month mold-free warranty. If mold returns within six months of our treatment from the same source we remediated, we\'ll come back and fix it at no charge. No other detailer in Everett offers that.' },
      { type: 'paragraph', text: 'If you\'re dealing with mold, don\'t wait. The longer it sits, the deeper it grows into your seats, carpets, and headliner — and the more expensive it gets to fix. Give us a call for a free assessment.' },
    ],
  },
  {
    slug: 'paint-correction-vs-wax',
    title: 'Paint Correction vs. Waxing: What\'s the Difference and Which Do You Need?',
    excerpt: 'A lot of people use these terms interchangeably — but they\'re completely different services. Here\'s how to know which one your car actually needs.',
    date: 'June 12, 2025',
    readTime: '4 min read',
    category: 'Paint Care',
    img: 'https://images.unsplash.com/photo-1622329821376-a19fd6002562?w=900&h=500&fit=crop&auto=format',
    content: [
      { type: 'paragraph', text: 'We hear it all the time: "Can\'t you just wax out those scratches?" Unfortunately, no — waxing and paint correction are fundamentally different things. Understanding the difference can save you money and set the right expectations.' },
      { type: 'heading', text: 'What Waxing Does' },
      { type: 'paragraph', text: 'Wax is a topcoat applied over your paint. It adds a layer of shine and protection, fills in very minor surface imperfections optically (making them look less visible), and protects against light UV and contaminants. It typically lasts 1–3 months before washing away.' },
      { type: 'heading', text: 'What Paint Correction Does' },
      { type: 'paragraph', text: 'Paint correction is a physical process. Using a machine polisher and progressively finer compounds, we actually remove a microscopic layer of the clear coat to level out the surface — eliminating swirl marks, light scratches, water spots, and oxidation permanently. The defects are gone, not hidden.' },
      { type: 'list', items: ['Swirl marks (those circular scratches visible in sunlight)', 'Light scratches that haven\'t cut through the clear coat', 'Water spots and mineral deposits', 'Oxidation and dullness on older vehicles', 'Buffer trails from a bad previous wax job'] },
      { type: 'tip', text: 'Quick test: Run your fingernail lightly across a scratch. If it catches, it\'s likely too deep for paint correction. If it doesn\'t, correction can probably remove it.' },
      { type: 'heading', text: 'Which One Does Your Car Need?' },
      { type: 'paragraph', text: 'If your paint looks dull, swirled, or has visible scratches in direct sunlight, paint correction is the right service. Follow it up with a ceramic coating or quality sealant and you\'ll have paint that looks better than when it left the factory. Waxing alone on damaged paint just makes dull paint slightly shinier — the damage is still there.' },
      { type: 'paragraph', text: 'Not sure which you need? Send us a few photos of your paint in direct sunlight and we\'ll give you an honest recommendation — no obligation.' },
    ],
  },
  {
    slug: 'mobile-detailing-benefits',
    title: '5 Reasons Mobile Detailing Is Better Than Dropping Off at a Shop',
    excerpt: 'The traditional "drop your car off and wait" model is becoming obsolete. Here\'s why mobile detailing wins for most customers — especially in the Everett area.',
    date: 'May 28, 2025',
    readTime: '3 min read',
    category: 'Mobile Detailing',
    img: 'https://images.unsplash.com/photo-1708805282695-ef186db20192?w=900&h=500&fit=crop&auto=format',
    content: [
      { type: 'paragraph', text: 'Most people\'s experience with car detailing goes like this: drop the car off in the morning, arrange a ride, wait around, pick it up in the afternoon. It\'s inconvenient, and honestly, it doesn\'t have to be that way. Here\'s why we think mobile detailing is just better — for most customers.' },
      { type: 'heading', text: '1. Your Time Is Worth Something' },
      { type: 'paragraph', text: 'With mobile detailing, you don\'t go anywhere. We come to your home, your office, or wherever the car is parked. You keep working, spending time with your family, or doing anything else you\'d rather be doing. There\'s no drop-off logistics, no shuttle, no wait.' },
      { type: 'heading', text: '2. One-on-One Attention' },
      { type: 'paragraph', text: 'At a shop, your car gets processed alongside 5–10 others. Our team focuses on one or two vehicles per day. Your car gets our full attention, not a hurried production-line job.' },
      { type: 'heading', text: '3. We Bring Everything' },
      { type: 'paragraph', text: 'We carry our own water, power supply, chemicals, and equipment. You don\'t need a hose hookup or power outlet. We\'re fully self-contained.' },
      { type: 'heading', text: '4. Flexible Scheduling' },
      { type: 'paragraph', text: 'We work around your schedule — including early mornings and Saturdays. Try getting that level of flexibility from a traditional shop.' },
      { type: 'heading', text: '5. You Can Watch If You Want' },
      { type: 'paragraph', text: 'Some customers like to see exactly what\'s being done to their vehicle. With mobile detailing, you\'re welcome to check in at any stage. Full transparency, every time.' },
      { type: 'tip', text: 'We serve all of Snohomish County including Everett, Marysville, Lynnwood, Bothell, Mukilteo, and the greater Seattle area.' },
    ],
  },
  {
    slug: 'headlight-restoration-guide',
    title: 'Why Your Headlights Are Yellowing (And What We Do About It)',
    excerpt: 'Foggy, yellow headlights aren\'t just ugly — they\'re a safety hazard. Here\'s what causes headlight oxidation and how professional restoration fixes it.',
    date: 'May 10, 2025',
    readTime: '3 min read',
    category: 'Headlights',
    img: 'https://images.unsplash.com/photo-1708805283017-c662be2c7a44?w=900&h=500&fit=crop&auto=format',
    content: [
      { type: 'paragraph', text: 'If your headlights look yellow, hazy, or cloudy, you\'re not alone — it\'s one of the most common issues we see on vehicles more than 5 years old. And it\'s not just cosmetic: the AAA estimates that oxidized headlights can reduce light output by up to 80%, making nighttime driving significantly more dangerous.' },
      { type: 'heading', text: 'Why Do Headlights Yellow?' },
      { type: 'paragraph', text: 'Modern headlight lenses are made of polycarbonate plastic, not glass. The factory applies a UV-resistant coating when the car is manufactured, but that coating breaks down over time from sun exposure, heat, and road debris. Once it\'s gone, the plastic itself starts to oxidize — turning yellow, then foggy, then cracked.' },
      { type: 'heading', text: 'Can You DIY It?' },
      { type: 'paragraph', text: 'Yes, partially. The $20 headlight restoration kits at auto parts stores will remove surface oxidation and improve clarity — for a few months. The problem is they don\'t re-apply a proper UV coating, so the oxidation comes back faster than before.' },
      { type: 'tip', text: 'A professional restoration includes UV-resistant clear coat sealant that prevents the oxidation from returning quickly — making it last 1–2 years instead of a few months.' },
      { type: 'heading', text: 'Our Restoration Process' },
      { type: 'list', items: ['Wet sand with progressively finer grits (from 400 up to 3000)', 'Compound polish to remove sanding marks', 'Machine polish for clarity', 'Apply UV-resistant clear coat sealant', 'Final inspection and comparison'] },
      { type: 'paragraph', text: 'The result is headlights that look new, project correctly, and stay clear significantly longer than a DIY kit. At $75 per headlight (or $150 for both), it\'s one of the most cost-effective upgrades you can make to an older vehicle.' },
    ],
  },
]
