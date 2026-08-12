import { useState } from 'react'
import { Link } from 'react-router'
import interiorDetailImg from '@/imports/Screenshot_2026-08-12_at_12.06.18_AM.png'
import { C, SERVICES, TESTIMONIALS, STATS, BRANDS, TEAM } from '../data'
import { BLOG_POSTS } from '../blog-data'
import { FAQ_PREVIEW } from '../faq-data'
import { Reveal, BtnPrimary, BtnOutline, Counter, Marquee, TestimonialCard, Shimmer, BeforeAfter } from '../components/Shared'
import SEOMeta from '../components/SEOMeta'
import SEO from '../seo-config'

// ─── Package data ─────────────────────────────────────────────────────────────
const PACKAGES = [
  {
    title: 'Interior Detail',
    desc: 'A deep clean of every surface inside your vehicle — from carpets to vents to glass.',
    price: '$150 – $200',
    img: 'https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?w=600&h=360&fit=crop&auto=format',
    badge: null,
    checklist: [
      { heading: 'Interior', items: ['Full vacuum — seats, carpets, trunk', 'Steam clean all hard surfaces & vents', 'Carpet & upholstery shampoo', 'Dashboard & door panel wipe-down', 'Interior glass & mirror cleaning', 'Leather conditioning (if applicable)', 'Odor neutralization treatment'] },
    ],
  },
  {
    title: 'Exterior Detail',
    desc: 'A complete exterior refresh that leaves the paint glossy, the wheels spotless, and the trim sharp.',
    price: '$150 – $200',
    img: 'https://images.unsplash.com/photo-1708805282706-f44730b7e527?w=600&h=360&fit=crop&auto=format',
    badge: null,
    checklist: [
      { heading: 'Exterior', items: ['Pre-rinse & foam cannon application', 'Iron & fallout decontamination', 'Clay bar paint smoothing', 'Two-bucket hand wash', 'Wheel, tire & brake dust scrub', 'Exterior trim dressing', 'Exterior glass cleaning', 'Hand-applied paint sealant'] },
    ],
  },
  {
    title: 'Full Service Package',
    desc: 'Everything inside and out in one complete session — the best value for a total transformation.',
    price: '$229',
    originalPrice: '$300',
    img: 'https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?w=600&h=360&fit=crop&auto=format',
    badge: 'Limited Deal',
    checklist: [
      { heading: 'Interior', items: ['Full vacuum — seats, carpets, trunk', 'Steam clean all hard surfaces & vents', 'Carpet & upholstery shampoo', 'Dashboard & door panel wipe-down', 'Interior glass cleaning', 'Leather conditioning (if applicable)', 'Odor neutralization'] },
      { heading: 'Exterior', items: ['Foam cannon & iron decontamination', 'Clay bar & two-bucket hand wash', 'Wheel, tire & brake dust scrub', 'Trim dressing & exterior glass', 'Hand-applied paint sealant'] },
      { heading: 'Bonus', items: ['Final quality inspection', 'Courtesy air freshener'] },
    ],
  },
  {
    title: 'Paint Correction',
    desc: 'Multi-stage machine polishing that erases swirl marks, scratches, and oxidation.',
    price: '$335',
    img: 'https://images.unsplash.com/photo-1622329821376-a19fd6002562?w=600&h=360&fit=crop&auto=format',
    badge: 'Premium',
    checklist: [
      { heading: 'Paint Correction', items: ['Full decontamination wash', 'Clay bar & iron remover', 'Paint thickness measurement', 'Single or multi-stage machine polish', 'Swirl mark & scratch removal', 'Water spot & oxidation removal', 'IPA wipe-down inspection', 'Paint protection sealant'] },
    ],
  },
  {
    title: 'Ceramic Coating',
    desc: 'Professional-grade nano-ceramic protection bonded to your paint — repels UV, water, and grime for years.',
    price: '$500',
    img: 'https://images.unsplash.com/photo-1528597469186-bddab681a37f?w=600&h=360&fit=crop&auto=format',
    badge: 'Best Protection',
    checklist: [
      { heading: 'Ceramic Coating', items: ['Full decontamination & paint prep', 'Single-stage paint correction included', 'IPA panel wipe prep', 'Professional ceramic application', 'Cure time management', 'Hydrophobic water-beading layer', 'UV & oxidation protection', 'Multi-year durability'] },
    ],
  },
]

