import { useState } from 'react'
import './ProductSection.css'

const productCategories = ['Tops', 'Bottoms', 'Caps', 'Dresses', 'Track Suits']

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0])

  return (
    <section className="product_section" aria-labelledby="product-heading">
      <h2 className="product_heading" id="product-heading">Shop the collection</h2>
      <nav className="product_nav" aria-label="Product categories">
        {productCategories.map((category) => (
          <button
            className={`product_item${activeCategory === category ? ' is-active' : ''}`}
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>
      <div className="products" aria-live="polite">
        <p className="selected_category">Showing <span>{activeCategory}</span></p>
      </div>
    </section>
  )
}
