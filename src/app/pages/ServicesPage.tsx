import { useState } from 'react'
import { Package, Building2, Factory, Lock, Users } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import svcImg1 from '@/assets/uploads/services 1.png'
import svcImg2 from '@/assets/uploads/services2.png'
import svcImg3 from '@/assets/uploads/service3.png'
import svcImg4 from '@/assets/uploads/recycling-world.jpeg'
import svcImg5 from '@/assets/uploads/waste.jpeg'
import docDestructionImg from '@/assets/uploads/document destructions.png'
import africaMap from '@/assets/uploads/africa-2.png'

const SVC_IMGS = [svcImg1, svcImg2, svcImg3, svcImg4, svcImg5]

const servicesTop = [
  {
    icon: <Package size={20} color="#fff" />,
    title: 'Waste Paper Collection',
    img: SVC_IMGS[0],
    items: ['Brown Waste Paper', 'Kraft Paper', 'White Office Paper', 'Mixed Paper'],
  },
  {
    icon: <Building2 size={20} color="#fff" />,
    title: 'Corporate Recycling Programs',
    img: SVC_IMGS[1],
    items: ['Reduce waste disposal costs', 'Improve recycling rates', 'Meet ESG goals', 'Improve sustainability reporting'],
  },
  {
    icon: <Factory size={20} color="#fff" />,
    title: 'Industrial Waste Recovery',
    img: SVC_IMGS[2],
    items: ['Manufacturing facilities', 'Packaging companies', 'Warehouses', 'Distribution centers', 'Retail chains'],
  },
]

const servicesBot = [
  {
    icon: <Lock size={20} color="#fff" />,
    title: 'Secure Document Destruction',
    img: docDestructionImg,
    imgPosition: 'center 58%',
    items: ['Banks', 'Insurance companies', 'Government institutions', 'Corporate offices'],
  },
  {
    icon: <Users size={20} color="#fff" />,
    title: 'Nationwide Collection Partnerships',
    img: africaMap,
    imgPosition: 'center 52%',
    items: ['Waste collectors', 'Collection centers', 'Aggregators', 'County-level partners'],
  },
]

export default function ServicesPage() {
  useReveal()

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg,#0a1940,#0d2d5e)',
        padding: '80px 60px 60px',
      }}>
        <div className="tag reveal" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4ade80', marginBottom: '12px' }}>What We Offer</div>
        <h2 className="reveal" style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>Sustainable Waste Management Solutions</h2>
        <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', margin: 0 }}>Comprehensive recovery services tailored to your business needs.</p>
      </div>

      {/* Top 3 cards */}
      <div className="svc-grid-top">
        {servicesTop.map((s, i) => (
          <SvcCard key={i} service={s} delay={`d${i+1}`} />
        ))}
      </div>

      {/* Bottom 2 cards */}
      <div className="svc-grid-bot">
        {servicesBot.map((s, i) => (
          <SvcCard key={i} service={s} delay={`d${i+1}`} />
        ))}
      </div>

      <div className="site-divider" />
    </div>
  )
}

function SvcCard({ service, delay }: { service: any; delay: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`reveal ${delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff', border: `1.5px solid ${hovered ? '#22c55e' : '#e2e8f0'}`,
        borderRadius: '18px', overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
        transform: hovered ? 'translateY(-12px) scale(1.01)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? '0 28px 56px rgba(34,197,94,0.2)' : '0 4px 12px rgba(10,25,64,0.05)',
      }}
    >
      <div style={{
        height: '180px', overflow: 'hidden', position: 'relative',
        background: service.darkBg ? 'linear-gradient(135deg,#0d3d1f,#0a1940)' : (service.imgBg || undefined),
      }}>
        {!service.darkBg && (
          <img
            src={service.img}
            alt={service.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: service.imgPosition || 'center', display: 'block', transition: 'transform 0.65s cubic-bezier(0.165, 0.84, 0.44, 1)', transform: hovered ? 'scale(1.035)' : 'scale(1)' }}
          />
        )}
        {service.darkBg && (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={48} color="#22c55e" />
          </div>
        )}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          width: '44px', height: '44px', borderRadius: '10px',
          background: 'rgba(10,25,64,0.8)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {service.icon}
        </div>
      </div>
      <div style={{ padding: '22px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0a1940', marginBottom: '12px' }}>{service.title}</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {service.items.map((item: string, i: number) => (
            <li key={i} style={{
              fontSize: '13px', color: '#64748b', padding: '6px 0',
              borderBottom: i < service.items.length - 1 ? '1px solid #f1f5f9' : 'none',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', flexShrink: 0, display: 'inline-block' }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
