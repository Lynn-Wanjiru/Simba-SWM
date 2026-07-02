import { useState, useEffect, useRef, type ReactNode } from 'react'
import { Sprout, FileBarChart2, Recycle, Target, Users, TrendingDown, Leaf, Zap, Wind } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import sustainabilityHero from '@/assets/uploads/sustainablility.png'

const SUS_HERO = sustainabilityHero

const kpis = [
  {
    pct: 98,
    label: 'Client Waste Diversion Rate',
    desc: '98% of collected waste is diverted from landfill through recycling and recovery.',
    icon: <TrendingDown size={20} color="#22c55e" />,
  },
  {
    pct: 85,
    label: 'Recycling Recovery',
    desc: '85% of recyclable materials are recovered and returned into productive use.',
    icon: <Recycle size={20} color="#22c55e" />,
  },
  {
    pct: 60,
    label: 'Carbon Reduction',
    desc: 'Helping reduce emissions through responsible waste management.',
    icon: <Wind size={20} color="#22c55e" />,
  },
  {
    pct: 100,
    label: 'ESG Reporting',
    desc: 'Every corporate client receives sustainability reporting.',
    icon: <FileBarChart2 size={20} color="#22c55e" />,
  },
]

const commitments = [
  'Expanding recycling access across Kenya and neighbouring countries',
  'Supporting responsible waste management practices',
  'Creating economic opportunities through resource recovery',
  'Helping businesses achieve sustainability goals',
  'Driving measurable environmental impact',
]

const esgTags = [
  { icon: <Sprout size={13} />, label: 'Environmental Performance' },
  { icon: <FileBarChart2 size={13} />, label: 'Sustainability Reporting' },
  { icon: <Recycle size={13} />, label: 'Circular Economy' },
  { icon: <Target size={13} />, label: 'Waste Diversion' },
  { icon: <Users size={13} />, label: 'CSR Programs' },
]

const CIRC = 2 * Math.PI * 35

function KpiRing({ pct, label, desc, icon }: { pct: number; label: string; desc: string; icon: ReactNode }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setAnimated(true); obs.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const offset = animated ? CIRC * (1 - pct / 100) : CIRC

  return (
    <div
      ref={ref}
      className="reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff', border: `1.5px solid ${hovered ? '#22c55e' : '#e2e8f0'}`,
        borderRadius: '16px', padding: '28px 20px', textAlign: 'center',
        transition: 'all 0.3s',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(34,197,94,0.1)' : 'none',
        cursor: 'default',
      }}
    >
      <div style={{ width: '90px', height: '90px', margin: '0 auto 18px', position: 'relative' }}>
        <svg width="90" height="90" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="45" cy="45" r="35" fill="none" stroke="#e2e8f0" strokeWidth="9" />
          <circle
            cx="45" cy="45" r="35" fill="none" stroke="#22c55e" strokeWidth="9"
            strokeDasharray={`${CIRC}`}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 2s ease 0.3s' }}
          />
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px', fontWeight: 900, color: '#0a1940', fontFamily: "'Poppins',sans-serif",
        }}>
          {pct}%
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '7px' }}>
        {icon}
        <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0a1940', margin: 0 }}>{label}</h4>
      </div>
      <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.55, margin: 0 }}>{desc}</p>
    </div>
  )
}

export default function SustainabilityPage() {
  useReveal()

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Sus HERO*/}
      <div
  className="sus-hero"
  style={{
    position: 'relative',
    overflow: 'hidden',
    minHeight: '420px',
  }}
>
        <img
  src={SUS_HERO}
  alt="Circular economy"
  style={{
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    filter: 'brightness(0.5)',
    display: 'block',
  }}
/>
        <div
  style={{
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.55))',
  }}
/>
        <div
  className="sus-hero-content"
  style={{
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '60px',
    zIndex: 2,
  }}
>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(30px,5vw,52px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
            Building a<br /><span style={{ color: '#4ade80' }}>Circular Economy</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.75, maxWidth: '580px', margin: 0 }}>
            At Simba Waste Management, waste is not waste. It is a valuable resource that can be recovered, reused, and returned to production. By recovering recyclable paper, we help reduce demand for virgin raw materials while supporting sustainable manufacturing practices.
          </p>
        </div>
      </div>

      <section className="sus-page-section" style={{ padding: '96px 60px' }}>
        {/* Environmental Impact */}
        <div className="tag reveal" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#22c55e', marginBottom: '12px' }}>Environmental Impact</div>
        <h2 className="reveal" style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, color: '#0a1940', lineHeight: 1.15, marginBottom: '14px' }}>Measurable Results</h2>
        <p className="reveal" style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.75, maxWidth: '520px', marginBottom: '52px' }}>
          Every ton of paper we recover creates real, measurable environmental benefits.
        </p>

        <div className="kpi-grid">
          {kpis.map((k, i) => <KpiRing key={i} {...k} />)}
        </div>

        {/* Commitment */}
        <div className="tag reveal" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#22c55e', marginBottom: '12px' }}>Our Commitment</div>
        <h2 className="reveal" style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, color: '#0a1940', lineHeight: 1.15, marginBottom: '32px' }}>What We Stand For</h2>

        <div className="commit-grid reveal">
          {commitments.map((c, i) => (
            <div key={i} style={{
              background: '#f0fdf4', borderLeft: '3px solid #22c55e', borderRadius: '10px',
              padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '14px',
              fontSize: '14px', color: '#166534', lineHeight: 1.5, fontWeight: 500,
            }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#22c55e', color: '#fff', fontSize: '13px', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {i + 1}
              </div>
              {c}
            </div>
          ))}
        </div>

        {/* ESG Box — green/navy palette */}
        <div className="reveal esg-card" style={{
          background: 'linear-gradient(135deg,#0a1940,#0d2d5e)',
          borderRadius: '22px', padding: '52px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '32px', flexWrap: 'wrap',
        }}>
          <div className="esg-card-copy" style={{ flex: 1, minWidth: '280px' }}>
            <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '30px', fontWeight: 900, color: '#22c55e', marginBottom: '14px' }}>ESG Partnership</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.75, maxWidth: '480px', marginBottom: '18px' }}>
              We actively support organizations seeking to strengthen their Environmental performance, Sustainability reporting, Circular economy initiatives, Waste diversion targets, and Corporate social responsibility programs.
            </p>
            <div className="esg-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {esgTags.map((t, i) => (
                <span key={i} className="esg-tag" style={{
                  background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)',
                  color: '#4ade80', fontSize: '11px', fontWeight: 700,
                  padding: '6px 14px', borderRadius: '50px',
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                }}>
                  {t.icon} {t.label}
                </span>
              ))}
            </div>
          </div>
          <a
            href="https://wa.me/254780450892?text=Hello%20Simba%20Waste%20Management%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="esg-card-cta"
            style={{
              background: 'linear-gradient(135deg,#22c55e,#16a34a)',
              color: '#fff', padding: '14px 30px', borderRadius: '8px',
              fontWeight: 800, fontSize: '14px', cursor: 'pointer', border: 'none',
              transition: 'all 0.2s', whiteSpace: 'nowrap', flexShrink: 0,
              textDecoration: 'none', display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(34,197,94,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Partner With Us →
          </a>
        </div>
      </section>

      <div className="site-divider" />
    </div>
  )
}
