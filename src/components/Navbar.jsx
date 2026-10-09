import useCart from "../hooks/useCart";

// Top navbar - logo ar cart button (item count shoho)
function Navbar({ onCartClick }) {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="logo" href="#" aria-label="ShopEasy home">
          <span className="logo-mark" aria-hidden="true">S</span>
          <span>Shop<span className="logo-accent">Easy</span></span>
        </a>
        <button
          className="cart-btn"
          onClick={onCartClick}
          aria-label={`Open cart with ${totalItems} items`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 1.9-1.4L22 8H6" />
            <circle cx="10" cy="20" r="1.2" />
            <circle cx="18" cy="20" r="1.2" />
          </svg>
          <span>Cart</span>
          <span className="cart-badge" aria-live="polite">{totalItems}</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
