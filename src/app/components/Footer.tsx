import { Link } from 'react-router-dom'
import Logo from './Logo'

const footerLinkStyle = {
  fontSize: '13px',
  color: '#ffffff',
  textDecoration: 'none',
  transition: 'color 0.2s',
}

const headingStyle = {
  fontSize: '11px',
  fontWeight: 800,
  color: 'rgba(255,255,255,0.85)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.8px',
  marginBottom: '18px',
}

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: '#07090f', padding: '64px 60px 0' }}>
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo height={56} />
          <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#fff', margin: '14px 0 4px' }}>
            Simba Waste Management
          </h3>
          <div style={{ fontSize: '11px', color: '#22c55e', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
            Recover | Recycle | Reimagine
          </div>
          <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.7, maxWidth: '220px' }}>
            Kenya's leading waste paper recovery and recycling partner. Building a sustainable future through responsible resource recovery.
          </p>
        </div>

        <div className="footer-section footer-section--quick">
          <h5 style={headingStyle}>Quick Links</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/sustainability', 'Sustainability']].map(([to, label]) => (
              <li key={to} style={{ padding: '5px 0' }}>
                <Link
                  to={to}
                  style={footerLinkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section footer-section--services">
          <h5 style={headingStyle}>Services</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Paper Collection', 'Corporate Programs', 'Industrial Recovery', 'Doc Destruction'].map(s => (
              <li key={s} style={{ padding: '5px 0' }}>
                <Link
                  to="/services"
                  style={footerLinkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section footer-section--contact">
          <h5 style={headingStyle}>Contact</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '5px 0' }}>
              <span style={{ fontSize: '13px', color: '#ffffff' }}>Apricot Suites 4th Parklands Number 302</span>
            </li>
            <li style={{ padding: '5px 0' }}>
              <a
                href="mailto:info@simbawaste.co.ke?subject=Hello%20Simba%20Waste%20Management"
                style={footerLinkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
                onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
              >
                info@simbawaste.co.ke
              </a>
            </li>
            <li style={{ padding: '5px 0' }}>
              <a
                href="tel:+254780450892"
                style={footerLinkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
                onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
              >
                +254 780 450892
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <p style={{ fontSize: '12px', color: '#ffffff', margin: 0 }}>
          (c) 2026 Simba Waste Management (K) Limited. All rights reserved.
        </p>
        <p style={{ fontSize: '12px', color: '#ffffff', margin: 0 }}>
          Recycling for a Better Tomorrow
        </p>
      </div>
    </footer>
  )
}
