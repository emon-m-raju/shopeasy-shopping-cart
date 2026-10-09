import useCart from "../hooks/useCart";
import CartItem from "./CartItem";
import formatPrice from "../utils/formatPrice";

// Side cart panel - isOpen true hole screen e slide kore ashe
function Cart({ isOpen, onClose }) {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  function handleCheckout() {
    window.alert(`Checkout confirmed! Your order total is ${formatPrice(totalPrice)}.`);
    clearCart();
    onClose();
  }

  return (
    <>
      {/* Peeche dark overlay, click korle cart bondho hobe */}
      <button
        type="button"
        className={`overlay ${isOpen ? "overlay-show" : ""}`}
        onClick={onClose}
        aria-label="Close cart"
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
      />

      <aside
        className={`cart ${isOpen ? "cart-open" : ""}`}
        aria-hidden={!isOpen}
        role={isOpen ? "dialog" : undefined}
        aria-modal={isOpen ? "true" : undefined}
        aria-labelledby="cart-title"
      >
        <div className="cart-header">
          <div>
            <h2 id="cart-title">Your cart</h2>
            <p>{totalItems} {totalItems === 1 ? "item" : "items"}</p>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="empty">
            <span className="empty-icon" aria-hidden="true">♡</span>
            <h3>Your cart is taking a break</h3>
            <p>When you find something you love, it will show up here.</p>
            <button className="btn btn-primary" onClick={onClose}>
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>

            {/* Cart summary - total item ar total price */}
            <div className="cart-summary">
              <div className="summary-row">
                <span>Total Items</span>
                <strong>{totalItems}</strong>
              </div>
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>{formatPrice(totalPrice)}</strong>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <strong>{formatPrice(totalPrice)}</strong>
              </div>
              <button className="btn btn-primary" onClick={handleCheckout}>
                Checkout
              </button>
              <button className="btn btn-outline" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default Cart;
