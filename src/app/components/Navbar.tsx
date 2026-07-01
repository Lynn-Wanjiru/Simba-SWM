import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 60px',
        background: scrolled ? 'rgba(10,25,64,0.99)' : 'rgba(10,25,64,0.96)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        transition: 'all 0.3s',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <Logo height={42} />
        <span style={{ fontSize: '16px', fontWeight: 800, color: '#fff', letterSpacing: '0.2px' }}>
          Simba <span style={{ color: '#22c55e' }}>Waste Management</span>
        </span>
      </Link>

      {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden-mobile">
        {links.slice(0, -1).map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color: location.pathname === link.to ? '#22c55e' : '#ffffff',
              fontSize: '13px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s',
            }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://wa.me/254780450892?text=Hello%20Simba%20Waste%20Management%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'linear-gradient(135deg,#22c55e,#16a34a)',
            color: '#fff', padding: '9px 22px', borderRadius: '7px',
            fontSize: '13px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
            textDecoration: 'none',
          }}
        >
          Reach Us
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' }}
        className="show-mobile"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '68px', left: 0, right: 0,
          background: 'rgba(10,25,64,0.99)', padding: '16px 24px',
          display: 'flex', flexDirection: 'column', gap: '12px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: location.pathname === link.to ? '#22c55e' : '#ffffff',
                fontSize: '15px', fontWeight: 600, textDecoration: 'none', padding: '8px 0',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
