import { Link } from 'react-router-dom'
import type { Product } from '../data'

export default function ProductCard({ name, usedOn, image }: Product) {
  return (
    <article className="card">
      <div
        className="thumb"
        role="img"
        aria-label={name}
        style={
          image
            ? { 
                backgroundImage: `url(${image})`,
                backgroundSize: 'contain',     // Shows the COMPLETE image without cutting anything off
                backgroundPosition: 'center',  // Centers the pump inside the thumbnail container
                backgroundRepeat: 'no-repeat', // Prevents the image from duplicating
                backgroundColor: '#f9f9f9',    // Adds a soft clean background to fill the empty card edges
                padding: '10px'                // Gives a little breathing room around the product edges
              }
            : undefined
        }
      />
      <div className="b">
        <h3>{name}</h3>
        <p className="used">Used on</p>
        <p>{usedOn}</p>
        <Link className="btn" to="/contact">Get a Quote</Link>
      </div>
    </article>
  )
}
