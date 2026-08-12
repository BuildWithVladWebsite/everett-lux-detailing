import { useState } from 'react'
import { Link } from 'react-router'
import { C } from '../data'
import { BLOG_POSTS } from '../blog-data'
import { Reveal, PageHero, Shimmer } from '../components/Shared'
import SEOMeta from '../components/SEOMeta'
import SEO from '../seo-config'

const CATS = ['All', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))]

export default function Blog() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === cat)

  return (
    <div style={{ background: C.dark }}>
      <SEOMeta {...SEO.blog} />
      <PageHero
        eyebrow="Detailing Knowledge"
        title="The Detail"
        accent="Blog"
        sub="Tips, guides, and honest advice from the Everett Lux team — helping you get the most out of your vehicle."
        img="https://images.unsplash.com/photo-1622329821376-a19fd6002562?w=1600&h=700&fit=crop&auto=format"
      />

      <section style={{ padding: '64px 0 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          {/* Filter tabs */}
          <Reveal>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '48px' }}>
              {CATS.map(c => (
                <button key={c} onClick={() => setCat(c)}
                  style={{ padding: '9px 20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', background: cat === c ? C.blue : C.surface, color: cat === c ? '#06080f' : C.dim, border: `1px solid ${cat === c ? C.blue : C.border}`, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit' }}
                  onMouseEnter={e => { if (cat !== c) { (e.currentTarget as HTMLButtonElement).style.borderColor = C.cyan; (e.currentTarget as HTMLButtonElement).style.color = C.text } }}
                  onMouseLeave={e => { if (cat !== c) { (e.currentTarget as HTMLButtonElement).style.borderColor = C.border; (e.currentTarget as HTMLButtonElement).style.color = C.dim } }}
                >{c}</button>
              ))}
            </div>
          </Reveal>

          {/* Featured post (first) */}
          {cat === 'All' && (
            <Reveal>
              <Link to={`/blog/${filtered[0].slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', background: C.surface, border: `1px solid ${C.border}`, overflow: 'hidden', transition: 'border-color 0.2s' }} className="featured-post"
                  onMouseEnter={e => (e.currentTarget.style.borderColor = C.borderB)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                >
                  <div style={{ overflow: 'hidden', minHeight: '340px', position: 'relative' }}>
                    <img src={filtered[0].img} alt={filtered[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, filter: 'brightness(0.75)', transition: 'transform 0.5s, filter 0.4s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.9)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.75)' }}
                    />
                    <div style={{ position: 'absolute', top: '16px', left: '16px', background: C.blue, color: '#06080f', fontSize: '10px', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '4px 10px' }}>
                      Featured
                    </div>
                  </div>
                  <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.cyan, fontWeight: 700, border: `1px solid ${C.borderB}`, padding: '3px 8px' }}>{filtered[0].category}</span>
                      <span style={{ fontSize: '12px', color: C.dim }}>{filtered[0].date}</span>
                      <span style={{ fontSize: '12px', color: C.dim }}>{filtered[0].readTime}</span>
                    </div>
                    <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(22px,2.5vw,32px)', textTransform: 'uppercase', lineHeight: 1.05, color: C.text, marginBottom: '16px', letterSpacing: '-0.01em' }}>{filtered[0].title}</h2>
                    <p style={{ fontSize: '14px', color: C.dim, lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>{filtered[0].excerpt}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: C.cyan, fontWeight: 700, letterSpacing: '0.06em' }}>
                      Read Article <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Post grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }} className="blog-grid">
            {(cat === 'All' ? filtered.slice(1) : filtered).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ padding: '80px 28px', background: C.dark2, borderTop: `1px solid ${C.border}`, textAlign: 'center' }}>
        <Reveal>
          <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.cyan, marginBottom: '12px', fontWeight: 600 }}>Need Detailing Advice?</p>
          <h2 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,48px)', textTransform: 'uppercase', marginBottom: '16px' }}>
            Ask Us <Shimmer>Anything</Shimmer>
          </h2>
          <p style={{ fontSize: '15px', color: C.dim, maxWidth: '440px', margin: '0 auto 28px', fontWeight: 300, lineHeight: 1.7 }}>
            Not sure what your car needs? Call or text us — free advice, no obligation.
          </p>
          <a href="tel:4252300876" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: C.blue, color: '#06080f', textDecoration: 'none', fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = C.cyan)}
            onMouseLeave={e => (e.currentTarget.style.background = C.blue)}
          >📞 (425) 230-0876</a>
        </Reveal>
      </section>

      <style>{`
        @media(max-width:900px){.blog-grid{grid-template-columns:1fr 1fr!important}.featured-post{grid-template-columns:1fr!important}}
        @media(max-width:600px){.blog-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}

function PostCard({ post }: { post: typeof BLOG_POSTS[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ background: C.surface, border: `1px solid ${hov ? C.borderB : C.border}`, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'border-color 0.2s' }}
      >
        <div style={{ height: '200px', overflow: 'hidden', flexShrink: 0 }}>
          <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.72)', transition: 'transform 0.5s, filter 0.4s', transform: hov ? 'scale(1.05)' : 'scale(1)' }} />
        </div>
        <div style={{ padding: '22px 20px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: C.cyan, fontWeight: 700 }}>{post.category}</span>
            <span style={{ fontSize: '11px', color: C.dim }}>{post.readTime}</span>
          </div>
          <h3 style={{ fontFamily: "'Barlow Condensed',system-ui,sans-serif", fontWeight: 700, fontSize: '19px', textTransform: 'uppercase', lineHeight: 1.1, color: C.text, marginBottom: '10px', letterSpacing: '0.02em' }}>{post.title}</h3>
          <p style={{ fontSize: '13px', color: C.dim, lineHeight: 1.7, fontWeight: 300, flex: 1, marginBottom: '16px' }}>{post.excerpt}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${C.border}`, paddingTop: '14px', marginTop: 'auto' }}>
            <span style={{ fontSize: '12px', color: C.dim }}>{post.date}</span>
            <span style={{ fontSize: '12px', color: hov ? C.cyan : C.dim, transition: 'color 0.2s', fontWeight: 600 }}>Read →</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
