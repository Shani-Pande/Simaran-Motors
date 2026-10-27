import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data'
import { usePageTitle } from '../hooks'

export default function Services() {
  usePageTitle(
    'Products | Simran Engg. Industries',
    'Coolant pumps, multi stage pumps, packaging motors and blower motors from Simran Engg. Industries, Faridabad.',
  )
  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <h1>Our Products</h1>
          <p>Our Wide Range Of Products</p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap grid">
          {products.map(p => <ProductCard key={p.name} {...p} />)}
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <h2>Have A Question?</h2>
          <p>Contact us today for answers to all your questions.</p>
          <div className="btns">
            <Link className="btn dark" to="/">Home</Link>
            <Link className="btn" to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
