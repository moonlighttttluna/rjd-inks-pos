// ============================================================
// RJD INKS & PRINTS
// PRODUCT CARD
// ============================================================

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">

      {/* PRODUCT IMAGE / ICON */}
      <div className="product-image">

        <div className="product-image-placeholder">
          <span>RJD</span>
          <small>Inks & Prints</small>
        </div>

      </div>

      {/* PRODUCT INFORMATION */}
      <div className="product-card-content">

        <div className="product-category">
          {product.category}
        </div>

        <h3>
          {product.name}
        </h3>

        <p>
          {product.description}
        </p>

        {/* PRICE */}
        <div className="product-price">

          <strong>
            ₱{Number(product.price).toLocaleString()}
          </strong>

          <span>
            / {product.unit}
          </span>

        </div>

        {/* ADD TO CART */}
        <button
          type="button"
          className="primary-button product-button"
          onClick={() => addToCart(product)}
        >
          Add to Order
        </button>

      </div>

    </article>
  );
}

export default ProductCard;