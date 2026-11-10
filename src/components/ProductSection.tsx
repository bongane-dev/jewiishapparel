import { useMemo, useState } from 'react'
import './ProductSection.css'
import productData from './products.json'

const products = Object.values(productData).flat()
const productCategories = [...new Set(products.map((product) => product.category))]

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0])

  const visibleProducts = useMemo(
    () => products.filter((product) => product.category === activeCategory),
    [activeCategory],
  )

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
        <p className="selected_category">
          <span>{activeCategory}</span>
        </p>

        <div className="product_grid">
          {visibleProducts.map((product) => (
            <article className="product_box" key={product.id}>
              <div className="product_image_wrapper">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product_content">
                <div className="product_meta">
                  <span className="product_badge">{product.badge}</span>
                  <span className="product_category">{product.category}</span>
                </div>

                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <div className="product_footer">
                  <p className="productPrice">R<span>{product.price}</span></p>
                  <button type="button">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
