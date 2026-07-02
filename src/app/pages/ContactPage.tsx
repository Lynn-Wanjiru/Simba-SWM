import { useState, type FormEvent } from 'react'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function ContactPage() {
  useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg,#0a1940,#0d2d5e)',
        padding: '80px 60px 60px',
      }}>
        <div className="tag reveal" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4ade80', marginBottom: '12px' }}>Get In Touch</div>
        <h2 className="reveal" style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>Partner With Simba</h2>
        <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', maxWidth: '540px', margin: 0 }}>
          Ready to start your waste recovery journey? Get in touch with our team today.
        </p>
      </div>

      <section style={{ padding: '96px 60px', background: '#f8faff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Contact info */}
          <div className="rl">
            <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '22px', fontWeight: 800, color: '#0a1940', marginBottom: '32px' }}>Contact Information</h3>

            {[
              { icon: <MapPin size={20} color="#22c55e" />, label: 'Location', value: 'Apricot Suites, 4th Parklands, Number 304' },
              { icon: <Mail size={20} color="#22c55e" />, label: 'Email', value: 'info@simbawaste.co.ke' },
              { icon: <Phone size={20} color="#22c55e" />, label: 'Phone', value: '+254 780 450892' },
              { icon: <Clock size={20} color="#22c55e" />, label: 'Hours', value: 'Mon–Fri: 8:00 AM – 5:30 PM' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '28px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#f0fdf4', border: '1px solid #dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '15px', color: '#0a1940', fontWeight: 500 }}>{item.value}</div>
                </div>
              </div>
            ))}

            <div style={{ background: 'linear-gradient(135deg,#0a1940,#0d3d1f)', borderRadius: '16px', padding: '28px', marginTop: '16px' }}>
              <h4 style={{ color: '#4ade80', fontWeight: 800, marginBottom: '10px', fontSize: '14px' }}>WhatsApp Us</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
                Quick responses via WhatsApp for enquiries and service requests.
              </p>
              <a
                href="https://wa.me/254780450892?text=Hello%20Simba%20Waste%20Management%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#25d366', color: '#fff', padding: '10px 20px',
                  borderRadius: '8px', fontWeight: 700, fontSize: '13px', textDecoration: 'none',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact form */}
      
      </section>

      <div className="site-divider" />
    </div>
  )
}
