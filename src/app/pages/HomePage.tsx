import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Package, RefreshCw, Factory, Truck, Play, Recycle } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
// Logo removed from hero overlay per design request
import videoSrc from '@/imports/corporate-recycling-industry-video-for-an-africa-w.mp4'
import heroImg from '@/assets/uploads/industrial-waste.jpeg'
import binImg from '@/assets/uploads/bin-image.png'
import mosaicImg1 from '@/assets/uploads/paper-collection.jpeg'
import mosaicImg2 from '@/assets/uploads/people-working.jpeg'
import mosaicImg3 from '@/assets/uploads/recycling-world.jpeg'
import mosaicImg4 from '@/assets/uploads/threading.jpeg'
import mosaicImg5 from '@/assets/uploads/station-car2.jpeg'

const HERO_IMG = heroImg

const MOSAIC_IMGS = [mosaicImg1, mosaicImg2, mosaicImg3, mosaicImg4, mosaicImg5]

const wwdCards = [
  { icon: <Package size={32} color="#22c55e" />, title: 'Waste Paper Collection', desc: 'Collection and aggregation of recyclable paper materials from businesses, institutions, warehouses, retailers, and industrial facilities.' },
  { icon: <RefreshCw size={32} color="#22c55e" />, title: 'Sorting & Processing', desc: 'Materials are professionally sorted and graded to maximize recovery and recycling efficiency.' },
  { icon: <Factory size={32} color="#22c55e" />, title: 'Sustainable Recycling Solutions', desc: 'We work closely with paper manufacturers and recycling mills to ensure recovered materials are reintroduced into the production cycle.' },
  { icon: <Truck size={32} color="#22c55e" />, title: 'Logistics & Supply Chain Support', desc: 'Our collection network ensures efficient movement of recyclable materials throughout Kenya.' },
]

const stats = [
  { n: 1500, suffix: '+', l: 'Tons Recovered Monthly' },
  { n: 1500, suffix: '+', l: 'Nationwide Collection Network' },
  { n: 'Multiple', l: 'Strategic Collection Sites' },
  { n: 'Trusted', l: 'Industry Partnerships' },
]

function AnimatedCount({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frameId = 0
    let timeoutId = window.setTimeout(() => {
      let startTime: number | null = null
      const duration = 1400

      const tick = (currentTime: number) => {
        if (startTime === null) startTime = currentTime

        const progress = Math.min((currentTime - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.floor(target * eased))

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick)
        }
      }

      frameId = window.requestAnimationFrame(tick)
    }, 150)

    return () => {
      window.clearTimeout(timeoutId)
      window.cancelAnimationFrame(frameId)
    }
  }, [target])

  return <>{new Intl.NumberFormat('en-US').format(value)}{suffix}</>
}

