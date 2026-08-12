import { C, TEAM, STATS } from '../data'
import { Reveal, BtnPrimary, BtnOutline, PageHero, Counter, Shimmer } from '../components/Shared'
import SEOMeta from '../components/SEOMeta'
import SEO from '../seo-config'

const VALUES = [
  { icon: '🎯', title: 'Precision', desc: 'Every detail matters. We inspect our work at every stage and only leave when the result is perfect.' },
  { icon: '🤝', title: 'Integrity', desc: 'Honest pricing. No upsells. We quote what the job actually costs and we stand behind our work.' },
  { icon: '🚗', title: 'Convenience', desc: 'Your time is valuable. We come to you — no drop-offs, no waiting rooms, no wasted afternoons.' },
  { icon: '🏆', title: 'Excellence', desc: 'Professional-grade products and techniques on every vehicle, every time — no shortcuts.' },
]

export default function About() {
  return (
    <div style={{ background: C.dark }}>
      <SEOMeta {...SEO.about} />
      <PageHero
        eyebrow="Our Story"
        title="Locally Owned."
        accent="Detail Obsessed."
        sub="Born in Everett, WA — built on a passion for clean cars and a commitment to showing up for every customer."
        img="https://images.unsplash.com/photo-1708805282695-ef186db20192?w=1600&h=700&fit=crop&auto=format"
      />

      {/* Story section */}
      <section style={{ padding: '100px 0', background: C.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="two-col">
            <Reveal>
              <div style={{ position: 'relative' }}>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: C.panel }}>
                  <img src="https://images.unsplash.com/photo-1622329821376-a19fd6002562?w=800&h=1000&fit=crop&auto=format" alt="Everett Lux team at work" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }} />
                </div>
                <div style={{ position: 'absolute', top: '-14px', left: '-14px', width: '64px', height: '64px', borderTop: `2px solid ${C.cyan}`, borderLeft: `2px solid ${C.cyan}` }} />
                <div style={{ position: 'absolute', bottom: '-14px', right: '-14px', width: '64px', height: '64px', borderBottom: `2px solid ${C.blue}`, borderRight: `2px solid ${C.blue}` }} />
                <div style={{ position: 'absolute', bottom: '32px', left: '-24px', background: C.surface, border: `1px solid ${C.borderB}`, padding: '18px 22px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
                  <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '40px', color: C.cyan, lineHeight: 1 }}>
                    <Counter target={500} suffix="+" />
                  </div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.dim, marginTop: '4px' }}>Cars Detailed</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '14px', fontWeight: 600 }}>About Everett Lux</p>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '28px' }}>
                  We Started With<br /><Shimmer>One Simple Goal</Shimmer>
                </h2>
                <p style={{ fontSize: '15px', color: C.dim, lineHeight: 1.8, marginBottom: '20px', fontWeight: 300 }}>
                  Everett Lux Detailing was founded right here in Everett, WA — driven by a passion for cars and a belief that great detailing shouldn't require you to rearrange your whole day.
                </p>
                <p style={{ fontSize: '15px', color: C.dim, lineHeight: 1.8, marginBottom: '20px', fontWeight: 300 }}>
                  We're a mobile operation, which means we bring the shop to you. Whether you're at home, at the office, or anywhere in Snohomish County — we show up fully equipped and ready to transform your vehicle.
                </p>
                <p style={{ fontSize: '15px', color: C.dim, lineHeight: 1.8, marginBottom: '40px', fontWeight: 300 }}>
                  From a quick interior refresh to a multi-stage paint correction and ceramic coating, every job gets the same level of care and attention. We treat every vehicle like it's our own.
                </p>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <BtnPrimary href="/contact">Book a Detail</BtnPrimary>
                  <BtnOutline href="/services">Our Services</BtnOutline>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: C.dark2, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0' }} className="stats-row">
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: '44px 28px', textAlign: 'center', borderRight: i < 3 ? `1px solid ${C.border}` : 'none' }}>
                <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(40px,5vw,60px)', color: C.cyan, lineHeight: 1 }}>
                  <Counter target={s.num} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.dim, marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '100px 0', background: C.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>What Drives Us</p>
              <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', textTransform: 'uppercase' }}>
                Our <Shimmer>Core Values</Shimmer>
              </h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px', background: C.border }} className="four-col-sm">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: C.surface, padding: '40px 28px' }}>
                  <div style={{ fontSize: '32px', marginBottom: '18px' }}>{v.icon}</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', color: C.text, marginBottom: '12px', letterSpacing: '0.04em' }}>{v.title}</h3>
                  <p style={{ fontSize: '13px', color: C.dim, lineHeight: 1.7, fontWeight: 300 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '100px 0', background: C.dark2 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>The Team</p>
              <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', textTransform: 'uppercase' }}>
                The People Behind <Shimmer>The Detail</Shimmer>
              </h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px', background: C.border }} className="three-col">
            {TEAM.map((member, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: C.surface, overflow: 'hidden' }}>
                  <div style={{ height: '280px', background: C.panel, position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={`https://images.unsplash.com/photo-${i === 0 ? '1472099645785-5658abf4ff4e' : i === 1 ? '1500648767791-00dcc994a43e' : '1519085360753-af0119f7cbe7'}?w=400&h=280&fit=crop&auto=format&face`}
                      alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) grayscale(0.3)' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,20,34,0.9) 0%, transparent 55%)' }} />
                    <div style={{ position: 'absolute', bottom: '20px', left: '24px' }}>
                      <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '24px', color: C.text, textTransform: 'uppercase' }}>{member.name}</div>
                      <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.cyan, marginTop: '3px' }}>{member.role}</div>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <p style={{ fontSize: '13px', color: C.dim, lineHeight: 1.7, fontWeight: 300 }}>{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){.four-col-sm{grid-template-columns:1fr 1fr!important}}
        @media(max-width:600px){.four-col-sm{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}
