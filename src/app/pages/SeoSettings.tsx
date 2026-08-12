import { useState } from 'react'
import { C } from '../data'
import SEO from '../seo-config'
import { getSeoService, SEO_SERVICES } from '../seo-data'
import { SERVICE_AREAS } from '../data'

const PAGE_LABELS: Record<string, string> = {
  home: 'Home',
  services: 'Services',
  gallery: 'Gallery',
  about: 'About Us',
  serviceAreas: 'Service Areas',
  reviews: 'Reviews',
  contact: 'Contact',
  faq: 'FAQ',
  blog: 'Blog',
}

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500) }}
      style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', background: copied ? 'rgba(0,200,255,0.15)' : C.panel, color: copied ? C.cyan : C.dim2, border: `1px solid ${copied ? C.borderB : C.border}`, padding: '3px 10px', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', flexShrink: 0 }}
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  )
}

function LengthBadge({ text, max }: { text: string; max: number }) {
  const len = text.length
  const ok = len <= max
  const warn = len > max * 0.9
  return (
    <span style={{ fontSize: '10px', color: ok ? (warn ? '#FBBC05' : C.dim2) : '#ea4335', fontWeight: 600, flexShrink: 0 }}>
      {len}/{max}
    </span>
  )
}

function Row({ label, title, description, path }: { label: string; title: string; description: string; path: string }) {
  const fullTitle = title.includes('Everett Lux') ? title : `${title} | Everett Lux Detailing`
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', color: C.text }}>{label}</span>
        <span style={{ fontSize: '11px', color: C.dim2, fontFamily: 'monospace', background: C.panel, padding: '1px 7px', border: `1px solid ${C.border}` }}>{path}</span>
      </div>

      {/* Title row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.cyan, marginBottom: '4px', fontWeight: 600 }}>Title</div>
          <div style={{ fontSize: '13px', color: C.text, lineHeight: 1.5, wordBreak: 'break-word' }}>{fullTitle}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '16px', flexShrink: 0 }}>
          <LengthBadge text={fullTitle} max={60} />
          <CopyBtn text={fullTitle} />
        </div>
      </div>

      {/* Description row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', paddingTop: '6px', borderTop: `1px solid ${C.border}` }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.dim, marginBottom: '4px', fontWeight: 600 }}>Description</div>
          <div style={{ fontSize: '13px', color: C.dim, lineHeight: 1.6, fontWeight: 300, wordBreak: 'break-word' }}>{description}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '16px', flexShrink: 0 }}>
          <LengthBadge text={description} max={160} />
          <CopyBtn text={description} />
        </div>
      </div>
    </div>
  )
}

export default function SeoSettings() {
  const [tab, setTab] = useState<'pages' | 'local'>('pages')
  const [cityFilter, setCityFilter] = useState('all')

  const cities = SERVICE_AREAS.map(a => ({ slug: a.slug, city: a.city }))

  return (
    <div style={{ background: C.dark, minHeight: '100vh', paddingTop: '72px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 28px' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '10px', fontWeight: 600 }}>Admin</p>
          <h1 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(32px,5vw,56px)', textTransform: 'uppercase', color: C.text, lineHeight: 1 }}>
            SEO Settings
          </h1>
          <p style={{ fontSize: '14px', color: C.dim, marginTop: '12px', lineHeight: 1.7, fontWeight: 300, maxWidth: '560px' }}>
            View all page titles and meta descriptions. To edit them, update <code style={{ background: C.panel, color: C.cyan, padding: '1px 6px', fontSize: '12px' }}>src/app/seo-config.ts</code> for main pages, or <code style={{ background: C.panel, color: C.cyan, padding: '1px 6px', fontSize: '12px' }}>src/app/seo-data.ts</code> for city/service pages.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '2px', marginBottom: '28px', background: C.panel, padding: '4px', width: 'fit-content' }}>
          {(['pages', 'local'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: '8px 20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', background: tab === t ? C.blue : 'transparent', color: tab === t ? '#06080f' : C.dim, border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
            >
              {t === 'pages' ? 'Main Pages' : 'City / Service Pages'}
            </button>
          ))}
        </div>

        {tab === 'pages' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {Object.entries(PAGE_LABELS).map(([key, label]) => {
              const seo = SEO[key]
              if (!seo) return null
              return <Row key={key} label={label} title={seo.title} description={seo.description} path={seo.canonical} />
            })}
          </div>
        )}

        {tab === 'local' && (
          <div>
            {/* City filter */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <button onClick={() => setCityFilter('all')}
                style={{ padding: '6px 14px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', background: cityFilter === 'all' ? C.blue : C.surface, color: cityFilter === 'all' ? '#06080f' : C.dim, border: `1px solid ${cityFilter === 'all' ? C.blue : C.border}`, cursor: 'pointer', fontFamily: 'inherit' }}
              >All Cities</button>
              {cities.map(c => (
                <button key={c.slug} onClick={() => setCityFilter(c.slug)}
                  style={{ padding: '6px 14px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', background: cityFilter === c.slug ? C.blue : C.surface, color: cityFilter === c.slug ? '#06080f' : C.dim, border: `1px solid ${cityFilter === c.slug ? C.blue : C.border}`, cursor: 'pointer', fontFamily: 'inherit' }}
                >{c.city}</button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {cities.filter(c => cityFilter === 'all' || c.slug === cityFilter).flatMap(c =>
                SEO_SERVICES.map(svcBase => {
                  const cityName = c.city
                  const title = svcBase.metaTitle.replace(/Everett,?\s?WA/g, `${cityName}, WA`).replace(/Everett/g, cityName)
                  const desc = svcBase.metaDesc.replace(/Everett,?\s?WA/g, `${cityName}, WA`).replace(/Everett/g, cityName)
                  return (
                    <Row
                      key={`${c.slug}-${svcBase.slug}`}
                      label={`${cityName} — ${svcBase.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`}
                      title={title}
                      description={desc}
                      path={`/${c.slug}/${svcBase.slug}`}
                    />
                  )
                })
              )}
            </div>
          </div>
        )}

        <p style={{ marginTop: '48px', fontSize: '12px', color: C.dim2, textAlign: 'center' }}>
          Title character limit: 60 &nbsp;·&nbsp; Description limit: 160 &nbsp;·&nbsp; Yellow = approaching limit &nbsp;·&nbsp; Red = over limit
        </p>
      </div>
    </div>
  )
}
