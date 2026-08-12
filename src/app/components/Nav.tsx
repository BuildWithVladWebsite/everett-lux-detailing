import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router'
import { C, SERVICES } from '../data'
import logoImg from '@/imports/Untitled_design_-_2025-10-22T144522.364.PNG'

const GOOGLE_URL = 'https://share.google/wMGNfeejfoai1cIDX'

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

const ABOUT_LINKS = [
  { label: 'About Us', to: '/about', icon: '👥' },
  { label: 'Gallery', to: '/gallery', icon: '📸' },
  { label: 'FAQ', to: '/faq', icon: '❓' },
  { label: 'Reviews', to: '/reviews', icon: '⭐' },
]

function DropdownMenu({ children, items }: { children: React.ReactNode; items: { label: string; to: string; icon?: string; sub?: string }[] }) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => { if (timerRef.current) clearTimeout(timerRef.current); setOpen(true) }
  const hide = () => { timerRef.current = setTimeout(() => setOpen(false), 120) }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  return (
    <div style={{ position: 'relative' }} onMouseEnter={show} onMouseLeave={hide}>
      <button
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: open ? C.cyan : C.dim, fontWeight: open ? 700 : 400, padding: '2px 0', fontFamily: 'inherit', transition: 'color 0.2s' }}
      >
        {children}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>
          <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div
          onMouseEnter={show} onMouseLeave={hide}
          style={{ position: 'absolute', top: 'calc(100% + 16px)', left: '50%', transform: 'translateX(-50%)', background: C.dark2, border: `1px solid ${C.border}`, minWidth: '220px', zIndex: 300, boxShadow: '0 16px 48px rgba(0,0,0,0.7)', animation: 'navDropIn 0.18s ease both' }}
        >
          {/* Arrow */}
          <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '10px', height: '10px', background: C.dark2, border: `1px solid ${C.border}`, borderBottom: 'none', borderRight: 'none' }} />
          {items.map((item, i) => (
            <NavLink key={i} to={item.to}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 18px',
                textDecoration: 'none', fontSize: '13px', fontWeight: isActive ? 600 : 400,
                color: isActive ? C.cyan : C.text,
                background: isActive ? 'rgba(42,143,196,0.08)' : 'transparent',
                borderBottom: i < items.length - 1 ? `1px solid ${C.border}` : 'none',
                transition: 'background 0.15s, color 0.15s',
              })}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(42,143,196,0.12)'; (e.currentTarget as HTMLElement).style.color = C.cyan }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.color = '' }}
            >
              {item.icon && <span style={{ fontSize: '14px', width: '18px', textAlign: 'center' }}>{item.icon}</span>}
              <div>
                <div>{item.label}</div>
                {item.sub && <div style={{ fontSize: '11px', color: C.dim, marginTop: '1px' }}>{item.sub}</div>}
              </div>
            </NavLink>
          ))}
        </div>
      )}
      <style>{`@keyframes navDropIn { from { opacity:0; transform:translateX(-50%) translateY(-6px) } to { opacity:1; transform:translateX(-50%) translateY(0) } }`}</style>
    </div>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [barDismissed, setBarDismissed] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [mobileAbout, setMobileAbout] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [location.pathname])

  const serviceDropItems = SERVICES.map(s => ({ label: s.title, to: `/services#${s.slug}`, sub: s.price }))

  return (
    <>
      {/* ── Top Google rating bar ─────────────────────────────────────── */}
      {!barDismissed && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 201,
          background: 'linear-gradient(90deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)',
          borderBottom: '1px solid rgba(66,133,244,0.25)',
          height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <a href={GOOGLE_URL} target="_blank" rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', padding: '0 40px 0 0' }}
          >
            <GoogleIcon />
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>Google Rating</span>
            <span style={{ display: 'flex', gap: '1px' }}>
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#FBBC05">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </span>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}>5.0</span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>· View Our Reviews</span>
          </a>
          <button
            onClick={() => setBarDismissed(true)}
            style={{ position: 'absolute', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.35)', fontSize: '16px', lineHeight: 1, padding: '4px 6px', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            aria-label="Dismiss"
          >✕</button>
        </div>
      )}

      {/* ── Main nav ─────────────────────────────────────────────────── */}
      <header style={{
        position: 'fixed',
        top: barDismissed ? 0 : '36px',
        left: 0, right: 0, zIndex: 200,
        background: scrolled || open ? 'rgba(6,8,15,0.97)' : 'transparent',
        borderBottom: scrolled || open ? `1px solid ${C.border}` : '1px solid transparent',
        backdropFilter: scrolled || open ? 'blur(20px)' : 'none',
        transition: 'background 0.35s, border-color 0.35s, top 0.3s',
      }}>
        <div className="nav-bar" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logoImg} alt="Everett Lux Detailing" className="nav-logo" style={{ height: '64px', objectFit: 'contain' }} />
          </NavLink>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="hide-mobile">
            <NavLink to="/" end
              style={({ isActive }) => ({ fontSize: '11.5px', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: isActive ? 700 : 400, color: isActive ? C.cyan : C.dim, borderBottom: isActive ? `1px solid ${C.cyan}` : '1px solid transparent', paddingBottom: '2px', transition: 'color 0.2s' })}
              onMouseEnter={e => (e.currentTarget.style.color = C.text)}
              onMouseLeave={e => (e.currentTarget.style.color = '')}
            >Home</NavLink>

            <DropdownMenu items={serviceDropItems}>Services</DropdownMenu>

            <DropdownMenu items={ABOUT_LINKS}>About</DropdownMenu>

            {[
              { label: 'Service Areas', to: '/service-areas' },
              { label: 'Blog', to: '/blog' },
              { label: 'Contact', to: '/contact' },
            ].map(l => (
              <NavLink key={l.to} to={l.to}
                style={({ isActive }) => ({ fontSize: '11.5px', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: isActive ? 700 : 400, color: isActive ? C.cyan : C.dim, borderBottom: isActive ? `1px solid ${C.cyan}` : '1px solid transparent', paddingBottom: '2px', transition: 'color 0.2s' })}
                onMouseEnter={e => (e.currentTarget.style.color = C.text)}
                onMouseLeave={e => (e.currentTarget.style.color = '')}
              >{l.label}</NavLink>
            ))}

            <a href="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: C.blue, color: '#06080f', textDecoration: 'none', fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = C.cyan)}
              onMouseLeave={e => (e.currentTarget.style.background = C.blue)}
            >📅 Book Now</a>
          </nav>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} className="show-mobile"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', flexDirection: 'column', gap: '5px' }}
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', background: open ? C.cyan : C.text, transition: 'all 0.2s',
                transform: open ? (i===0 ? 'rotate(45deg) translate(4px,5px)' : i===2 ? 'rotate(-45deg) translate(4px,-5px)' : 'none') : 'none',
                opacity: open && i===1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ background: C.dark2, borderTop: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', maxHeight: 'calc(100vh - 136px)', overflowY: 'auto' }}>

            {/* Book Now + Google rating */}
            <div style={{ padding: '16px 20px', display: 'flex', gap: '10px', borderBottom: `1px solid ${C.border}`, background: C.dark }}>
              <a href="/contact" style={{ flex: 1, padding: '12px', background: C.blue, color: '#06080f', textDecoration: 'none', fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', display: 'block' }}>
                📅 Book Now
              </a>
              <a href="tel:4252300876" style={{ flex: 1, padding: '12px', background: C.surface, border: `1px solid ${C.border}`, color: C.text, textDecoration: 'none', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textAlign: 'center', display: 'block' }}>
                📞 Call Us
              </a>
            </div>

            {/* Nav links */}
            <div>
              {/* Plain links */}
              {[['/', 'Home', true], ['/service-areas', 'Service Areas', false], ['/blog', 'Blog', false], ['/contact', 'Contact', false]].map(([to, label, end]) => (
                <NavLink key={to as string} to={to as string} end={end as boolean}
                  style={({ isActive }) => ({ display: 'block', padding: '16px 20px', textDecoration: 'none', fontSize: '15px', letterSpacing: '0.04em', color: isActive ? C.cyan : C.text, fontWeight: isActive ? 700 : 400, borderBottom: `1px solid ${C.border}`, background: isActive ? 'rgba(42,143,196,0.07)' : 'transparent' })}
                >{label as string}</NavLink>
              ))}

              {/* Services accordion */}
              <button onClick={() => setMobileServices(!mobileServices)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: mobileServices ? 'rgba(42,143,196,0.1)' : 'transparent', border: 'none', borderBottom: `1px solid ${C.border}`, borderLeft: mobileServices ? `3px solid ${C.cyan}` : '3px solid transparent', cursor: 'pointer', fontSize: '15px', letterSpacing: '0.04em', color: mobileServices ? C.cyan : C.text, fontWeight: mobileServices ? 700 : 400, fontFamily: 'inherit', width: '100%', transition: 'all 0.2s' }}
              >
                <span>Services</span>
                <span style={{ fontSize: '20px', color: mobileServices ? C.cyan : C.dim, lineHeight: 1, fontWeight: 300 }}>{mobileServices ? '−' : '+'}</span>
              </button>
              {mobileServices && (
                <div>
                  {SERVICES.map(s => (
                    <NavLink key={s.slug} to={`/services#${s.slug}`}
                      onClick={() => setOpen(false)}
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 20px 13px 28px', textDecoration: 'none', fontSize: '14px', color: C.dim, borderBottom: `1px solid ${C.border}`, background: C.dark, borderLeft: `3px solid ${C.borderB}` }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '16px' }}>{s.icon}</span>
                        <span>{s.title}</span>
                      </span>
                      <span style={{ color: C.cyan, fontSize: '12px', fontWeight: 700 }}>{s.price}</span>
                    </NavLink>
                  ))}
                </div>
              )}

              {/* About accordion */}
              <button onClick={() => setMobileAbout(!mobileAbout)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: mobileAbout ? 'rgba(42,143,196,0.1)' : 'transparent', border: 'none', borderBottom: `1px solid ${C.border}`, borderLeft: mobileAbout ? `3px solid ${C.cyan}` : '3px solid transparent', cursor: 'pointer', fontSize: '15px', letterSpacing: '0.04em', color: mobileAbout ? C.cyan : C.text, fontWeight: mobileAbout ? 700 : 400, fontFamily: 'inherit', width: '100%', transition: 'all 0.2s' }}
              >
                <span>About</span>
                <span style={{ fontSize: '20px', color: mobileAbout ? C.cyan : C.dim, lineHeight: 1, fontWeight: 300 }}>{mobileAbout ? '−' : '+'}</span>
              </button>
              {mobileAbout && (
                <div>
                  {ABOUT_LINKS.map(l => (
                    <NavLink key={l.to} to={l.to}
                      onClick={() => setOpen(false)}
                      style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 20px 13px 28px', textDecoration: 'none', fontSize: '14px', color: C.dim, borderBottom: `1px solid ${C.border}`, background: C.dark, borderLeft: `3px solid ${C.borderB}` }}
                    >
                      <span style={{ fontSize: '18px', width: '22px', textAlign: 'center' }}>{l.icon}</span>
                      <span>{l.label}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Google rating footer */}
            <a href={GOOGLE_URL} target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 20px', textDecoration: 'none', background: C.dark, borderTop: `1px solid ${C.border}` }}
            >
              <GoogleIcon />
              <span style={{ display: 'flex', gap: '2px' }}>
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#FBBC05">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </span>
              <span style={{ fontSize: '13px', color: '#fff', fontWeight: 700 }}>5.0 Google Rating</span>
              <span style={{ fontSize: '11px', color: C.dim }}>· Tap to Review</span>
            </a>
          </div>
        )}
      </header>

      {/* Push page content down */}
      <div className="nav-spacer" style={{ height: barDismissed ? '80px' : '116px', transition: 'height 0.3s' }} />
    </>
  )
}
