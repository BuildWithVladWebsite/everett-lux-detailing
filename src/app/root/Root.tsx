import { Outlet, ScrollRestoration, useLocation, useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { C, SERVICE_AREAS, SERVICES } from '../data'

function FloatingBookBtn() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <button
      onClick={() => navigate('/contact')}
      aria-label="Book Now"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed', bottom: '28px', right: '24px', zIndex: 300,
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '14px 24px',
        background: hovered ? C.cyan : C.blue,
        color: '#06080f',
        border: 'none',
        cursor: 'pointer',
        fontFamily: "'Barlow Condensed', system-ui, sans-serif",
        fontSize: '14px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
        boxShadow: hovered ? `0 8px 32px rgba(0,200,255,0.45)` : `0 4px 20px rgba(42,143,196,0.4)`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.95)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ fontSize: '16px' }}>📅</span>
      <span>Book Now</span>
    </button>
  )
}

export default function Root() {
  const location = useLocation()
  // Hide floating button on local city/service SEO pages
  const parts = location.pathname.split('/').filter(Boolean)
  const isLocalPage = parts.length === 2
    && SERVICE_AREAS.some(a => a.slug === parts[0])
    && SERVICES.some(s => s.slug === parts[1])

  return (
    <>
      <ScrollRestoration />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      {!isLocalPage && <FloatingBookBtn />}
    </>
  )
}