export default function HomePage() {
  useReveal()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause()
        setVideoPlaying(false)
      } else {
        videoRef.current.play()
        setVideoPlaying(true)
      }
    }
  }

  return (
    <div>
      {/* HERO */}
      <section className="home-hero" style={{
        minHeight: '100vh', position: 'relative',
        display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center',
        padding: '120px 60px 80px', gap: '60px',
        background: 'linear-gradient(135deg,#0a1940 0%,#0d2d5e 55%,#0a3d2e 100%)',
        overflow: 'visible',
      }}>
        {/* Orbs */}
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,197,94,0.12),transparent 70%)', top: '-150px', left: '-100px', animation: 'orbFloat 8s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,197,94,0.08),transparent 70%)', bottom: '-100px', right: '-80px', animation: 'orbFloat 10s ease-in-out infinite 4s', pointerEvents: 'none' }} />

        {/* Particles */}
        {[{w:5,l:'12%',d:'14s',del:'0s'},{w:3,l:'28%',d:'18s',del:'3s'},{w:6,l:'65%',d:'12s',del:'6s'},{w:4,l:'82%',d:'16s',del:'1.5s'}].map((p,i) => (
          <div key={i} style={{ position: 'absolute', width: `${p.w}px`, height: `${p.w}px`, borderRadius: '50%', background: i%2===0?'#22c55e':'#4ade80', left: p.l, animation: `particleRise linear infinite ${p.d}`, animationDelay: p.del, pointerEvents: 'none' }} />
        ))}

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="anim-fade-down" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
            color: '#4ade80', fontSize: '11px', fontWeight: 700,
            padding: '6px 16px', borderRadius: '50px', marginBottom: '28px',
            letterSpacing: '1px', textTransform: 'uppercase',
          }}>
            <Recycle size={14} /> Kenya's Circular Economy Leader
          </div>

          <h1 className="anim-fade-up-1" style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 'clamp(36px,5vw,58px)', fontWeight: 900,
            color: '#fff', lineHeight: 1.08, marginBottom: '22px',
          }}>
            Transforming Waste<br />Into <span style={{ color: '#22c55e' }}>Sustainable Value</span>
          </h1>

          <p className="anim-fade-up-2" style={{
            color: 'rgba(255,255,255,0.68)', fontSize: '16px', lineHeight: 1.75,
            maxWidth: '520px', marginBottom: '40px',
          }}>
            Simba Waste Management is one of Kenya's leading waste paper recovery and recycling partners, connecting businesses, institutions, collectors, and paper mills through a reliable and environmentally responsible collection network.
          </p>

          <div className="anim-fade-up-3" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a id="reach-us-btn" href="https://wa.me/254780450892?text=Hello%20Simba%20Waste%20Management%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noreferrer" style={{
              background: 'linear-gradient(135deg,#22c55e,#16a34a)', color: '#fff',
              padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '14px',
              cursor: 'pointer', border: 'none', textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(34,197,94,0.35)', display: 'inline-block',
            }}>Reach Us</a>
            <Link to="/" onClick={() => document.getElementById('video-sec')?.scrollIntoView({ behavior: 'smooth' })} style={{
              background: 'rgba(255,255,255,0.08)', color: '#fff',
              padding: '14px 32px', borderRadius: '8px', fontWeight: 600, fontSize: '14px',
              cursor: 'pointer', border: '1.5px solid rgba(255,255,255,0.2)',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              <Play size={14} fill="#fff" /> How It Works
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="anim-fade-up-4 hero-image-col" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-image-frame" style={{
            position: 'relative', overflow: 'hidden', borderRadius: '24px',
            background: '#ffffff', border: 'none', boxShadow: 'none',
          }}>
            <img
              className="hero-image"
              src={HERO_IMG}
              alt="Recycling operations"
              style={{ width: '100%', height: 'min(60vh,640px)', objectFit: 'cover', objectPosition: 'center center', display: 'block', filter: 'brightness(1.25) contrast(1.18) saturate(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
            {/* Dark overlay removed for clarity; logo overlay already removed */}
          </div>
          <div className="hero-stat-badge" style={{
            position: 'absolute', bottom: '-50px', left: '24px',
            background: '#fff', borderRadius: '14px', padding: '14px 20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#0a1940', fontFamily: "'Poppins',sans-serif" }}><AnimatedCount target={1500} suffix="+" /></div>
            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500, lineHeight: 1.4 }}>Tons Recovered<br />Every Month</div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '32px', left: '50%',
          color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          animation: 'scrollBounce 2.5s ease-in-out infinite',
        }}>
          <div style={{ width: '1.5px', height: '40px', background: 'linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,0.3))' }} />
          <span>SCROLL</span>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .home-hero {
              grid-template-columns: 1fr !important;
              padding: 92px 20px 56px !important;
              min-height: auto !important;
              gap: 34px !important;
              overflow: hidden !important;
            }

            .hero-image-col {
              width: 100% !important;
              max-width: 420px !important;
              margin: 0 auto !important;
            }

            .hero-image-frame {
              border-radius: 20px !important;
              aspect-ratio: auto !important;
              background: transparent !important;
            }

            .hero-image {
              width: 100% !important;
              height: auto !important;
              object-fit: contain !important;
              object-position: center center !important;
            }

            .hero-stat-badge {
              bottom: -28px !important;
              left: 16px !important;
              padding: 10px 14px !important;
              gap: 8px !important;
            }
          }
        `}</style>
      </section>

      {/* STATS BAR */}
      <div className="stats-grid reveal" style={{ background: '#0a1940', borderBottom: '3px solid #22c55e' }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: '32px 24px', textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            transition: 'all 0.45s cubic-bezier(0.165, 0.84, 0.44, 1)', cursor: 'default',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(34,197,94,0.1)', e.currentTarget.style.transform = 'scale(1.02)')}  
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.transform = 'scale(1)')}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '36px', fontWeight: 900, color: '#22c55e', lineHeight: 1 }}>
              {typeof s.n === 'number' ? <AnimatedCount target={s.n} suffix={s.suffix} /> : s.n}
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* WHAT WE DO */}
      <section className="wwd-section" style={{ padding: '96px 60px' }}>
        <div className="tag reveal" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#22c55e', marginBottom: '12px' }}>What We Do</div>
        <h2 className="reveal" style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, color: '#0a1940', lineHeight: 1.15, marginBottom: '14px' }}>Comprehensive Recycling Services</h2>
        <p className="reveal" style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.75, maxWidth: '520px', marginBottom: '52px' }}>End-to-end waste paper recovery solutions designed for businesses and institutions across Kenya.</p>

        <div className="wwd-grid">
          {wwdCards.map((c, i) => (
            <WwdCard key={i} icon={c.icon} title={c.title} desc={c.desc} delay={`d${i+1}`} />
          ))}
        </div>

        {/* Mosaic */}
        <div className="mosaic reveal">
          {MOSAIC_IMGS.map((src, i) => (
            <div key={i} className={`mosaic-item${i === 0 ? ' tall' : ''}`}>
              <img src={src} alt={`Recycling operation ${i+1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE CALLOUT */}
      <div style={{
        background: 'linear-gradient(135deg,#0a1940,#0d3d1f)',
        borderRadius: '24px', padding: '64px', margin: '0 60px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          content: '""', position: 'absolute', fontSize: '300px', fontWeight: 900,
          color: 'rgba(34,197,94,0.05)', top: '-60px', left: '30px', lineHeight: 1,
          fontFamily: "'Poppins',sans-serif", pointerEvents: 'none', userSelect: 'none',
        }}>"</div>
        <div style={{ width: '4px', height: '48px', background: '#22c55e', borderRadius: '2px', marginBottom: '24px' }} />
        <blockquote style={{ fontSize: 'clamp(17px,2.2vw,22px)', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, fontWeight: 300, fontStyle: 'italic', maxWidth: '820px', margin: 0 }}>
          "In nature there is no such thing as waste. In nature nothing is wasted; everything is recycled."
          <br /><br />
          <span style={{ color: '#4ade80', fontWeight: 700, fontStyle: 'normal' }}>— David Suzuki</span>
        </blockquote>
      </div>
      <div style={{ height: '96px', background: '#fff' }} />

      {/* VIDEO SECTION */}
      <section id="video-sec" style={{
        padding: '96px 60px',
        background: 'linear-gradient(135deg,#0a1940,#0a3d2e)',
        color: '#fff',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div className="tag reveal" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4ade80', marginBottom: '12px' }}>See Us In Action</div>
          <h2 className="reveal" style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: '14px' }}>Watch How We Work</h2>
          <p className="reveal" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto 0' }}>From collection to recycling — see the full Simba process in action.</p>
        </div>

        <div className="reveal" style={{
          maxWidth: '860px', margin: '48px auto 0', borderRadius: '20px', overflow: 'hidden',
          border: '2px solid rgba(34,197,94,0.2)', position: 'relative', aspectRatio: '16/9',
          background: 'linear-gradient(135deg,#0d2d5e,#0a3d2e)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
        }}>
            <video
              ref={videoRef}
              src={videoSrc}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', background: '#0a1940' }}
              playsInline
              preload="metadata"
              poster={binImg}
              onEnded={() => {
                if (videoRef.current) {
                  try {
                    videoRef.current.pause()
                    videoRef.current.currentTime = 0
                    // reload to show poster image again
                    videoRef.current.load()
                  } catch (e) {
                    // ignore
                  }
                }
                setVideoPlaying(false)
              }}
            />
          {!videoPlaying && (
            <div
              onClick={handlePlayVideo}
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', background: 'rgba(0,0,0,0.2)',
              }}
            >
              {/* Ripple rings */}
              {[0, 0.6, 1.2].map((delay, i) => (
                <div key={i} style={{
                  position: 'absolute', width: '80px', height: '80px', borderRadius: '50%',
                  border: '2px solid rgba(34,197,94,0.4)',
                  animation: `rippleAnim 2s ease-out infinite`,
                  animationDelay: `${delay}s`,
                }} />
              ))}
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                background: 'linear-gradient(135deg,#22c55e,#16a34a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(34,197,94,0.5)',
                position: 'relative', zIndex: 1,
                transition: 'transform 0.2s',
              }}>
                <Play size={32} fill="#fff" color="#fff" style={{ marginLeft: '4px' }} />
              </div>
            </div>
          )}
          {videoPlaying && (
            <div
              onClick={handlePlayVideo}
              style={{ position: 'absolute', inset: 0, cursor: 'pointer' }}
            />
          )}
        </div>
      </section>

      <div className="site-divider" />
    </div>
  )
}

function WwdCard({ icon, title, desc, delay }: { icon: ReactNode; title: string; desc: string; delay: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`reveal ${delay} wwd-item`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff', border: `1.5px solid ${hovered ? '#22c55e' : '#e2e8f0'}`,
        borderRadius: '16px', padding: '28px 22px', position: 'relative', overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
        transform: hovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? '0 24px 48px rgba(34,197,94,0.15)' : '0 4px 12px rgba(10,25,64,0.05)',
        cursor: 'default',
      }}
    >
      <div style={{ marginBottom: '16px', display: 'block' }}>{icon}</div>
      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0a1940', marginBottom: '10px' }}>{title}</h3>
      <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.7, margin: 0 }}>{desc}</p>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(90deg,#22c55e,#0a1940)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left', transition: 'transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
      }} />
    </div>
  )
}
