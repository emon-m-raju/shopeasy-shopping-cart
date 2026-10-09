import { createContext, useReducer, useEffect, useMemo } from "react";
import products from "../data/products";

// Cart er global state ekhane thake (Context API + useReducer)
export const CartContext = createContext(null);

const STORAGE_KEY = "shopping-cart-items";

// Page refresh dileo cart jate thake, tai localStorage theke load kori
function loadInitialCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];

    const savedItems = JSON.parse(saved);
    return savedItems
      .map((item) => {
        const product = products.find((savedProduct) => savedProduct.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
      })
      .filter((item) => item !== null && item.quantity > 0);
  } catch (error) {
    return [];
  }
}

// Reducer - cart er shob action ekhane handle hoy
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.find((item) => item.id === action.product.id);
      if (exists) {
        // Product age thekei thakle quantity 1 barai
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.product, quantity: 1 }];
    }
    case "INCREASE":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREASE":
      // Quantity 1 er niche gele item ta remove hoye jabe
      return state
        .map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadInitialCart);

  // Cart change hole localStorage e save kori
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // Total item count ar total price real-time calculate kora hocche
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      items,
      totalItems,
      totalPrice,
      addToCart: (product) => dispatch({ type: "ADD_ITEM", product }),
      increaseQty: (id) => dispatch({ type: "INCREASE", id }),
      decreaseQty: (id) => dispatch({ type: "DECREASE", id }),
      removeFromCart: (id) => dispatch({ type: "REMOVE", id }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    }),
    [items, totalItems, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
