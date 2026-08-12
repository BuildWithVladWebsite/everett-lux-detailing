import { useState } from 'react'
import { C, SERVICES } from '../data'
import { Reveal, BtnPrimary, BtnOutline, PageHero, Shimmer } from '../components/Shared'
import SEOMeta from '../components/SEOMeta'
import SEO from '../seo-config'

const DISCOUNTS: Record<string, string> = { 'full-service': '$300' }

const ADDONS = [
  { name: 'Engine Bay Cleaning', price: '+$50' },
  { name: 'Odor Bomb Treatment', price: '+$30' },
  { name: 'Pet Hair Removal', price: '+$40' },
  { name: 'Tar & Adhesive Removal', price: '+$35' },
  { name: 'Water Spot Treatment', price: '+$45' },
  { name: 'Scratch Touch-Up', price: 'Quote' },
  { name: 'Rain-X Glass Treatment', price: '+$25' },
  { name: 'Ozone Odor Elimination', price: '+$60' },
]

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div style={{ background: C.dark }}>
      <SEOMeta {...SEO.services} />
      <PageHero
        eyebrow="Professional Mobile Detailing"
        title="Our"
        accent="Services"
        sub="Premium detailing delivered to your door. From a quick interior refresh to a full paint correction — we do it all."
        img="https://images.unsplash.com/photo-1622329821376-a19fd6002562?w=1600&h=700&fit=crop&auto=format"
      />

      {/* Services list */}
      <section style={{ padding: '80px 0', background: C.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.slug} delay={0.04}>
              <div id={svc.slug} style={{ marginBottom: '2px' }}>
                {/* Accordion header */}
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  style={{ width: '100%', background: openIdx === i ? C.surface : C.dark2, border: `1px solid ${openIdx === i ? C.borderB : C.border}`, padding: '20px 18px', display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer', textAlign: 'left', transition: 'background 0.2s', fontFamily: 'inherit' }}
                >
                  <span style={{ fontSize: '28px', flexShrink: 0 }}>{svc.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', letterSpacing: '0.04em', color: C.text }}>{svc.title}</span>
                      {svc.featured && <span style={{ fontSize: '10px', background: C.blue, color: '#06080f', padding: '3px 8px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Best Value</span>}
                      {svc.warranty && <span style={{ fontSize: '10px', background: 'rgba(0,200,255,0.12)', color: C.cyan, padding: '3px 8px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', border: `1px solid ${C.borderB}` }}>6-Mo Warranty</span>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '13px', color: C.dim }}>{svc.tagline}</span>
                      <span style={{ fontSize: '14px', color: DISCOUNTS[svc.slug] ? '#FBBC05' : C.cyan, fontWeight: 700, whiteSpace: 'nowrap' }}>
                        {DISCOUNTS[svc.slug] && <span style={{ fontSize: '11px', color: C.dim, textDecoration: 'line-through', marginRight: '5px' }}>{DISCOUNTS[svc.slug]}</span>}
                        {svc.price}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '18px', color: C.dim, transition: 'transform 0.2s', transform: openIdx === i ? 'rotate(180deg)' : 'none', display: 'block', flexShrink: 0 }}>⌄</span>
                </button>

                {/* Expanded content */}
                {openIdx === i && (
                  <div style={{ background: C.surface, border: `1px solid ${C.borderB}`, borderTop: 'none', overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '0' }} className="two-col">
                      {/* Photo */}
                      <div style={{ position: 'relative', minHeight: '320px', background: C.panel, overflow: 'hidden' }}>
                        <img src={svc.heroImg} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, filter: 'brightness(0.8)' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(14,20,34,0.3), transparent)' }} />
                        <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                          <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cyan, marginBottom: '4px' }}>Duration</div>
                          <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '20px', color: C.text }}>{svc.duration}</div>
                        </div>
                      </div>

                      {/* Details */}
                      <div style={{ padding: '36px 36px 36px' }}>
                        <p style={{ fontSize: '15px', color: C.dim, lineHeight: 1.8, marginBottom: '28px', fontWeight: 300 }}>{svc.desc}</p>
                        <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cyan, marginBottom: '14px', fontWeight: 600 }}>What's Included</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                          {svc.includes.map((item, j) => (
                            <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: C.dim, fontWeight: 300, lineHeight: 1.5 }}>
                              <span style={{ color: C.cyan, fontWeight: 700, fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div style={{ fontSize: '12px', color: C.dim2, marginBottom: '24px', letterSpacing: '0.04em' }}>
                          <span style={{ color: C.dim }}>Vehicles:</span> {svc.vehicles}
                        </div>
                        <BtnPrimary href="/contact">Book This Service →</BtnPrimary>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section style={{ padding: '80px 0', background: C.dark2, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>Enhance Your Detail</p>
              <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4vw,54px)', textTransform: 'uppercase' }}>
                Available <Shimmer>Add-Ons</Shimmer>
              </h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', border: `1px solid ${C.border}` }} className="four-col">
            {ADDONS.map((a, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div style={{ background: C.surface, padding: '24px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', borderRight: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: '14px', color: C.dim, fontWeight: 400 }}>{a.name}</span>
                  <span style={{ fontSize: '14px', color: C.cyan, fontWeight: 700, flexShrink: 0 }}>{a.price}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ textAlign: 'center', fontSize: '13px', color: C.dim2, marginTop: '20px' }}>
              Add-ons can be requested when booking. Pricing may vary by vehicle size.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 28px', background: C.dark, textAlign: 'center' }}>
        <Reveal>
          <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '14px', fontWeight: 600 }}>Not Sure What You Need?</p>
          <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Get a <Shimmer>Free Quote</Shimmer>
          </h2>
          <p style={{ fontSize: '15px', color: C.dim, maxWidth: '480px', margin: '0 auto 36px', fontWeight: 300, lineHeight: 1.7 }}>
            Call or text us and we'll recommend the right package for your vehicle and budget.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BtnPrimary href="tel:4252300876">📞 (425) 230-0876</BtnPrimary>
            <BtnOutline href="/contact">Send a Message</BtnOutline>
          </div>
        </Reveal>
      </section>

      <style>{`@media(max-width:900px){.four-col{grid-template-columns:1fr 1fr!important}}`}</style>
    </div>
  )
}
