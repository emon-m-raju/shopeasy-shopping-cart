import useCart from "../hooks/useCart";
import formatPrice from "../utils/formatPrice";
import handleImageError from "../utils/handleImageError";

// Ekta product er card - image, title, category, price ar Add to Cart button
function ProductCard({ product }) {
  const { addToCart, items } = useCart();

  // Cart e ei product koyta ache seta dekhabo
  const inCart = items.find((item) => item.id === product.id);

  return (
    <article className="card">
      <div className="card-image-wrap">
        <img
          className="card-img"
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          onError={handleImageError}
        />
        <span className="card-image-tag">{product.category}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-price">{formatPrice(product.price)}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          {inCart ? `Add More (${inCart.quantity} in cart)` : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
