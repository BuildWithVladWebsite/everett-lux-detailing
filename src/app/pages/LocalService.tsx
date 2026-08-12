import { useParams, Link, Navigate } from 'react-router'
import { useState } from 'react'
import { C, SERVICES, TESTIMONIALS, SERVICE_AREAS } from '../data'
import { getSeoService } from '../seo-data'
import { Reveal, BtnPrimary, BtnOutline, Shimmer } from '../components/Shared'
import SEOMeta from '../components/SEOMeta'

function Stars({ n }: { n: number }) {
  return (
    <span style={{ display: 'flex', gap: '2px' }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= n ? '#FBBC05' : C.dim2}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </span>
  )
}

function AccordionFaq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', padding: '20px 0', textAlign: 'left', fontFamily: 'inherit' }}
      >
        <span style={{ fontSize: '16px', fontWeight: 600, color: open ? C.cyan : C.text, lineHeight: 1.5, flex: 1, transition: 'color 0.2s' }}>{q}</span>
        <span style={{ fontSize: '20px', color: C.cyan, flexShrink: 0, marginTop: '2px', transition: 'transform 0.2s', display: 'inline-block', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div style={{ maxHeight: open ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
        <p style={{ fontSize: '15px', color: C.dim, lineHeight: 1.8, fontWeight: 300, paddingBottom: '20px' }}>{a}</p>
      </div>
    </div>
  )
}

function buildFaqs(seoFaqs: { q: string; a: string }[], city: string) {
  return seoFaqs.map(faq => ({
    q: faq.q.replace(/Everett,?\s?WA/g, `${city}, WA`).replace(/Everett/g, city),
    a: faq.a.replace(/Everett,?\s?WA/g, `${city}, WA`).replace(/Everett/g, city),
  }))
}

export default function LocalService() {
  const { citySlug, serviceSlug } = useParams<{ citySlug: string; serviceSlug: string }>()

  const area = SERVICE_AREAS.find(a => a.slug === citySlug)
  const service = SERVICES.find(s => s.slug === serviceSlug)
  const seoBase = getSeoService(serviceSlug ?? '')

  if (!area || !service || !seoBase) return <Navigate to="/services" replace />

  const city = area.city
  const isMold = serviceSlug === 'mold-remediation'
  const faqs = buildFaqs(seoBase.faqs, city)

  const otherServices = SERVICES.filter(s => s.slug !== serviceSlug).slice(0, 4)
  const reviews = TESTIMONIALS.slice(0, 3)

  const nearbyAreas = SERVICE_AREAS.filter(a => a.slug !== citySlug).slice(0, 6).map(a => a.city)

  const metaTitle = seoBase.metaTitle.replace(/Everett,?\s?WA/g, `${city}, WA`).replace(/Everett/g, city)
  const metaDesc = seoBase.metaDesc.replace(/Everett,?\s?WA/g, `${city}, WA`).replace(/Everett/g, city)

  return (
    <div style={{ background: C.dark }}>
      <SEOMeta
        title={metaTitle}
        description={metaDesc}
        canonical={`/${citySlug}/${serviceSlug}`}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '480px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', paddingTop: '72px' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={seoBase.heroImg} alt={`${service.title} in ${city}, WA`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,8,15,1) 0%, rgba(6,8,15,0.35) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,8,15,0.75) 0%, transparent 60%)' }} />
        </div>
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '80px 28px 64px', width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <Link to="/" style={{ fontSize: '12px', color: C.dim, textDecoration: 'none' }}>Home</Link>
            <span style={{ color: C.dim2 }}>›</span>
            <Link to="/service-areas" style={{ fontSize: '12px', color: C.dim, textDecoration: 'none' }}>{city}, WA</Link>
            <span style={{ color: C.dim2 }}>›</span>
            <span style={{ fontSize: '12px', color: C.cyan }}>{service.title}</span>
          </div>
          <p className="fade-up" style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '14px', fontWeight: 600 }}>{city}, WA · Snohomish County</p>
          <h1 className="fade-up-1" style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(38px,6vw,78px)', textTransform: 'uppercase', lineHeight: 0.92, letterSpacing: '-0.01em', maxWidth: '800px' }}>
            {service.title}<br /><span className="cyan-shimmer">in {city}, WA</span>
          </h1>
          <div className="fade-up-2" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '24px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '20px', fontWeight: 700, color: C.cyan, fontFamily: "'Barlow Condensed',system-ui,sans-serif" }}>{service.price}</span>
            <span style={{ width: '1px', height: '20px', background: C.border }} />
            <span style={{ fontSize: '13px', color: C.dim }}>⏱ {service.duration}</span>
            <span style={{ width: '1px', height: '20px', background: C.border }} />
            <span style={{ fontSize: '13px', color: C.dim }}>📍 Mobile — We Come to You</span>
          </div>
          <div className="fade-up-3" style={{ display: 'flex', gap: '14px', marginTop: '32px', flexWrap: 'wrap' }}>
            <BtnPrimary href="/contact">📅 Book in {city}</BtnPrimary>
            <BtnOutline href="tel:4252300876">📞 (425) 230-0876</BtnOutline>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${C.cyan}, ${C.blue}, transparent)` }} />
      </section>

      {/* ── Trust bar ────────────────────────────────────────────────── */}
      <div style={{ background: C.dark2, borderBottom: `1px solid ${C.border}`, padding: '18px 28px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          {[
            { icon: '⭐', text: '5.0 Google Rating' },
            { icon: '✅', text: '100% Mobile Service' },
            ...(isMold ? [{ icon: '🛡️', text: '6-Month Mold-Free Warranty' }] : []),
            { icon: '📍', text: `${city}, WA Based` },
            { icon: '💬', text: 'Free Quotes' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: C.dim }}>
              <span>{item.icon}</span> {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'start' }} className="two-col">

            {/* Left: body copy */}
            <div>
              <Reveal>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(26px,3.5vw,44px)', textTransform: 'uppercase', marginBottom: '20px' }}>
                  About This <Shimmer>Service</Shimmer>
                </h2>
                <p style={{ fontSize: '16px', color: C.dim, lineHeight: 1.85, fontWeight: 300, marginBottom: '28px' }}>
                  {seoBase.intro.replace(/Everett,?\s?WA/g, `${city}, WA`).replace(/Everett/g, city)}
                </p>
                <p style={{ fontSize: '15px', color: C.dim, lineHeight: 1.8, fontWeight: 300 }}>{service.desc}</p>
              </Reveal>

              {/* What's Included */}
              <Reveal>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(22px,3vw,38px)', textTransform: 'uppercase', margin: '56px 0 20px' }}>
                  What's <Shimmer>Included</Shimmer>
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }} className="two-col">
                  {service.includes.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '14px 16px', background: C.surface, border: `1px solid ${C.border}` }}>
                      <span style={{ color: C.cyan, fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>✓</span>
                      <span style={{ fontSize: '13px', color: C.dim, lineHeight: 1.5, fontWeight: 300 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Why local */}
              <Reveal>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(22px,3vw,38px)', textTransform: 'uppercase', margin: '56px 0 20px' }}>
                  Why {city} Drivers <Shimmer>Choose Us</Shimmer>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {seoBase.whyLocal.map((reason, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(42,143,196,0.15)', border: `1px solid ${C.blue}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                        <span style={{ fontSize: '11px', color: C.cyan, fontWeight: 700 }}>✓</span>
                      </div>
                      <p style={{ fontSize: '14px', color: C.dim, lineHeight: 1.7, fontWeight: 300 }}>
                        {reason.replace(/Everett,?\s?WA/g, `${city}, WA`).replace(/Everett/g, city)}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: sticky booking card */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <Reveal>
                <div style={{ background: C.surface, border: `1px solid ${C.borderB}`, padding: '32px 28px' }}>
                  <div style={{ height: '2px', background: `linear-gradient(90deg, ${C.blue}, ${C.cyan})`, margin: '-32px -28px 28px' }} />
                  <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cyan, marginBottom: '8px', fontWeight: 600 }}>Book in {city}, WA</p>
                  <h3 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '28px', textTransform: 'uppercase', marginBottom: '6px' }}>{service.title}</h3>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: C.cyan, fontFamily: "'Barlow Condensed',system-ui,sans-serif", marginBottom: '20px' }}>{service.price}</div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                    {[
                      { icon: '⏱', val: service.duration, label: 'Estimated Time' },
                      { icon: '🚗', val: service.vehicles, label: 'Vehicles' },
                      { icon: '📍', val: `${city} & Snohomish County`, label: 'Service Area' },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '12px 14px', background: C.panel, borderLeft: `2px solid ${C.blue}` }}>
                        <span style={{ fontSize: '16px' }}>{row.icon}</span>
                        <div>
                          <div style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.cyan, fontWeight: 600, marginBottom: '2px' }}>{row.label}</div>
                          <div style={{ fontSize: '13px', color: C.dim }}>{row.val}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <BtnPrimary href="/contact">📅 Book Your Detail</BtnPrimary>
                  <a href="tel:4252300876"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '12px', padding: '12px', border: `1px solid ${C.border}`, color: C.text, textDecoration: 'none', fontSize: '13px', fontWeight: 600, transition: 'border-color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = C.cyan)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                  >📞 Call (425) 230-0876</a>

                  <div style={{ marginTop: '20px', padding: '16px', background: C.panel, textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: C.dim, marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Our Locations</div>
                    <div style={{ fontSize: '12px', color: C.dim, lineHeight: 1.7 }}>
                      📍 11615 25th Ave SE, Everett WA<br />
                      📍 5158 82nd Pl NE, Marysville WA
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: C.dark2, borderTop: `1px solid ${C.border}`, marginTop: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(26px,3.5vw,44px)', textTransform: 'uppercase', marginBottom: '40px' }}>
              What Our Clients <Shimmer>Say</Shimmer>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }} className="three-col">
            {reviews.map((t, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div style={{ background: C.surface, border: `1px solid ${C.border}`, padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: t.avatarColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, color: '#fff', flexShrink: 0 }}>{t.initials}</div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: C.text }}>{t.name}</div>
                      <div style={{ fontSize: '11px', color: C.dim }}>{t.timeAgo}</div>
                    </div>
                  </div>
                  <Stars n={t.stars} />
                  <p style={{ fontSize: '14px', color: C.dim, lineHeight: 1.75, fontWeight: 300, margin: '12px 0 0', flex: 1 }}>"{t.text}"</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ marginTop: '28px', textAlign: 'center' }}>
              <Link to="/reviews" style={{ fontSize: '13px', color: C.cyan, textDecoration: 'none', letterSpacing: '0.08em' }}>View All Reviews →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: C.dark, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,52px)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Frequently Asked <Shimmer>Questions</Shimmer>
            </h2>
            <p style={{ fontSize: '15px', color: C.dim, marginBottom: '40px', fontWeight: 300 }}>
              Common questions about {service.title.toLowerCase()} in {city}, WA.
            </p>
          </Reveal>
          {faqs.map((faq, i) => (
            <AccordionFaq key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* ── Nearby areas ─────────────────────────────────────────────── */}
      <section style={{ padding: '60px 0', background: C.dark2, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>Also Serving</p>
            <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(22px,3vw,38px)', textTransform: 'uppercase', marginBottom: '24px' }}>
              {service.title} Near {city}, WA
            </h2>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {nearbyAreas.map((near, i) => {
                const nearArea = SERVICE_AREAS.find(a => a.city === near)
                return (
                  <Link key={i}
                    to={nearArea ? `/${nearArea.slug}/${serviceSlug}` : '/service-areas'}
                    style={{ padding: '8px 18px', border: `1px solid ${C.border}`, fontSize: '13px', color: C.dim, textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.cyan; (e.currentTarget as HTMLElement).style.color = C.cyan }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = C.border; (e.currentTarget as HTMLElement).style.color = C.dim }}
                  >{near}, WA</Link>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Other services ───────────────────────────────────────────── */}
      <section style={{ padding: '80px 0 100px', background: C.dark, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(26px,3.5vw,44px)', textTransform: 'uppercase', marginBottom: '36px' }}>
              More Services in <Shimmer>{city}</Shimmer>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px', background: C.border }} className="pkg-three">
            {otherServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link to={`/${citySlug}/${s.slug}`}
                  style={{ textDecoration: 'none', display: 'block', background: C.surface, padding: '24px 20px', transition: 'background 0.2s', height: '100%' }}
                  onMouseEnter={e => (e.currentTarget.style.background = C.panel)}
                  onMouseLeave={e => (e.currentTarget.style.background = C.surface)}
                >
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '17px', textTransform: 'uppercase', color: C.text, marginBottom: '6px' }}>{s.title}</div>
                  <div style={{ fontSize: '12px', color: C.cyan, fontWeight: 600 }}>{s.price}</div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <BtnPrimary href="/contact">📅 Book Now</BtnPrimary>
              <BtnOutline href="/services">All Services</BtnOutline>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
