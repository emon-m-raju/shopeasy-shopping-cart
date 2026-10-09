import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

// Custom hook - bar bar useContext na likhe ekhane theke cart data nibo
export default function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}
