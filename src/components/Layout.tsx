import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { company } from '../data'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
  { to: '/about-us', label: 'About Us' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the menu and scroll to top on navigation
  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  // Close the menu with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a className="skip" href="#main">Skip to main content</a>
            <header>
        <div className="wrap bar">
          <Link className="brand" to="/" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo image only - text element removed */}
            <img 
              src="/images/SimranLogo.webp" 
              alt="Simran Engg Industries" 
              style={{ height: '45px', width: 'auto', objectFit: 'contain' }} 
            />
          </Link>
          <button className="menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(o => !o)}>
            Menu
          </button>
          <nav id="nav" aria-label="Main" className={open ? 'open' : undefined}>
            <ul>
              {links.map(l => (
                <li key={l.to}>
                  <NavLink to={l.to} end>{l.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>



      <main id="main"><Outlet /></main>

      <footer>
        <div className="wrap fgrid">
          <div>
            <strong>SIMRAN ENGG. INDUSTRIES</strong>
            <address>{company.address}</address>
          </div>
          <div>
            {company.phones.map(p => (<div key={p.tel}><a href={`tel:${p.tel}`}>{p.label}</a></div>))}
          </div>
          <div>
            {company.emails.map(e => (<div key={e}><a href={`mailto:${e}`}>{e}</a></div>))}
          </div>
        </div>
        <p className="wrap">&copy; {new Date().getFullYear()} {company.name}</p>
      </footer>
      <a className="wa" href={company.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </>
  )
}
