import { useState } from 'react'
import { C, SERVICES } from '../data'

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
import { Reveal, BtnPrimary, PageHero, Shimmer } from '../components/Shared'
import SEOMeta from '../components/SEOMeta'
import SEO from '../seo-config'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  function toggleAddon(name: string) {
    setSelectedAddons(prev => prev.includes(name) ? prev.filter(a => a !== name) : [...prev, name])
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ background: C.dark }}>
      <SEOMeta {...SEO.contact} />
      <PageHero
        eyebrow="Get In Touch"
        title="Book Your"
        accent="Detail Today"
        sub="Call, text, or fill out the form. We'll get back to you fast with a free quote."
        img="https://images.unsplash.com/photo-1708805282695-ef186db20192?w=1600&h=700&fit=crop&auto=format"
      />

      <section style={{ padding: '80px 0 100px', background: C.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '72px', alignItems: 'start' }} className="two-col">

            {/* Contact info */}
            <Reveal>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '14px', fontWeight: 600 }}>Contact Info</p>
                <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,48px)', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '36px' }}>
                  Let's Get Your<br /><Shimmer>Car Sorted</Shimmer>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
                  <ContactBlock icon="📞" label="Call or Text" value="(425) 230-0876" href="tel:4252300876" />
                  <ContactBlock icon="✉️" label="Email Us" value="everettluxdetailing@gmail.com" href="mailto:everettluxdetailing@gmail.com" small />
                  <ContactBlock icon="📍" label="Everett Location" value="11615 25th Ave SE, Everett, WA 98208" href="https://maps.google.com/?q=11615+25th+Ave+SE,+Everett,+WA+98208" />
                  <ContactBlock icon="📍" label="Marysville Location" value="5158 82nd Pl NE, Marysville, WA 98270" href="https://maps.google.com/?q=5158+82nd+Pl+NE,+Marysville,+WA+98270" />
                  <ContactBlock icon="🗺️" label="Service Area" value="All of Snohomish County & Seattle Metro" />
                  <ContactBlock icon="🕐" label="Hours" value="Mon – Sat, 8am – 7pm" />
                </div>

                {/* Quick contact CTA */}
                <div style={{ background: C.surface, border: `1px solid ${C.border}`, padding: '28px 24px' }}>
                  <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cyan, marginBottom: '10px', fontWeight: 600 }}>Fastest Response</p>
                  <p style={{ fontSize: '14px', color: C.dim, lineHeight: 1.7, fontWeight: 300, marginBottom: '18px' }}>
                    For the fastest quote, call or text us directly. We typically respond within 30 minutes during business hours.
                  </p>
                  <BtnPrimary href="tel:4252300876">📞 Call (425) 230-0876</BtnPrimary>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1}>
              {sent ? (
                <div style={{ background: C.surface, border: `1px solid ${C.borderB}`, padding: '64px 40px', textAlign: 'center' }}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '32px', textTransform: 'uppercase', color: C.cyan, marginBottom: '14px' }}>Message Sent!</h3>
                  <p style={{ fontSize: '15px', color: C.dim, fontWeight: 300, lineHeight: 1.7, maxWidth: '340px', margin: '0 auto' }}>
                    Thanks for reaching out! We'll get back to you with a free quote within a few hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: C.surface, border: `1px solid ${C.border}`, padding: '40px' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: C.cyan, marginBottom: '4px', fontWeight: 600 }}>Request a Free Quote</div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-two-col">
                    <Field label="First Name" type="text" placeholder="John" required />
                    <Field label="Last Name" type="text" placeholder="Smith" required />
                  </div>
                  <Field label="Phone Number" type="tel" placeholder="(425) 555-0000" required />
                  <Field label="Email Address" type="email" placeholder="john@example.com" required />

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.cyan, marginBottom: '8px' }}>Service Interested In</label>
                    <select style={{ width: '100%', padding: '13px 14px', background: C.panel, border: `1px solid ${C.border}`, color: C.dim, fontSize: '14px', outline: 'none', appearance: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                      onFocus={e => (e.currentTarget.style.borderColor = C.cyan)}
                      onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s.slug}>{s.title}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.cyan, marginBottom: '8px' }}>Vehicle (Year, Make, Model)</label>
                    <input type="text" placeholder="e.g. 2020 Toyota Camry" style={{ width: '100%', padding: '13px 14px', background: C.panel, border: `1px solid ${C.border}`, color: C.text, fontSize: '14px', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                      onFocus={e => (e.currentTarget.style.borderColor = C.cyan)}
                      onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                    />
                  </div>

                  {/* Add-ons */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.cyan, marginBottom: '4px' }}>Add-Ons <span style={{ color: C.dim2, fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                    <p style={{ fontSize: '12px', color: C.dim2, marginBottom: '12px', fontWeight: 300 }}>Select any extras you'd like included with your service.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }} className="form-two-col">
                      {ADDONS.map(addon => {
                        const checked = selectedAddons.includes(addon.name)
                        return (
                          <button
                            key={addon.name}
                            type="button"
                            onClick={() => toggleAddon(addon.name)}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', padding: '10px 14px', background: checked ? 'rgba(0,200,255,0.08)' : C.panel, border: `1px solid ${checked ? C.cyan : C.border}`, cursor: 'pointer', transition: 'all 0.18s', fontFamily: 'inherit', textAlign: 'left' }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{ width: '16px', height: '16px', border: `1.5px solid ${checked ? C.cyan : C.dim2}`, background: checked ? C.cyan : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.18s' }}>
                                {checked && <span style={{ color: '#06080f', fontSize: '11px', fontWeight: 900, lineHeight: 1 }}>✓</span>}
                              </div>
                              <span style={{ fontSize: '13px', color: checked ? C.text : C.dim, fontWeight: checked ? 600 : 400 }}>{addon.name}</span>
                            </div>
                            <span style={{ fontSize: '12px', color: C.cyan, fontWeight: 700, flexShrink: 0 }}>{addon.price}</span>
                          </button>
                        )
                      })}
                    </div>
                    {selectedAddons.length > 0 && (
                      <p style={{ fontSize: '12px', color: C.cyan, marginTop: '10px', fontWeight: 500 }}>
                        Selected: {selectedAddons.join(', ')}
                      </p>
                    )}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.cyan, marginBottom: '8px' }}>Message</label>
                    <textarea rows={4} placeholder="Tell us about your vehicle and what you need..." style={{ width: '100%', padding: '13px 14px', background: C.panel, border: `1px solid ${C.border}`, color: C.text, fontSize: '14px', outline: 'none', resize: 'vertical', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                      onFocus={e => (e.currentTarget.style.borderColor = C.cyan)}
                      onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                    />
                  </div>

                  <button type="submit" style={{ padding: '16px', background: C.blue, color: '#06080f', border: 'none', fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s', fontFamily: 'inherit' }}
                    onMouseEnter={e => (e.currentTarget.style.background = C.cyan)}
                    onMouseLeave={e => (e.currentTarget.style.background = C.blue)}
                  >
                    Request Free Quote →
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:600px){.form-two-col{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}

function ContactBlock({ icon, label, value, href, small }: { icon: string; label: string; value: string; href?: string; small?: boolean }) {
  const content = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      <div style={{ width: '44px', height: '44px', background: 'rgba(0,200,255,0.1)', border: `1px solid rgba(0,200,255,0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.cyan, marginBottom: '3px', fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: small ? '13px' : '17px', color: C.text, fontFamily: small ? 'inherit' : "'Barlow Condensed',system-ui,sans-serif", fontWeight: small ? 400 : 700 }}>{value}</div>
      </div>
    </div>
  )
  if (href) return <a href={href} style={{ textDecoration: 'none' }}>{content}</a>
  return <div>{content}</div>
}

function Field({ label, type, placeholder, required }: { label: string; type: string; placeholder: string; required?: boolean }) {
  const [C_local] = useState(C)
  return (
    <div>
      <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: C_local.cyan, marginBottom: '8px' }}>{label}</label>
      <input type={type} placeholder={placeholder} required={required}
        style={{ width: '100%', padding: '13px 14px', background: C_local.panel, border: `1px solid ${C_local.border}`, color: C_local.text, fontSize: '14px', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
        onFocus={e => (e.currentTarget.style.borderColor = C_local.cyan)}
        onBlur={e => (e.currentTarget.style.borderColor = C_local.border)}
      />
    </div>
  )
}
