import { Link } from 'react-router'
import { C, SERVICES } from '../data'
import logoImg from '@/imports/Untitled_design_-_2025-10-22T144522.364.PNG'

export default function Footer() {
  return (
    <footer style={{ background: '#04060b', borderTop: `1px solid ${C.border}` }}>
      {/* CTA strip */}
      <div style={{ background: `linear-gradient(105deg, ${C.blue} 0%, #0e6fa8 50%, #004b7a 100%)`, padding: '48px 28px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,rgba(0,0,0,0.06) 0,rgba(0,0,0,0.06) 1px,transparent 1px,transparent 4px)', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '36px' }}>🚗</span>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(22px,3vw,34px)', textTransform: 'uppercase', color: '#fff', letterSpacing: '0.02em' }}>Ready for a Showroom Shine?</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>Call or text us — free quotes, no obligation.</div>
          </div>
        </div>
        <a href="tel:4252300876"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', background: '#fff', color: C.blue, textDecoration: 'none', fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background 0.2s', flexShrink: 0 }}
          onMouseEnter={e => (e.currentTarget.style.background = C.dark)}
          onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
        >📞 (425) 230-0876</a>
      </div>

      {/* Links */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 28px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }} className="footer-cols">
          <div>
            <img src={logoImg} alt="Everett Lux Detailing" style={{ height: '48px', objectFit: 'contain', marginBottom: '16px' }} />
            <p style={{ fontSize: '14px', color: C.dim, lineHeight: 1.8, maxWidth: '280px', fontWeight: 300, marginBottom: '20px' }}>
              Premium mobile auto detailing serving Everett, WA and all of Snohomish County. We come to you.
            </p>
            <a href="tel:4252300876" style={{ display: 'block', fontSize: '18px', color: C.cyan, textDecoration: 'none', fontWeight: 700, marginBottom: '6px' }}>(425) 230-0876</a>
            <a href="mailto:everettluxdetailing@gmail.com" style={{ display: 'block', fontSize: '13px', color: C.dim, textDecoration: 'none', marginBottom: '6px' }}>everettluxdetailing@gmail.com</a>
            <a href="https://maps.google.com/?q=11615+25th+Ave+SE,+Everett,+WA+98208" target="_blank" rel="noreferrer" style={{ display: 'block', fontSize: '13px', color: C.dim, textDecoration: 'none', lineHeight: 1.5, marginBottom: '8px' }}>
              📍 11615 25th Ave SE<br />Everett, WA 98208
            </a>
            <a href="https://maps.google.com/?q=5158+82nd+Pl+NE,+Marysville,+WA+98270" target="_blank" rel="noreferrer" style={{ display: 'block', fontSize: '13px', color: C.dim, textDecoration: 'none', lineHeight: 1.5 }}>
              📍 5158 82nd Pl NE<br />Marysville, WA 98270
            </a>
          </div>

          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cyan, marginBottom: '18px', fontWeight: 600 }}>Services</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link to={`/services#${s.slug}`} style={{ fontSize: '13px', color: C.dim, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.cyan)}
                    onMouseLeave={e => (e.currentTarget.style.color = C.dim)}
                  >{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cyan, marginBottom: '18px', fontWeight: 600 }}>Company</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[['/', 'Home'], ['/about', 'About Us'], ['/gallery', 'Gallery'], ['/service-areas', 'Service Areas'], ['/blog', 'Blog'], ['/faq', 'FAQ'], ['/reviews', 'Reviews'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} style={{ fontSize: '13px', color: C.dim, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.cyan)}
                    onMouseLeave={e => (e.currentTarget.style.color = C.dim)}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cyan, marginBottom: '18px', fontWeight: 600 }}>Service Areas</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Everett','Marysville','Lynnwood','Mukilteo','Edmonds','Bothell','Kirkland','Bellevue','Seattle'].map(city => (
                <li key={city}>
                  <Link to="/service-areas" style={{ fontSize: '13px', color: C.dim, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.cyan)}
                    onMouseLeave={e => (e.currentTarget.style.color = C.dim)}
                  >{city}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div style={{ height: '1px', background: C.border, marginBottom: '24px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <p style={{ fontSize: '12px', color: C.dim2 }}>© 2025 Everett Lux Detailing. All rights reserved.</p>
          <p style={{ fontSize: '12px', color: C.dim2 }}>WA UBI #605935326 · Mobile Detailing · Everett &amp; Marysville, WA</p>
        </div>
      </div>
    </footer>
  )
}
