import useCart from "../hooks/useCart";
import formatPrice from "../utils/formatPrice";
import handleImageError from "../utils/handleImageError";

// Cart er moddhe ekta item - quantity barano/komano ar remove button shoho
function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <li className="cart-item">
      <img
        className="cart-item-img"
        src={item.image}
        alt={item.imageAlt}
        onError={handleImageError}
      />

      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p className="muted">{formatPrice(item.price)} each</p>

        <div className="qty">
          <button
            onClick={() => decreaseQty(item.id)}
            aria-label={`Decrease ${item.title} quantity`}
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => increaseQty(item.id)}
            aria-label={`Increase ${item.title} quantity`}
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item-right">
        <strong>{formatPrice(item.price * item.quantity)}</strong>
        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
          aria-label={`Remove ${item.title}`}
        >
          🗑 Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
