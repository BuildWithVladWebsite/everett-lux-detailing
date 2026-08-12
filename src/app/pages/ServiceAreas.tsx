import { useState } from 'react'
import { Link } from 'react-router'
import { C, SERVICE_AREAS, SERVICES } from '../data'
import { Reveal, BtnPrimary, PageHero, Shimmer } from '../components/Shared'
import SEOMeta from '../components/SEOMeta'
import SEO from '../seo-config'

export default function ServiceAreas() {
  const [hov, setHov] = useState<number | null>(null)

  return (
    <div style={{ background: C.dark }}>
      <SEOMeta {...SEO.serviceAreas} />
      <PageHero
        eyebrow="Where We Serve"
        title="We Come"
        accent="To You"
        sub="Fully mobile across Snohomish County and the greater Seattle metro. We bring the detail shop to your door."
        img="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=700&fit=crop&auto=format"
      />

      {/* Coverage banner */}
      <section style={{ background: C.dark2, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', borderLeft: `1px solid ${C.border}` }} className="coverage-strip">
          {[
            { icon: '📍', label: 'Home Base', value: 'Everett, WA' },
            { icon: '🚗', label: 'Coverage Radius', value: '50+ Miles' },
            { icon: '🗺️', label: 'Service Area', value: 'Snohomish + Seattle' },
            { icon: '📞', label: 'Questions?', value: '(425) 230-0876' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '24px 20px', borderRight: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', background: 'rgba(0,200,255,0.08)', border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.cyan, fontWeight: 600, marginBottom: '3px' }}>{item.label}</div>
                <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '16px', color: C.text, lineHeight: 1.2 }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* City grid */}
      <section style={{ padding: '80px 0 100px', background: C.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>Coverage Area</p>
              <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', textTransform: 'uppercase' }}>
                Cities We <Shimmer>Serve</Shimmer>
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SERVICE_AREAS.map((a, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <div
                  onMouseEnter={() => setHov(i)}
                  onMouseLeave={() => setHov(null)}
                  style={{ background: C.panel, border: `1px solid ${hov === i ? C.borderB : C.border}`, transition: 'border-color 0.2s', overflow: 'hidden' }}
                >
                  <div className="area-row" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '0' }}>
                    {/* Photo + name */}
                    <div style={{ position: 'relative', minHeight: '120px', overflow: 'hidden', flexShrink: 0 }}>
                      <img src={a.img} alt={a.city} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, transition: 'transform 0.5s, filter 0.4s', transform: hov === i ? 'scale(1.06)' : 'scale(1)', filter: 'brightness(0.45)' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(14,20,34,0.6))' }} />
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px 20px' }}>
                        {(a.city === 'Everett' || a.city === 'Marysville') && (
                          <div style={{ fontSize: '9px', background: C.blue, color: '#06080f', padding: '2px 7px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', display: 'inline-block', alignSelf: 'flex-start' }}>
                            {a.city === 'Everett' ? 'Home Base' : 'Location'}
                          </div>
                        )}
                        <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '22px', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>{a.city}</div>
                        <div style={{ fontSize: '11px', color: C.cyan, marginTop: '4px', letterSpacing: '0.08em' }}>{a.note}</div>
                      </div>
                    </div>

                    {/* Service links */}
                    <div style={{ padding: '16px 20px', display: 'flex', flexWrap: 'wrap', gap: '7px', alignContent: 'center' }}>
                      {SERVICES.map(s => (
                        <Link key={s.slug} to={`/${a.slug}/${s.slug}`}
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 12px', fontSize: '11.5px', fontWeight: 500, color: C.dim, textDecoration: 'none', border: `1px solid ${C.border}`, background: C.surface, transition: 'all 0.18s', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.cyan; (e.currentTarget as HTMLElement).style.color = C.cyan; (e.currentTarget as HTMLElement).style.background = 'rgba(0,200,255,0.06)' }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = C.border; (e.currentTarget as HTMLElement).style.color = C.dim; (e.currentTarget as HTMLElement).style.background = C.surface }}
                        >
                          <span style={{ fontSize: '13px' }}>{s.icon}</span>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ marginTop: '40px', background: C.surface, border: `1px solid ${C.border}`, padding: '28px 24px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ flex: 1, minWidth: '220px' }}>
                <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', color: C.text }}>❓ Don't See Your City?</div>
                <p style={{ fontSize: '13px', color: C.dim, marginTop: '4px', fontWeight: 300 }}>We regularly expand our coverage. Give us a call — if we can get there, we'll make it happen.</p>
              </div>
              <BtnPrimary href="tel:4252300876">📞 Call Us</BtnPrimary>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How mobile works */}
      <section style={{ padding: '80px 0', background: C.dark2, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="two-col">
            <Reveal>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '14px', fontWeight: 600 }}>How Mobile Works</p>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,48px)', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '28px' }}>
                  No Drop-Off.<br /><Shimmer>No Waiting.</Shimmer>
                </h2>
                {[
                  { icon: '🏠', text: 'We come to your home, office, or any convenient location.' },
                  { icon: '🧰', text: 'We bring our own water, power, and all professional equipment.' },
                  { icon: '⏱️', text: 'You go about your day while we handle everything.' },
                  { icon: '✅', text: 'We only leave when the job is done to our standard.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ fontSize: '15px', color: C.dim, fontWeight: 300, lineHeight: 1.7 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ position: 'relative', height: '400px', background: C.panel, overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?w=800&h=600&fit=crop&auto=format" alt="Mobile detailing van at customer location" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,8,15,0.4) 0%, transparent 60%)' }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:700px){
          .area-row { grid-template-columns: 1fr !important; }
          .area-row > div:first-child { min-height: 90px !important; }
        }
      `}</style>
    </div>
  )
}
