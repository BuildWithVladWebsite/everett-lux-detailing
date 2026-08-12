import { useParams, Link } from 'react-router'
import { C } from '../data'
import { BLOG_POSTS } from '../blog-data'
import { Reveal, BtnPrimary } from '../components/Shared'
import type { Section } from '../blog-data'
import SEOMeta from '../components/SEOMeta'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find(p => p.slug === slug)
  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <div style={{ background: C.dark, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '72px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '64px', marginBottom: '16px' }}>🔍</p>
          <h1 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: '48px', textTransform: 'uppercase', color: C.text, marginBottom: '12px' }}>Post Not Found</h1>
          <Link to="/blog" style={{ color: C.cyan, textDecoration: 'none', fontSize: '14px' }}>← Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: C.dark }}>
      <SEOMeta
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '480px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', paddingTop: '72px' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,8,15,1) 0%, rgba(6,8,15,0.5) 60%, transparent 100%)' }} />
        </div>
        <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto', padding: '80px 28px 56px', width: '100%' }}>
          {/* Breadcrumb */}
          <div className="fade-up" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <Link to="/" style={{ fontSize: '12px', color: C.dim, textDecoration: 'none' }}>Home</Link>
            <span style={{ color: C.dim2 }}>›</span>
            <Link to="/blog" style={{ fontSize: '12px', color: C.dim, textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: C.dim2 }}>›</span>
            <span style={{ fontSize: '12px', color: C.cyan }}>{post.category}</span>
          </div>
          <div className="fade-up" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#06080f', background: C.blue, fontWeight: 800, padding: '4px 10px' }}>{post.category}</span>
            <span style={{ fontSize: '13px', color: C.dim }}>{post.date}</span>
            <span style={{ fontSize: '13px', color: C.dim }}>·</span>
            <span style={{ fontSize: '13px', color: C.dim }}>{post.readTime}</span>
          </div>
          <h1 className="fade-up-1" style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(32px,5vw,60px)', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-0.01em', color: C.text }}>
            {post.title}
          </h1>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${C.cyan}, ${C.blue}, transparent)` }} />
      </section>

      {/* Article body */}
      <section style={{ padding: '64px 0 80px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 28px' }}>
          {/* Excerpt lede */}
          <Reveal>
            <p style={{ fontSize: '18px', color: C.text, lineHeight: 1.8, fontWeight: 400, borderLeft: `3px solid ${C.cyan}`, paddingLeft: '20px', marginBottom: '48px' }}>
              {post.excerpt}
            </p>
          </Reveal>

          {post.content.map((block, i) => (
            <Reveal key={i} delay={0.04}>
              <ContentBlock block={block} />
            </Reveal>
          ))}

          {/* Author / CTA footer */}
          <Reveal>
            <div style={{ marginTop: '64px', padding: '36px', background: C.surface, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0, fontWeight: 800, color: '#06080f', fontFamily: "'Barlow Condensed',system-ui,sans-serif" }}>EL</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', color: C.text, letterSpacing: '0.04em' }}>Everett Lux Detailing</div>
                <p style={{ fontSize: '13px', color: C.dim, marginTop: '4px', fontWeight: 300 }}>Professional mobile auto detailing in Everett, WA. Questions about your vehicle? Give us a call.</p>
              </div>
              <BtnPrimary href="tel:4252300876">📞 Call Us</BtnPrimary>
            </div>
          </Reveal>

          {/* Back link */}
          <div style={{ marginTop: '32px' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: C.cyan, textDecoration: 'none', fontWeight: 600, letterSpacing: '0.06em' }}>
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section style={{ padding: '64px 0 80px', background: C.dark2, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(24px,3vw,40px)', textTransform: 'uppercase', marginBottom: '36px' }}>
              More from the <span className="cyan-shimmer">Blog</span>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }} className="three-col">
            {related.map((rp, i) => (
              <Reveal key={rp.slug} delay={i * 0.07}>
                <Link to={`/blog/${rp.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ background: C.surface, border: `1px solid ${C.border}`, overflow: 'hidden', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = C.borderB)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                  >
                    <div style={{ height: '160px', overflow: 'hidden' }}>
                      <img src={rp.img} alt={rp.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)', transition: 'transform 0.5s' }}
                        onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'}
                        onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
                      />
                    </div>
                    <div style={{ padding: '18px' }}>
                      <span style={{ fontSize: '10px', color: C.cyan, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{rp.category}</span>
                      <h3 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '17px', textTransform: 'uppercase', color: C.text, marginTop: '6px', lineHeight: 1.15 }}>{rp.title}</h3>
                      <div style={{ marginTop: '12px', fontSize: '12px', color: C.cyan, fontWeight: 600 }}>Read →</div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ContentBlock({ block }: { block: Section }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(22px,2.5vw,30px)', textTransform: 'uppercase', letterSpacing: '0.02em', color: C.text, marginTop: '44px', marginBottom: '14px', lineHeight: 1.1 }}>
          {block.text}
        </h2>
      )
    case 'paragraph':
      return (
        <p style={{ fontSize: '16px', color: C.dim, lineHeight: 1.9, fontWeight: 300, marginBottom: '20px' }}>
          {block.text}
        </p>
      )
    case 'list':
      return (
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0 24px', padding: 0 }}>
          {block.items?.map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: C.dim, fontWeight: 300, lineHeight: 1.6 }}>
              <span style={{ color: C.cyan, fontWeight: 700, fontSize: '12px', flexShrink: 0, marginTop: '4px' }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      )
    case 'tip':
      return (
        <div style={{ background: 'rgba(0,200,255,0.07)', border: `1px solid rgba(0,200,255,0.22)`, borderLeft: `3px solid ${C.cyan}`, padding: '18px 22px', margin: '24px 0', borderRadius: '0 2px 2px 0' }}>
          <p style={{ fontSize: '14px', color: C.text, lineHeight: 1.7, fontWeight: 400 }}>{block.text}</p>
        </div>
      )
    default:
      return null
  }
}
