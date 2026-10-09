import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import products from "./data/products";
import formatPrice from "./utils/formatPrice";
import handleImageError from "./utils/handleImageError";

// Main component - cart open/close state ekhane rakha hoyeche
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">A little easier, every day</span>
              <h1>Good finds.<br />Easy choices.</h1>
              <p>
                Thoughtful everyday essentials, picked for you and ready to
                make life a little better.
              </p>
              <a className="btn btn-primary hero-cta" href="#catalog">
                Shop now <span aria-hidden="true">→</span>
              </a>
              <span className="hero-note">Simple shopping, from ৳350</span>
            </div>
            <div className="hero-visual">
              <img
                src={products[0].image}
                alt={products[0].imageAlt}
                onError={handleImageError}
              />
              <div className="hero-product-note">
                <span className="hero-product-label">A customer favorite</span>
                <strong>{products[0].title}</strong>
                <span>{formatPrice(products[0].price)}</span>
              </div>
              <span className="hero-sparkle" aria-hidden="true">✳</span>
            </div>
          </div>
        </section>
        <section className="benefits" aria-label="Shopping benefits">
          <div className="container benefits-inner">
            <article className="benefit">
              <span className="benefit-icon" aria-hidden="true">01</span>
              <div>
                <h2>Easy shopping</h2>
                <p>Find your everyday favorites in one place.</p>
              </div>
            </article>
            <article className="benefit">
              <span className="benefit-icon" aria-hidden="true">02</span>
              <div>
                <h2>Quality picks</h2>
                <p>Useful products chosen with care.</p>
              </div>
            </article>
            <article className="benefit">
              <span className="benefit-icon" aria-hidden="true">03</span>
              <div>
                <h2>Simple checkout</h2>
                <p>A clear cart, with no extra steps.</p>
              </div>
            </article>
          </div>
        </section>
        <ProductGrid />
      </main>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <footer className="footer">© 2026 ShopEasy - React Shopping Cart</footer>
    </>
  );
}

export default App;
