import { useState } from 'react'
import { Link } from 'react-router'
import { C } from '../data'
import { FAQ_ITEMS, FAQ_CATEGORIES } from '../faq-data'
import { Reveal, BtnPrimary, PageHero, Shimmer } from '../components/Shared'
import SEOMeta from '../components/SEOMeta'
import SEO from '../seo-config'

function AccordionItem({ item, isOpen, onToggle }: {
  item: typeof FAQ_ITEMS[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: '22px 0', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '20px', textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <span style={{
          fontFamily: "'Barlow Condensed', system-ui, sans-serif",
          fontWeight: 700, fontSize: 'clamp(16px, 1.8vw, 20px)',
          textTransform: 'uppercase', letterSpacing: '0.03em',
          color: isOpen ? C.cyan : C.text, transition: 'color 0.2s', lineHeight: 1.15,
        }}>
          {item.question}
        </span>
        <span style={{
          width: '28px', height: '28px', flexShrink: 0, border: `1px solid ${isOpen ? C.cyan : C.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: isOpen ? C.cyan : C.dim, fontSize: '16px', transition: 'all 0.2s',
          transform: isOpen ? 'rotate(45deg)' : 'none',
        }}>+</span>
      </button>
      <div style={{
        overflow: 'hidden', maxHeight: isOpen ? '400px' : '0',
        transition: 'max-height 0.35s ease',
      }}>
        <p style={{
          fontSize: '15px', color: C.dim, lineHeight: 1.8,
          fontWeight: 300, paddingBottom: '22px',
        }}>
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [activeCat, setActiveCat] = useState('All')
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const displayed = activeCat === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(f => f.category === activeCat)

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i)

  return (
    <div style={{ background: C.dark }}>
      <SEOMeta {...SEO.faq} />
      <PageHero
        eyebrow="Got Questions?"
        title="Frequently Asked"
        accent="Questions"
        sub="Everything you need to know about our services, pricing, and how mobile detailing works."
        img="https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?w=1600&h=700&fit=crop&auto=format"
      />

      <section style={{ padding: '72px 0 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '56px', alignItems: 'start' }} className="faq-layout">

            {/* Sidebar — category filter */}
            <aside>
              <Reveal>
                <div style={{ position: 'sticky', top: '96px' }}>
                  <p style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: C.cyan, marginBottom: '16px', fontWeight: 600 }}>
                    Categories
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {['All', ...FAQ_CATEGORIES].map(cat => (
                      <button
                        key={cat}
                        onClick={() => { setActiveCat(cat); setOpenIdx(0) }}
                        style={{
                          background: activeCat === cat ? C.surface : 'none',
                          border: `1px solid ${activeCat === cat ? C.borderB : 'transparent'}`,
                          borderLeft: `2px solid ${activeCat === cat ? C.cyan : 'transparent'}`,
                          color: activeCat === cat ? C.text : C.dim,
                          padding: '11px 16px', textAlign: 'left', cursor: 'pointer',
                          fontSize: '13px', fontWeight: activeCat === cat ? 600 : 400,
                          letterSpacing: '0.04em', transition: 'all 0.2s', fontFamily: 'inherit',
                        }}
                        onMouseEnter={e => { if (activeCat !== cat) (e.currentTarget.style.color = C.text) }}
                        onMouseLeave={e => { if (activeCat !== cat) (e.currentTarget.style.color = C.dim) }}
                      >
                        {cat}
                        <span style={{ float: 'right', fontSize: '12px', color: C.dim2, fontWeight: 400 }}>
                          {cat === 'All' ? FAQ_ITEMS.length : FAQ_ITEMS.filter(f => f.category === cat).length}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Still have questions CTA */}
                  <div style={{ marginTop: '32px', background: C.surface, border: `1px solid ${C.border}`, padding: '24px 18px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>Still have questions?</p>
                    <p style={{ fontSize: '12px', color: C.dim, fontWeight: 300, lineHeight: 1.6, marginBottom: '16px' }}>
                      Call or text us — we'll give you a straight answer, no sales pitch.
                    </p>
                    <a href="tel:4252300876" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: C.cyan, fontWeight: 700, textDecoration: 'none' }}>
                      📞 (425) 230-0876
                    </a>
                  </div>
                </div>
              </Reveal>
            </aside>

            {/* FAQ accordion */}
            <div>
              <Reveal>
                <p style={{ fontSize: '13px', color: C.dim, marginBottom: '8px' }}>
                  Showing <span style={{ color: C.text, fontWeight: 600 }}>{displayed.length}</span> questions
                  {activeCat !== 'All' && <> in <span style={{ color: C.cyan }}>{activeCat}</span></>}
                </p>
              </Reveal>
              {displayed.map((item, i) => (
                <Reveal key={`${activeCat}-${i}`} delay={i * 0.03}>
                  <AccordionItem
                    item={item}
                    isOpen={openIdx === i}
                    onToggle={() => toggle(i)}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '80px 28px', background: C.dark2, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>Ready to Book?</p>
            <h2 style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,52px)', textTransform: 'uppercase', marginBottom: '16px' }}>
              Let's Get Your Car <Shimmer>Sorted</Shimmer>
            </h2>
            <p style={{ fontSize: '15px', color: C.dim, marginBottom: '32px', fontWeight: 300, lineHeight: 1.7 }}>
              Call or text us for a free quote — we'll recommend the right service for your vehicle and budget.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <BtnPrimary href="tel:4252300876">📞 (425) 230-0876</BtnPrimary>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '12px 28px', background: 'transparent', color: C.text, textDecoration: 'none', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', border: `1px solid rgba(232,237,245,0.25)`, transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = C.cyan; (e.currentTarget as HTMLAnchorElement).style.color = C.cyan }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(232,237,245,0.25)'; (e.currentTarget as HTMLAnchorElement).style.color = C.text }}
              >Send a Message</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 800px) {
          .faq-layout { grid-template-columns: 1fr !important; }
          .faq-layout aside > div { position: static !important; }
        }
      `}</style>
    </div>
  )
}