const ADDONS = [
  { name: 'Engine Bay Cleaning', price: '+$50', desc: 'Safely degreased, rinsed, and detailed.' },
  { name: 'Pet Hair Removal', price: '+$40', desc: 'Deep extraction of embedded pet hair.' },
  { name: 'Odor Bomb Treatment', price: '+$30', desc: 'Neutralizes odors at the molecular level.' },
  { name: 'Rain-X Glass Treatment', price: '+$25', desc: 'Water-beading hydrophobic glass coating.' },
  { name: 'Tar & Adhesive Removal', price: '+$35', desc: 'Removes stubborn tar, sap, and residue.' },
  { name: 'Water Spot Treatment', price: '+$45', desc: 'Polishes out mineral deposits from paint.' },
  { name: 'Ozone Odor Elimination', price: '+$60', desc: 'Kills mold spores and bacteria at the source.' },
  { name: 'Scratch Touch-Up', price: 'Quote', desc: 'Light scratch fill and blend — ask us.' },
]

// ─── Package card component ───────────────────────────────────────────────────
function PackageCard({ pkg, index }: { pkg: typeof PACKAGES[0] & { originalPrice?: string }; index: number }) {
  const [open, setOpen] = useState(false)
  const [hov, setHov] = useState(false)

  return (
    <Reveal delay={index * 0.08}>
      <div style={{ background: C.surface, border: `1px solid ${open ? C.borderB : C.border}`, display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s', height: '100%' }}>
        {/* Image */}
        <div style={{ position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
          <img
            src={pkg.img} alt={pkg.title}
            style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', filter: 'brightness(0.75)', transition: 'transform 0.5s, filter 0.4s', transform: hov ? 'scale(1.05)' : 'scale(1)' }}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
          />
          {/* Dark gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,20,34,0.85) 0%, transparent 50%)', pointerEvents: 'none' }} />
          {pkg.badge && (
            <div style={{ position: 'absolute', top: '12px', left: '12px', background: pkg.badge === 'Limited Deal' ? '#FBBC05' : pkg.badge === 'Best Protection' ? 'rgba(0,200,255,0.15)' : C.blue, color: pkg.badge === 'Limited Deal' ? '#06080f' : pkg.badge === 'Best Protection' ? C.cyan : '#06080f', fontSize: '10px', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '4px 10px', border: pkg.badge === 'Best Protection' ? `1px solid ${C.borderB}` : 'none' }}>
              {pkg.badge}
            </div>
          )}
          {/* Price pinned to bottom of image */}
          <div style={{ position: 'absolute', bottom: '12px', right: '14px', textAlign: 'right' }}>
            {pkg.originalPrice && (
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through', lineHeight: 1, marginBottom: '2px' }}>{pkg.originalPrice}</div>
            )}
            <span style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: pkg.originalPrice ? '36px' : '32px', color: pkg.originalPrice ? '#FBBC05' : '#fff', lineHeight: 1 }}>{pkg.price}</span>
            {!pkg.originalPrice && <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginLeft: '4px' }}>starting</span>}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '22px 22px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '22px', textTransform: 'uppercase', letterSpacing: '0.04em', color: C.text, marginBottom: '8px' }}>{pkg.title}</h3>
          <p style={{ fontSize: '13px', color: C.dim, lineHeight: 1.7, fontWeight: 300, marginBottom: '16px', flex: 1 }}>{pkg.desc}</p>
          <p style={{ fontSize: '11px', color: C.dim2, fontStyle: 'italic', marginBottom: '18px' }}>Price varies by vehicle size</p>

          {/* CTA link */}
          <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: C.cyan, textDecoration: 'none', letterSpacing: '0.06em', marginBottom: '18px', transition: 'gap 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
            onMouseLeave={e => (e.currentTarget.style.gap = '6px')}
          >
            Price My Vehicle <span style={{ fontSize: '16px' }}>→</span>
          </a>

          {/* Expand toggle */}
          <button
            onClick={() => setOpen(!open)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 0', borderTop: `1px solid ${C.border}`, width: '100%', fontFamily: 'inherit', color: C.dim, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = C.cyan)}
            onMouseLeave={e => (e.currentTarget.style.color = C.dim)}
          >
            <span style={{ display: 'inline-block', transition: 'transform 0.25s', transform: open ? 'rotate(90deg)' : 'none', color: C.cyan, fontSize: '14px' }}>▶</span>
            {open ? "Hide what's included" : "See what's included"}
          </button>
        </div>

        {/* Checklist (expanded) */}
        {open && (
          <div style={{ padding: '0 22px 24px', borderTop: `1px solid ${C.border}` }}>
            {pkg.checklist.map((group, gi) => (
              <div key={gi} style={{ marginTop: '18px' }}>
                <p style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.blue, marginBottom: '10px' }}>{group.heading}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {group.items.map((item, ii) => (
                    <li key={ii} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', fontSize: '13px', color: C.dim, fontWeight: 300, lineHeight: 1.5 }}>
                      <span style={{ color: C.cyan, fontWeight: 700, fontSize: '11px', flexShrink: 0, marginTop: '2px' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  )
}

const FEATURES = [
  { icon: '🚗', title: 'Mobile Service', sub: 'We Come to You' },
  { icon: '🧪', title: 'Premium Products', sub: 'Long-Lasting Shine' },
  { icon: '🛡️', title: 'Paint Safe', sub: 'Detailing Process' },
  { icon: '⚡', title: 'Fast & Reliable', sub: 'Quality Every Time' },
]

const STEPS = [
  { n: '01', title: 'Choose Your Service', desc: 'Browse our full menu of detailing packages and add-ons. Not sure? Call us — we\'ll recommend the right option.' },
  { n: '02', title: 'Book Your Appointment', desc: 'Call, text, or fill out our contact form. We offer flexible scheduling around your schedule.' },
  { n: '03', title: 'We Come to You', desc: 'Our team arrives fully equipped at your home, office, or anywhere in Snohomish County.' },
]

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <section className="home-section" style={{ padding: '100px 0', background: C.dark2, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${C.border} 1px,transparent 1px),linear-gradient(90deg,${C.border} 1px,transparent 1px)`, backgroundSize: '60px 60px', opacity: 0.28, pointerEvents: 'none' }} />
      <div className="home-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '72px', alignItems: 'start' }} className="two-col">

          {/* Left — heading + CTA */}
          <Reveal>
            <div style={{ position: 'sticky', top: '96px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>Quick Answers</p>
              <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', textTransform: 'uppercase', lineHeight: 0.93, marginBottom: '20px' }}>
                Frequently<br />Asked<br /><Shimmer>Questions</Shimmer>
              </h2>
              <p style={{ fontSize: '14px', color: C.dim, lineHeight: 1.8, fontWeight: 300, marginBottom: '32px', maxWidth: '300px' }}>
                Quick answers to the questions we hear most. Don't see yours? Call us.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link to="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '12px 24px', background: C.blue, color: '#06080f', textDecoration: 'none', fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background 0.2s', width: 'fit-content' }}
                  onMouseEnter={e => (e.currentTarget.style.background = C.cyan)}
                  onMouseLeave={e => (e.currentTarget.style.background = C.blue)}
                >
                  All FAQs →
                </Link>
                <a href="tel:4252300876" style={{ fontSize: '13px', color: C.dim, textDecoration: 'none', letterSpacing: '0.04em' }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.cyan)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.dim)}
                >
                  📞 Or call (425) 230-0876
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — accordion */}
          <div>
            {FAQ_PREVIEW.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{ borderBottom: `1px solid ${C.border}` }}>
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left', fontFamily: 'inherit' }}
                  >
                    <span style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: 'clamp(15px,1.6vw,19px)', textTransform: 'uppercase', letterSpacing: '0.03em', color: openIdx === i ? C.cyan : C.text, transition: 'color 0.2s', lineHeight: 1.15 }}>
                      {item.question}
                    </span>
                    <span style={{ width: '26px', height: '26px', flexShrink: 0, border: `1px solid ${openIdx === i ? C.cyan : C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: openIdx === i ? C.cyan : C.dim, fontSize: '16px', transition: 'all 0.2s', transform: openIdx === i ? 'rotate(45deg)' : 'none' }}>+</span>
                  </button>
                  <div style={{ overflow: 'hidden', maxHeight: openIdx === i ? '300px' : '0', transition: 'max-height 0.35s ease' }}>
                    <p style={{ fontSize: '14px', color: C.dim, lineHeight: 1.8, fontWeight: 300, paddingBottom: '20px' }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.25}>
              <div style={{ paddingTop: '24px' }}>
                <Link to="/faq" style={{ fontSize: '13px', color: C.cyan, textDecoration: 'none', fontWeight: 600, letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  See all {19} questions →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function HomeBlogCard({ post }: { post: typeof BLOG_POSTS[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ background: C.surface, border: `1px solid ${hov ? C.borderB : C.border}`, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'border-color 0.2s' }}
      >
        <div style={{ height: '190px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
          <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.72)', transition: 'transform 0.5s, filter 0.4s', transform: hov ? 'scale(1.05)' : 'scale(1)' }} />
          <div style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '10px', background: 'rgba(6,8,15,0.75)', color: C.cyan, padding: '3px 8px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, backdropFilter: 'blur(4px)' }}>{post.category}</div>
        </div>
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontSize: '11px', color: C.dim, marginBottom: '8px' }}>{post.date} · {post.readTime}</div>
          <h3 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', lineHeight: 1.1, color: C.text, marginBottom: '10px', letterSpacing: '0.02em' }}>{post.title}</h3>
          <p style={{ fontSize: '13px', color: C.dim, lineHeight: 1.7, fontWeight: 300, flex: 1, marginBottom: '14px' }}>{post.excerpt}</p>
          <span style={{ fontSize: '12px', color: hov ? C.cyan : C.dim2, transition: 'color 0.2s', fontWeight: 600, letterSpacing: '0.06em' }}>Read Article →</span>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  const [activeReview, setActiveReview] = useState(0)
  const visibleService = SERVICES

  return (
    <div style={{ background: C.dark }}>
      <SEOMeta {...SEO.home} />
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1528597469186-bddab681a37f?w=1800&h=1100&fit=crop&auto=format" alt="Luxury car" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,8,15,1) 0%, rgba(6,8,15,0.82) 45%, rgba(6,8,15,0.25) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,8,15,0.8) 0%, transparent 40%)' }} />
          {/* Diagonal scan line */}
          <div style={{ position: 'absolute', top: 0, left: '44%', width: '1px', height: '100%', background: `linear-gradient(180deg, transparent, rgba(0,200,255,0.18), transparent)` }} />
        </div>

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '120px 28px 100px', width: '100%' }}>
          <p className="fade-up" style={{ fontSize: '11px', letterSpacing: '0.38em', textTransform: 'uppercase', color: C.cyan, marginBottom: '18px', fontWeight: 600 }}>
            Mobile Car Detailing · Everett, WA
          </p>
          <h1 className="fade-up-1" style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(56px,10vw,120px)', lineHeight: 0.9, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '28px' }}>
            A Deep Clean.<br />
            <span className="cyan-shimmer">A Showroom</span><br />
            Shine.
          </h1>
          <p className="fade-up-2" style={{ fontSize: '19px', fontWeight: 600, color: C.text, marginBottom: '8px' }}>Professional. Convenient. Luxurious Results.</p>
          <p className="fade-up-2" style={{ fontSize: '15px', color: C.dim, marginBottom: '40px', maxWidth: '440px', lineHeight: 1.7, fontWeight: 300 }}>
            We bring top-tier detailing to you in Everett and surrounding areas. No trips. No hassle.
          </p>
          <div className="fade-up-3" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <BtnPrimary href="/contact">📅 Book Now</BtnPrimary>
            <BtnOutline href="/services">View Services</BtnOutline>
          </div>

          {/* Feature strip */}
          <div className="fade-up-3 features-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: C.border, marginTop: '80px', maxWidth: '680px' }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{ background: 'rgba(6,8,15,0.88)', padding: '18px 14px', textAlign: 'center', backdropFilter: 'blur(8px)' }}>
                <div style={{ fontSize: '20px', marginBottom: '6px' }}>{f.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: C.text, letterSpacing: '0.04em', marginBottom: '2px' }}>{f.title}</div>
                <div style={{ fontSize: '10px', color: C.dim, letterSpacing: '0.04em' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────── */}
      <section style={{ background: C.dark2, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="home-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0' }} className="stats-row">
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: '44px 32px', textAlign: 'center', borderRight: i < 3 ? `1px solid ${C.border}` : 'none' }}>
                <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(44px,5vw,64px)', color: C.cyan, lineHeight: 1 }}>
                  <Counter target={s.num} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.dim, marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ────────────────────────────────────────────────────── */}
      <Marquee items={BRANDS} />

      {/* ── SERVICES PREVIEW ───────────────────────────────────────────── */}
      <section className="home-section" style={{ padding: '100px 0', background: C.dark }}>
        <div className="home-inner" className="home-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>What We Offer</p>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(36px,5vw,62px)', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-0.01em' }}>
                  Our <Shimmer>Services</Shimmer>
                </h2>
              </div>
              <BtnOutline href="/services">All Services →</BtnOutline>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="svc-home-grid">
            {SERVICES.map((svc, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <ServiceCard svc={svc} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.cyan, textDecoration: 'none', fontWeight: 600, borderBottom: `1px solid ${C.borderB}`, paddingBottom: '2px' }}>
                View All Services →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WARRANTY BANNER ────────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ background: `linear-gradient(105deg, ${C.blue} 0%, #0b5e90 50%, #003d60 100%)`, padding: '40px 28px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', flexWrap: 'wrap', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,rgba(0,0,0,0.07) 0,rgba(0,0,0,0.07) 1px,transparent 1px,transparent 4px)', pointerEvents: 'none' }} />
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0 }}>🛡️</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(22px,3vw,36px)', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#fff' }}>6-Month Mold-Free Warranty</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginTop: '4px', fontWeight: 300 }}>We don't just clean — we protect. Guaranteed.</div>
          </div>
          <BtnPrimary href="/contact">Book Your Detail</BtnPrimary>
        </div>
      </section>

      {/* ── PACKAGES ───────────────────────────────────────────────────── */}
      <section className="home-section" style={{ padding: '100px 0', background: C.dark2, position: 'relative', overflow: 'hidden' }}>
        {/* Subtle grid bg */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${C.border} 1px,transparent 1px),linear-gradient(90deg,${C.border} 1px,transparent 1px)`, backgroundSize: '60px 60px', opacity: 0.3, pointerEvents: 'none' }} />

        <div className="home-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px', position: 'relative' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>Packages & Pricing</p>
              <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(36px,5vw,64px)', textTransform: 'uppercase', lineHeight: 0.92, letterSpacing: '-0.01em', marginBottom: '16px' }}>
                Choose Your <Shimmer>Detail Package</Shimmer>
              </h2>
              <p style={{ fontSize: '15px', color: C.dim, maxWidth: '520px', margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>
                Every package is performed on-site at your location. Not sure which to pick? Call us — we'll recommend the right option for your vehicle.
              </p>
            </div>
          </Reveal>

          {/* 5-card grid: top row 3, bottom row 2 centered */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '14px' }} className="pkg-three">
            {PACKAGES.slice(0, 3).map((pkg, i) => (
              <PackageCard key={pkg.title} pkg={pkg} index={i} />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px', maxWidth: '820px', margin: '0 auto' }} className="pkg-two">
            {PACKAGES.slice(3).map((pkg, i) => (
              <PackageCard key={pkg.title} pkg={pkg} index={i + 3} />
            ))}
          </div>

          <Reveal>
            <p style={{ textAlign: 'center', fontSize: '13px', color: C.dim2, marginTop: '20px', fontStyle: 'italic' }}>
              All prices are starting rates — final quote depends on vehicle size and condition.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ADD-ON SERVICES ────────────────────────────────────────────── */}
      <section className="home-section" style={{ padding: '80px 0', background: C.dark, borderTop: `1px solid ${C.border}` }}>
        <div className="home-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '10px', fontWeight: 600 }}>Upgrade Your Detail</p>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,52px)', textTransform: 'uppercase', lineHeight: 0.95 }}>
                  Add-On <Shimmer>Services</Shimmer>
                </h2>
              </div>
              <p style={{ fontSize: '14px', color: C.dim, maxWidth: '320px', fontWeight: 300, lineHeight: 1.7 }}>
                Stack any add-on onto your package at the time of booking.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px', background: C.border }} className="addon-grid">
            {ADDONS.map((a, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div style={{ background: C.surface, padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '6px', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.04em', color: C.text, lineHeight: 1.2 }}>{a.name}</span>
                    <span style={{ fontSize: '14px', color: C.cyan, fontWeight: 700, flexShrink: 0 }}>{a.price}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: C.dim, fontWeight: 300, lineHeight: 1.6 }}>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <p style={{ fontSize: '14px', color: C.dim, fontWeight: 300 }}>Ready to book or have questions about add-ons?</p>
              <BtnPrimary href="tel:4252300876">📞 Call (425) 230-0876</BtnPrimary>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
      <section className="home-section" style={{ padding: '100px 0', background: C.dark2, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${C.border} 1px,transparent 1px),linear-gradient(90deg,${C.border} 1px,transparent 1px)`, backgroundSize: '60px 60px', opacity: 0.35 }} />
        <div className="home-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px', position: 'relative' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>The Process</p>
              <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(36px,5vw,62px)', textTransform: 'uppercase', lineHeight: 0.95 }}>
                How It <Shimmer>Works</Shimmer>
              </h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px', background: C.border }} className="three-col">
            {STEPS.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: C.surface, padding: '48px 36px', position: 'relative' }}>
                  <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '72px', color: 'rgba(42,143,196,0.12)', lineHeight: 1, position: 'absolute', top: '24px', right: '28px', letterSpacing: '-0.02em' }}>{s.n}</div>
                  <div style={{ width: '36px', height: '2px', background: C.cyan, marginBottom: '24px' }} />
                  <h3 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', color: C.text, marginBottom: '14px', letterSpacing: '0.04em' }}>{s.title}</h3>
                  <p style={{ fontSize: '14px', color: C.dim, lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────── */}
      <section className="home-section" style={{ padding: '100px 0', background: C.dark }}>
        <div className="home-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '52px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>What Clients Say</p>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(36px,5vw,62px)', textTransform: 'uppercase', lineHeight: 0.95 }}>
                  Real <Shimmer>Reviews</Shimmer>
                </h2>
              </div>
              <BtnOutline href="/reviews">All Reviews →</BtnOutline>
            </div>
          </Reveal>

          {/* Carousel */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px', background: C.border }} className="three-col">
              {TESTIMONIALS.slice(activeReview, activeReview + 3).map((t, i) => (
                <Reveal key={`${activeReview}-${i}`} delay={i * 0.06}>
                  <TestimonialCard t={t} highlight={i === 1} />
                </Reveal>
              ))}
            </div>
            {/* Pagination dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px' }}>
              {[0, 3].map(idx => (
                <button key={idx} onClick={() => setActiveReview(idx)}
                  style={{ width: idx === activeReview ? '28px' : '8px', height: '8px', borderRadius: '4px', background: idx === activeReview ? C.cyan : C.border, border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────────────────────────── */}
      <section className="home-section" style={{ padding: '100px 0', background: C.dark2, borderTop: `1px solid ${C.border}` }}>
        <div className="home-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>The People Behind the Polish</p>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(36px,5vw,62px)', textTransform: 'uppercase', lineHeight: 0.95 }}>
                  Meet the <Shimmer>Team</Shimmer>
                </h2>
              </div>
              <BtnOutline href="/about">About Us →</BtnOutline>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px', background: C.border }} className="three-col">
            {TEAM.map((member, i) => {
              const photos = [
                'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=600&h=700&fit=crop&auto=format&face',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&auto=format&face',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop&auto=format&face',
              ]
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div style={{ background: C.surface, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ height: '320px', overflow: 'hidden', position: 'relative' }}>
                      <img src={photos[i]} alt={member.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'brightness(0.6) saturate(0.85)', transition: 'transform 0.5s' }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,20,34,1) 0%, rgba(14,20,34,0.3) 55%, transparent 100%)' }} />
                      <div style={{ position: 'absolute', bottom: '20px', left: '24px' }}>
                        <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '32px', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.03em', lineHeight: 1 }}>{member.name}</div>
                        <div style={{ fontSize: '11px', color: C.cyan, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, marginTop: '5px' }}>{member.role}</div>
                      </div>
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${C.cyan}, ${C.blue}, transparent)` }} />
                    </div>
                    <div style={{ padding: '22px 24px 28px' }}>
                      <p style={{ fontSize: '14px', color: C.dim, lineHeight: 1.8, fontWeight: 300 }}>{member.bio}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ─────────────────────────────────────────────── */}
      <section className="home-section" style={{ padding: '100px 0', background: C.dark }}>
        <div className="home-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '8px', fontWeight: 600 }}>The Proof</p>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,48px)', textTransform: 'uppercase' }}>
                  Before &amp; <Shimmer>After</Shimmer>
                </h2>
              </div>
              <BtnOutline href="/gallery">Full Gallery →</BtnOutline>
            </div>
          </Reveal>
          <p style={{ fontSize: '13px', color: C.dim, marginBottom: '28px', fontWeight: 300 }}>Drag the handle to reveal the transformation ←→</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }} className="ba-grid">
            {[
              { before: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=360&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1528597469186-bddab681a37f?w=600&h=360&fit=crop&auto=format' },
              { before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=360&fit=crop&auto=format', after: interiorDetailImg },
              { before: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=360&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1622329821376-a19fd6002562?w=600&h=360&fit=crop&auto=format' },
              { before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=360&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1708805282706-f44730b7e527?w=600&h=360&fit=crop&auto=format' },
              { before: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=360&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=360&fit=crop&auto=format' },
              { before: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=600&h=360&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1708805283017-c662be2c7a44?w=600&h=360&fit=crop&auto=format' },
              { before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=360&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1620584898989-d39f7f9ed1b7?w=600&h=360&fit=crop&auto=format' },
              { before: 'https://images.unsplash.com/photo-1558981001-5864b3250a69?w=600&h=360&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=360&fit=crop&auto=format' },
            ].map((pair, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <BeforeAfter before={pair.before} after={pair.after} height={220} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ───────────────────────────────────────────────────── */}
      <section style={{ background: C.dark2, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="home-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '0' }} className="two-col">
            {/* Info panel */}
            <div style={{ padding: '56px 40px 56px 0', borderRight: `1px solid ${C.border}` }}>
              <Reveal>
                <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>Find Us</p>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(28px,3.5vw,46px)', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '28px' }}>
                  Based in <Shimmer>Everett, WA</Shimmer>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                  {[
                    { icon: '📍', label: 'Address', val: '11615 25th Ave SE\nEverett, WA 98208', href: 'https://maps.google.com/?q=11615+25th+Ave+SE,+Everett,+WA+98208' },
                    { icon: '📞', label: 'Phone', val: '(425) 230-0876', href: 'tel:4252300876' },
                    { icon: '✉️', label: 'Email', val: 'everettluxdetailing@gmail.com', href: 'mailto:everettluxdetailing@gmail.com' },
                    { icon: '🕐', label: 'Hours', val: 'Mon – Sat  |  8am – 7pm', href: undefined },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cyan, fontWeight: 600, marginBottom: '3px' }}>{item.label}</div>
                        {item.href
                          ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ fontSize: '14px', color: C.dim, textDecoration: 'none', whiteSpace: 'pre-line', lineHeight: 1.6 }}
                              onMouseEnter={e => (e.currentTarget.style.color = C.text)}
                              onMouseLeave={e => (e.currentTarget.style.color = C.dim)}
                            >{item.val}</a>
                          : <span style={{ fontSize: '14px', color: C.dim, whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item.val}</span>
                        }
                      </div>
                    </div>
                  ))}
                </div>
                <BtnPrimary href="https://maps.google.com/?q=11615+25th+Ave+SE,+Everett,+WA+98208">
                  📍 Get Directions
                </BtnPrimary>
              </Reveal>
            </div>
            {/* Embedded map */}
            <div style={{ minHeight: '380px', background: C.panel, position: 'relative', overflow: 'hidden' }}>
              <iframe
                title="Everett Lux Detailing Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.1!2d-122.1699!3d47.9212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490193c56a74c57%3A0x1!2s11615+25th+Ave+SE%2C+Everett%2C+WA+98208!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 'none', display: 'block', minHeight: '380px', filter: 'grayscale(0.4) invert(0.9) hue-rotate(180deg) brightness(0.85) contrast(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ────────────────────────────────────────────────── */}
      <FaqSection />

      {/* ── BLOG PREVIEW ───────────────────────────────────────────────── */}
      <section className="home-section" style={{ padding: '100px 0', background: C.dark }}>
        <div className="home-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '52px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '10px', fontWeight: 600 }}>Detailing Knowledge</p>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4vw,58px)', textTransform: 'uppercase', lineHeight: 0.95 }}>
                  From the <Shimmer>Blog</Shimmer>
                </h2>
              </div>
              <BtnOutline href="/blog">All Articles →</BtnOutline>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }} className="three-col">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <HomeBlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ svc }: { svc: typeof SERVICES[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.surface,
        border: `1px solid ${hov ? C.borderB : C.border}`,
        boxShadow: hov ? '0 12px 40px rgba(0,200,255,0.10)' : '0 2px 12px rgba(0,0,0,0.25)',
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'box-shadow 0.25s, transform 0.25s, border-color 0.25s',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <div style={{ height: '210px', overflow: 'hidden' }}>
          <img src={svc.img} alt={svc.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', transform: hov ? 'scale(1.06)' : 'scale(1)' }}
          />
        </div>
        <div style={{
          position: 'absolute', bottom: '-24px', left: '20px',
          width: '52px', height: '52px', background: C.blue,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '24px', boxShadow: '0 4px 16px rgba(0,200,255,0.3)', zIndex: 2,
        }}>
          {svc.icon}
        </div>
        {svc.featured && (
          <div style={{ position: 'absolute', top: '12px', right: '12px', background: C.blue, color: '#06080f', fontSize: '9px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 10px' }}>
            Best Value
          </div>
        )}
      </div>
      <div style={{ padding: '40px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
          <h3 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '22px', textTransform: 'uppercase', letterSpacing: '0.03em', color: C.text, lineHeight: 1.1 }}>
            {svc.title}
          </h3>
          <span style={{ fontSize: '13px', color: C.cyan, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0 }}>{svc.price}</span>
        </div>
        <p style={{ fontSize: '13.5px', color: C.dim, lineHeight: 1.7, flex: 1, marginBottom: '20px' }}>{svc.tagline}</p>
        <Link to={`/services#${svc.slug}`}
          style={{
            display: 'block', textAlign: 'center', padding: '13px',
            background: hov ? C.cyan : C.blue, color: '#06080f',
            textDecoration: 'none', fontSize: '11px', fontWeight: 800,
            letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'background 0.2s',
          }}
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

