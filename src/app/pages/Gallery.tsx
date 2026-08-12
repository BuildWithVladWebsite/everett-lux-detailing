import { useState } from 'react'
import { C } from '../data'
import { Reveal, PageHero, BtnPrimary, BeforeAfter } from '../components/Shared'
import SEOMeta from '../components/SEOMeta'
import SEO from '../seo-config'

const BEFORE_AFTERS = [
  { label: 'Full Detail', before: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=700&h=440&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1528597469186-bddab681a37f?w=700&h=440&fit=crop&auto=format' },
  { label: 'Interior Clean', before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=440&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?w=700&h=440&fit=crop&auto=format' },
  { label: 'Paint Correction', before: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=700&h=440&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1622329821376-a19fd6002562?w=700&h=440&fit=crop&auto=format' },
  { label: 'Exterior & Wheels', before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&h=440&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1708805282706-f44730b7e527?w=700&h=440&fit=crop&auto=format' },
  { label: 'Ceramic Coating', before: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=700&h=440&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700&h=440&fit=crop&auto=format' },
  { label: 'Headlight Restore', before: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=700&h=440&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1708805283017-c662be2c7a44?w=700&h=440&fit=crop&auto=format' },
  { label: 'Engine Bay', before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=440&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1620584898989-d39f7f9ed1b7?w=700&h=440&fit=crop&auto=format' },
  { label: 'SUV Transform', before: 'https://images.unsplash.com/photo-1558981001-5864b3250a69?w=700&h=440&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&h=440&fit=crop&auto=format' },
]

const PHOTOS = [
  { url: 'https://images.unsplash.com/photo-1708805282695-ef186db20192?w=800&h=1000&fit=crop&auto=format', alt: 'Interior detailing', cat: 'Interior', wide: false },
  { url: 'https://images.unsplash.com/photo-1708805282706-f44730b7e527?w=800&h=600&fit=crop&auto=format', alt: 'Wax and polish', cat: 'Exterior', wide: false },
  { url: 'https://images.unsplash.com/photo-1528597469186-bddab681a37f?w=800&h=600&fit=crop&auto=format', alt: 'BMW after ceramic coating', cat: 'Ceramic', wide: false },
  { url: 'https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?w=1200&h=600&fit=crop&auto=format', alt: 'Full exterior detail', cat: 'Exterior', wide: true },
  { url: 'https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?w=800&h=600&fit=crop&auto=format', alt: 'Steering wheel cleaned', cat: 'Interior', wide: false },
  { url: 'https://images.unsplash.com/photo-1622329821376-a19fd6002562?w=800&h=1000&fit=crop&auto=format', alt: 'Detailer at work', cat: 'Process', wide: false },
  { url: 'https://images.unsplash.com/photo-1708805283017-c662be2c7a44?w=800&h=600&fit=crop&auto=format', alt: 'Tire and wheel', cat: 'Exterior', wide: false },
  { url: 'https://images.unsplash.com/photo-1620584898989-d39f7f9ed1b7?w=800&h=600&fit=crop&auto=format', alt: 'Professional equipment', cat: 'Process', wide: false },
  { url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=600&fit=crop&auto=format', alt: 'Car paint close-up', cat: 'Paint Correction', wide: true },
  { url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop&auto=format', alt: 'Sports car', cat: 'Exterior', wide: false },
  { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&auto=format', alt: 'Luxury car exterior', cat: 'Ceramic', wide: false },
  { url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&auto=format', alt: 'Car at sunset', cat: 'Exterior', wide: false },
]

const CATS = ['All', 'Interior', 'Exterior', 'Ceramic', 'Paint Correction', 'Process']

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = cat === 'All' ? PHOTOS : PHOTOS.filter(p => p.cat === cat)

  return (
    <div style={{ background: C.dark }}>
      <SEOMeta {...SEO.gallery} />
      <PageHero
        eyebrow="Our Work"
        title="The Results"
        accent="Speak For Themselves"
        sub="Every vehicle we touch gets our full attention. Browse real results from real clients."
        img="https://images.unsplash.com/photo-1708805282706-f44730b7e527?w=1600&h=700&fit=crop&auto=format"
      />

      <section style={{ padding: '64px 0 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          {/* Filter tabs */}
          <Reveal>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
              {CATS.map(c => (
                <button key={c} onClick={() => setCat(c)}
                  style={{ padding: '9px 20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', background: cat === c ? C.blue : C.surface, color: cat === c ? '#06080f' : C.dim, border: `1px solid ${cat === c ? C.blue : C.border}`, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit' }}
                  onMouseEnter={e => { if (cat !== c) (e.currentTarget.style.borderColor = C.cyan); if (cat !== c) (e.currentTarget.style.color = C.text) }}
                  onMouseLeave={e => { if (cat !== c) (e.currentTarget.style.borderColor = C.border); if (cat !== c) (e.currentTarget.style.color = C.dim) }}
                >{c}</button>
              ))}
            </div>
          </Reveal>

          {/* Masonry-style grid */}
          <div style={{ columns: '3', columnGap: '3px' }} className="gallery-masonry">
            {filtered.map((p, i) => (
              <Reveal key={`${cat}-${i}`} delay={i * 0.04}>
                <div
                  onClick={() => setLightbox(PHOTOS.indexOf(p))}
                  style={{ breakInside: 'avoid', marginBottom: '3px', overflow: 'hidden', background: C.panel, cursor: 'pointer', position: 'relative', display: 'block' }}
                >
                  <img src={p.url} alt={p.alt} style={{ width: '100%', display: 'block', filter: 'brightness(0.78)', transition: 'transform 0.5s, filter 0.4s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; (e.currentTarget as HTMLImageElement).style.filter = 'brightness(1)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.78)' }}
                  />
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.cyan, background: 'rgba(6,8,15,0.7)', padding: '3px 8px', backdropFilter: 'blur(4px)' }}>
                    {p.cat}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
        >
          <button
            style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(42,143,196,0.2)', border: `1px solid ${C.border}`, color: C.text, fontSize: '24px', cursor: 'pointer', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={e => { e.stopPropagation(); setLightbox(l => l !== null && l > 0 ? l - 1 : l) }}
          >‹</button>
          <img src={PHOTOS[lightbox].url.replace('w=800', 'w=1400').replace('h=600', 'h=900').replace('h=1000', 'h=1200')} alt={PHOTOS[lightbox].alt}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
          />
          <button
            style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(42,143,196,0.2)', border: `1px solid ${C.border}`, color: C.text, fontSize: '24px', cursor: 'pointer', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={e => { e.stopPropagation(); setLightbox(l => l !== null && l < PHOTOS.length - 1 ? l + 1 : l) }}
          >›</button>
          <button
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: `1px solid ${C.border}`, color: C.text, fontSize: '20px', cursor: 'pointer', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setLightbox(null)}
          >✕</button>
        </div>
      )}

      {/* Before / After sliders */}
      <section style={{ padding: '80px 0 100px', background: C.dark2, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>The Proof</p>
              <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', textTransform: 'uppercase', lineHeight: 0.95 }}>
                Before &amp; <span className="cyan-shimmer">After</span>
              </h2>
              <p style={{ fontSize: '14px', color: C.dim, marginTop: '14px', fontWeight: 300 }}>Drag the handle left or right to reveal the transformation ←→</p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }} className="ba-grid">
            {BEFORE_AFTERS.map((ba, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div>
                  <BeforeAfter before={ba.before} after={ba.after} height={240} />
                  <div style={{ padding: '8px 4px 0', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.dim, fontWeight: 600 }}>{ba.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 28px', background: C.dark, borderTop: `1px solid ${C.border}`, textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,52px)', textTransform: 'uppercase', marginBottom: '16px' }}>
            Ready for <span className="cyan-shimmer">Your Transformation?</span>
          </h2>
          <p style={{ fontSize: '15px', color: C.dim, marginBottom: '32px', fontWeight: 300, maxWidth: '440px', margin: '0 auto 32px' }}>
            Your car could be next. Book today and we'll come to you.
          </p>
          <BtnPrimary href="/contact">📅 Book Now</BtnPrimary>
        </Reveal>
      </section>

      <style>{`
        @media(max-width:900px){.gallery-masonry{columns:2!important}}
        @media(max-width:600px){.gallery-masonry{columns:1!important}}
      `}</style>
    </div>
  )
}
