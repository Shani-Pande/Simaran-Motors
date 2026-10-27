import { Link } from 'react-router-dom'
import { products } from '../data'
import HeroArt from '../components/HeroArt'
import { usePageTitle } from '../hooks'

// Set to a real photo of your pumps, e.g. '/images/hero.jpg' (file in public/images)
const HERO_PHOTO = ''

export default function Home() {
  usePageTitle(
    'Simran Engg. Industries | Coolant Pumps for Machine Tools, Faridabad',
    'Simran Engg. Industries, Faridabad: coolant pumps for machine tools, immersible pumps, blower and packaging motors.',
  )
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <div className="rule" />
            <h1>Coolant Pumps for Machine Tools</h1>
            <p className="lead">Immersible Pumps for Industries</p>
            <div className="btns">
              <a className="btn" href="/brochure.pdf" download>Download</a>
              <Link className="btn ghost" to="/contact">Contact Us</Link>
            </div>
          </div>
          {HERO_PHOTO ? <img className="hero-photo" src={HERO_PHOTO} alt="Simran coolant pump" /> : <HeroArt />}
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <h2>Our Products</h2>
          <ul className="chips">
            {products.map(p => (
              <li key={p.name}><Link to="/services">{p.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
