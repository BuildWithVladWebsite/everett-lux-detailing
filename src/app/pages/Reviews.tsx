import { C, TESTIMONIALS } from '../data'
import { Reveal, BtnPrimary, PageHero, Shimmer } from '../components/Shared'
import SEOMeta from '../components/SEOMeta'
import SEO from '../seo-config'

const GOOGLE_URL = 'https://share.google/wMGNfeejfoai1cIDX'

function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function GoogleStars({ n, size = 16 }: { n: number; size?: number }) {
  return (
    <span style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {[1,2,3,4,5].map(s => (
        <svg key={s} width={size} height={size} viewBox="0 0 24 24" fill={s <= n ? '#FBBC05' : '#3a4556'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </span>
  )
}

function GoogleReviewCard({ review, highlight = false }: { review: typeof TESTIMONIALS[0]; highlight?: boolean }) {
  return (
    <div style={{
      background: C.surface,
      border: `1px solid ${highlight ? 'rgba(66,133,244,0.35)' : C.border}`,
      padding: '28px',
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {highlight && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #4285F4, #34A853, #FBBC05, #EA4335)' }} />}

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
        {/* Avatar */}
        <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: review.avatarColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 800, color: '#fff', flexShrink: 0, fontFamily: "'Barlow Condensed', system-ui, sans-serif", letterSpacing: '0.04em' }}>
          {review.initials}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: C.text, lineHeight: 1.2 }}>{review.name}</div>
          <div style={{ fontSize: '11px', color: C.dim, marginTop: '2px' }}>{review.timeAgo}</div>
        </div>
        {/* Google logo top-right */}
        <GoogleLogo size={18} />
      </div>

      {/* Stars */}
      <GoogleStars n={review.stars} />

      {/* Review text */}
      <p style={{ fontSize: '14px', color: C.dim, lineHeight: 1.75, fontWeight: 300, margin: '12px 0 16px', flex: 1 }}>
        "{review.text}"
      </p>

      {/* Service tag */}
      <div style={{ fontSize: '11px', color: C.cyan, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, borderTop: `1px solid ${C.border}`, paddingTop: '12px', marginTop: 'auto' }}>
        {review.service}
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <div style={{ background: C.dark }}>
      <SEOMeta {...SEO.reviews} />
      <PageHero
        eyebrow="Customer Reviews"
        title="What Our"
        accent="Clients Say"
        img="https://images.unsplash.com/photo-1528597469186-bddab681a37f?w=1600&h=700&fit=crop&auto=format"
      />

      {/* Google rating hero block */}
      <section style={{ background: C.dark2, borderBottom: `1px solid ${C.border}`, padding: '56px 28px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            {/* Rating badge */}
            <a href={GOOGLE_URL} target="_blank" rel="noreferrer"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textDecoration: 'none', padding: '28px 40px', background: C.surface, border: '1px solid rgba(66,133,244,0.25)', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(66,133,244,0.6)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(66,133,244,0.25)')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <GoogleLogo size={28} />
                <span style={{ fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.dim, fontWeight: 500 }}>Google Reviews</span>
              </div>
              <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '72px', color: '#fff', lineHeight: 1 }}>5.0</div>
              <GoogleStars n={5} size={22} />
              <span style={{ fontSize: '13px', color: 'rgba(251,188,5,0.9)', fontWeight: 600, letterSpacing: '0.06em' }}>View on Google →</span>
            </a>

            <div style={{ width: '1px', height: '100px', background: C.border }} className="hide-mobile" />

            {/* Stats */}
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { num: '5.0', label: 'Average Rating', sub: 'Out of 5 stars' },
                { num: '100%', label: '5-Star Reviews', sub: 'Every single review' },
                { num: '500+', label: 'Happy Customers', sub: 'Across Snohomish County' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '48px', color: C.cyan, lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: C.text, marginTop: '6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
                  <div style={{ fontSize: '11px', color: C.dim, marginTop: '3px' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section style={{ padding: '80px 0 100px', background: C.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
              <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,52px)', textTransform: 'uppercase' }}>
                All <Shimmer>Reviews</Shimmer>
              </h2>
              <a href={GOOGLE_URL} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', border: '1px solid rgba(66,133,244,0.35)', textDecoration: 'none', fontSize: '12px', fontWeight: 600, color: C.dim, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(66,133,244,0.8)'; (e.currentTarget as HTMLAnchorElement).style.color = C.text }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(66,133,244,0.35)'; (e.currentTarget as HTMLAnchorElement).style.color = C.dim }}
              >
                <GoogleLogo size={14} /> View on Google
              </a>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }} className="three-col">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <GoogleReviewCard review={t} highlight={i === 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section style={{ background: C.dark2, borderTop: `1px solid ${C.border}`, padding: '64px 28px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <GoogleLogo size={36} />
            </div>
            <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(24px,3vw,44px)', textTransform: 'uppercase', marginBottom: '14px' }}>
              Had a Great Experience?
            </h2>
            <p style={{ fontSize: '15px', color: C.dim, maxWidth: '440px', margin: '0 auto 28px', fontWeight: 300, lineHeight: 1.7 }}>
              Sharing your experience on Google helps other drivers in Everett find quality detailing — and it means the world to our team.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={GOOGLE_URL} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: '#fff', color: '#444', textDecoration: 'none', fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f0f0f0')}
                onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
              >
                <GoogleLogo size={18} /> Write a Google Review
              </a>
              <BtnPrimary href="tel:4252300876">📞 Call Us</BtnPrimary>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
