import { useState, type ReactNode } from 'react'
import { Leaf, ShieldCheck, Handshake, Lightbulb, BarChart2, Target, Globe } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import aboutMain from '@/assets/uploads/Africa.jpeg'
import aboutAccent from '@/assets/uploads/plant-image.png'

const ABOUT_MAIN = aboutMain
const ABOUT_ACCENT = aboutAccent

const values = [
  { icon: <Leaf size={28} color="#22c55e" />, title: 'Sustainability', desc: 'Protecting the environment through responsible resource recovery.' },
  { icon: <ShieldCheck size={28} color="#22c55e" />, title: 'Integrity', desc: 'Operating with transparency and accountability.' },
  { icon: <Handshake size={28} color="#22c55e" />, title: 'Partnership', desc: 'Building long-term relationships with customers, suppliers, and communities.' },
  { icon: <Lightbulb size={28} color="#22c55e" />, title: 'Innovation', desc: 'Continually improving recovery and recycling systems.' },
  { icon: <BarChart2 size={28} color="#22c55e" />, title: 'Impact', desc: 'Creating measurable environmental and economic value.' },
]

export default function AboutPage() {
  useReveal()

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* About section */}
      <section style={{ padding: '96px 60px', background: '#f8faff' }}>
        <div className="about-grid">
          <div className="rl" style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '560px', margin: '0 auto' }}>
            <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(10,25,64,0.15)', background: '#eef6f0' }}>
              <img
                src={ABOUT_MAIN}
                alt="Africa map - building circular economy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </div>
            <div
              style={{
                position: 'absolute', right: 'clamp(12px,3vw,20px)', bottom: 'clamp(12px,2.5vw,18px)',
                width: 'clamp(110px, 18vw, 160px)', height: 'clamp(88px, 14vw, 118px)', borderRadius: '14px', overflow: 'hidden',
                border: '3px solid #fff', boxShadow: '0 12px 28px rgba(10,25,64,0.16)',
                background: '#ffffff', zIndex: 3, transform: 'translateZ(0)',
              }}
            >
              <img
                src={aboutAccent}
                alt="Plant image"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </div>
          </div>

          <div className="rr">
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#22c55e', marginBottom: '12px' }}>Who We Are</div>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, color: '#0a1940', lineHeight: 1.15, marginBottom: '14px' }}>Building East Africa's Circular Economy</h2>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.8, marginBottom: '20px' }}>
              Simba Waste Management was established with a simple vision: To create a more sustainable future by building efficient waste recovery systems that benefit businesses, communities, and the environment.
            </p>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.8, marginBottom: '20px' }}>
              Today, Simba partners with collectors, aggregators, manufacturers, and recycling mills across Kenya to recover thousands of tons of recyclable materials annually.
            </p>

            <div className="mission-vision-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '32px' }}>
              <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '22px', borderLeft: '3px solid #22c55e' }}>
                <h4 style={{ fontSize: '12px', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Target size={14} /> Our Mission
                </h4>
                <p style={{ fontSize: '13px', color: '#166534', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>To provide innovative and sustainable waste recovery solutions that maximize resource value while minimizing environmental impact.</p>
              </div>
              <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '22px', borderLeft: '3px solid #22c55e' }}>
                <h4 style={{ fontSize: '12px', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={14} /> Our Vision
                </h4>
                <p style={{ fontSize: '13px', color: '#166534', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>To become East Africa's leading resource recovery and circular economy partner.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div style={{ marginTop: '80px' }}>
          <div className="tag reveal" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#22c55e', marginBottom: '12px' }}>Our Core Values</div>
          <h2 className="reveal" style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, color: '#0a1940', lineHeight: 1.15 }}>What Drives Us</h2>

          <div className="values-grid">
            {values.map((v, i) => (
              <ValCard key={i} icon={v.icon} title={v.title} desc={v.desc} delay={`d${(i%4)+1}`} />
            ))}
          </div>
        </div>
      </section>

      <div className="site-divider" />
    </div>
  )
}

function ValCard({ icon, title, desc, delay }: { icon: ReactNode; title: string; desc: string; delay: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`val reveal ${delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff', border: `1.5px solid ${hovered ? '#22c55e' : '#e2e8f0'}`,
        borderRadius: '14px', padding: '24px 18px', textAlign: 'center',
        transition: 'all 0.3s',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(34,197,94,0.1)' : 'none',
        cursor: 'default',
      }}
    >
      <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{icon}</div>
      <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0a1940', marginBottom: '6px' }}>{title}</h4>
      <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.55, margin: 0 }}>{desc}</p>
    </div>
  )
}
