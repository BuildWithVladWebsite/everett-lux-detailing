import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router'
import { C } from '../data'

// ─── Scroll reveal ────────────────────────────────────────────────────────────
export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold })
    obs.observe(el); return () => obs.disconnect()
  }, [threshold])
  return { ref, vis }
}

export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, vis } = useInView()
  return (
    <div ref={ref} className={className} style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease` }}>
      {children}
    </div>
  )
}

// ─── Buttons ──────────────────────────────────────────────────────────────────
export function BtnPrimary({ href, children, onClick }: { href?: string; children: React.ReactNode; onClick?: () => void }) {
  const [hov, setHov] = useState(false)
  const style = { display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '13px 28px', background: hov ? C.cyan : C.blue, color: '#06080f', textDecoration: 'none', fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' as const, transition: 'background 0.2s, box-shadow 0.2s', boxShadow: hov ? `0 0 28px rgba(0,200,255,0.35)` : 'none', cursor: 'pointer', border: 'none', fontFamily: 'inherit' }
  if (onClick) return <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={style}>{children}</button>
  if (href?.startsWith('http') || href?.startsWith('tel:') || href?.startsWith('mailto:'))
    return <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={style}>{children}</a>
  return <Link to={href ?? '/'} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={style}>{children}</Link>
}

export function BtnOutline({ href, children, onClick }: { href?: string; children: React.ReactNode; onClick?: () => void }) {
  const [hov, setHov] = useState(false)
  const style = { display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '12px 28px', background: 'transparent', color: hov ? C.cyan : C.text, textDecoration: 'none', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, border: `1px solid ${hov ? C.cyan : 'rgba(232,237,245,0.25)'}`, transition: 'all 0.2s', cursor: 'pointer', fontFamily: 'inherit' }
  if (onClick) return <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={style}>{children}</button>
  if (href?.startsWith('http') || href?.startsWith('tel:') || href?.startsWith('mailto:'))
    return <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={style}>{children}</a>
  return <Link to={href ?? '/'} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={style}>{children}</Link>
}

// ─── Section label + heading ──────────────────────────────────────────────────
export function SectionHead({ eyebrow, heading, sub, center = true }: { eyebrow: string; heading: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '56px' }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>{eyebrow}</p>
      <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(36px,5vw,62px)', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-0.01em', marginBottom: sub ? '18px' : '0' }}>{heading}</h2>
      {sub && <p style={{ fontSize: '15px', color: C.dim, maxWidth: center ? '520px' : '580px', margin: center ? '0 auto' : '0', fontWeight: 300, lineHeight: 1.7 }}>{sub}</p>}
    </div>
  )
}

// ─── Shimmer span ─────────────────────────────────────────────────────────────
export function Shimmer({ children }: { children: React.ReactNode }) {
  return <span className="cyan-shimmer">{children}</span>
}

// ─── Stars ────────────────────────────────────────────────────────────────────
export function Stars({ n }: { n: number }) {
  return <span style={{ color: C.cyan, fontSize: '18px', letterSpacing: '3px' }}>{'★'.repeat(n)}</span>
}

// ─── Page hero banner ─────────────────────────────────────────────────────────
export function PageHero({ eyebrow, title, accent, sub, img }: { eyebrow: string; title: string; accent?: string; sub?: string; img: string }) {
  return (
    <section style={{ position: 'relative', minHeight: '420px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', paddingTop: '72px' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,8,15,1) 0%, rgba(6,8,15,0.4) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, rgba(6,8,15,0.7) 0%, transparent 60%)` }} />
      </div>
      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '80px 28px 64px', width: '100%' }}>
        <p className="fade-up" style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>{eyebrow}</p>
        <h1 className="fade-up-1" style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(44px,7vw,88px)', textTransform: 'uppercase', lineHeight: 0.92, letterSpacing: '-0.01em' }}>
          {title}{accent && <><br /><span className="cyan-shimmer">{accent}</span></>}
        </h1>
        {sub && <p className="fade-up-2" style={{ fontSize: '16px', color: C.dim, marginTop: '20px', maxWidth: '480px', fontWeight: 300, lineHeight: 1.7 }}>{sub}</p>}
      </div>
      {/* Cyan bottom rule */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${C.cyan}, ${C.blue}, transparent)` }} />
    </section>
  )
}

// ─── Counter ──────────────────────────────────────────────────────────────────
export function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, vis } = useInView(0.3)
  useEffect(() => {
    if (!vis) return
    let start = 0
    const step = target / 50
    const id = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(id) }
      else setCount(Math.floor(start))
    }, 30)
    return () => clearInterval(id)
  }, [vis, target])
  return <span ref={ref}>{count}{suffix}</span>
}

// ─── Marquee ──────────────────────────────────────────────────────────────────
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.dark2, padding: '16px 0' }}>
      <div style={{ display: 'flex', gap: '48px', animation: 'marquee 30s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.dim, fontWeight: 500 }}>
            {item}<span style={{ color: C.blue, marginLeft: '48px' }}>·</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}

// ─── Before / After drag slider ──────────────────────────────────────────────
export function BeforeAfter({ before, after, beforeLabel = 'Before', afterLabel = 'After', height = 420 }: {
  before: string; after: string; beforeLabel?: string; afterLabel?: string; height?: number
}) {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const move = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const { left, width } = containerRef.current.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100))
    setPos(pct)
  }, [])

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX
      move(x)
    }
    const onUp = () => setDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [dragging, move])

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height, userSelect: 'none', overflow: 'hidden', cursor: dragging ? 'col-resize' : 'ew-resize', background: C.panel }}
      onMouseDown={e => { setDragging(true); move(e.clientX) }}
      onTouchStart={e => { setDragging(true); move(e.touches[0].clientX) }}
    >
      {/* After image (full) */}
      <img src={after} alt={afterLabel} draggable={false} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
      {/* Before image (clipped left) */}
      <div style={{ position: 'absolute', inset: 0, width: `${pos}%`, overflow: 'hidden', pointerEvents: 'none' }}>
        <img src={before} alt={beforeLabel} draggable={false} style={{ position: 'absolute', inset: 0, width: containerRef.current?.getBoundingClientRect().width ?? 800, maxWidth: 'none', height: '100%', objectFit: 'cover' }} />
      </div>
      {/* Divider line */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${pos}%`, width: '2px', background: '#fff', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
      {/* Handle */}
      <div style={{ position: 'absolute', top: '50%', left: `${pos}%`, transform: 'translate(-50%, -50%)', width: '44px', height: '44px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 16px rgba(0,0,0,0.55)', pointerEvents: 'none', zIndex: 2 }}>
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path d="M6 1L1 7l5 6M14 1l5 6-5 6" stroke={C.blue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* Labels */}
      <div style={{ position: 'absolute', top: '14px', left: '16px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'rgba(6,8,15,0.65)', padding: '4px 10px', backdropFilter: 'blur(4px)', pointerEvents: 'none', opacity: pos < 15 ? 0 : 1, transition: 'opacity 0.2s' }}>{beforeLabel}</div>
      <div style={{ position: 'absolute', top: '14px', right: '16px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'rgba(6,8,15,0.65)', padding: '4px 10px', backdropFilter: 'blur(4px)', pointerEvents: 'none', opacity: pos > 85 ? 0 : 1, transition: 'opacity 0.2s' }}>{afterLabel}</div>
    </div>
  )
}

// ─── Testimonial card ─────────────────────────────────────────────────────────
export function TestimonialCard({ t, highlight = false }: { t: { name: string; stars: number; text: string; service: string }; highlight?: boolean }) {
  return (
    <div style={{ background: C.surface, padding: '32px', position: 'relative', overflow: 'hidden', height: '100%' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: highlight ? `linear-gradient(90deg, ${C.blue}, ${C.cyan})` : `linear-gradient(90deg, ${C.blue}, transparent)` }} />
      <Stars n={t.stars} />
      <p style={{ fontSize: '15px', color: C.text, lineHeight: 1.8, margin: '16px 0 20px', fontStyle: 'italic', fontWeight: 300 }}>{t.text}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, color: '#06080f', flexShrink: 0 }}>
          {t.name[0]}
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: C.text }}>{t.name}</div>
          <div style={{ fontSize: '11px', color: C.cyan, letterSpacing: '0.08em' }}>{t.service}</div>
        </div>
      </div>
    </div>
  )
}
