# React Shopping Cart

A responsive shopping cart app built with React (Vite) and the Context API.

## Features
- Product grid with image, title, category and price
- Category filter
- Add to cart with one click
- Increase / decrease quantity, remove single item, clear cart
- Real-time total items and total price
- Cart saved in localStorage (stays after refresh)
- Mobile-first responsive design

## Tech Stack
- React 18 + Hooks (`useState`, `useEffect`, `useReducer`, `useContext`)
- Context API for global cart state
- Plain CSS (no UI library)

## Project Structure
```
src/
├── components/   # Navbar, ProductGrid, ProductCard, Cart, CartItem
├── context/      # CartContext (state + reducer)
├── data/         # Mock product data
├── hooks/        # useCart custom hook
├── App.jsx
└── main.jsx
```

## How to Run
```bash
npm install
npm run dev
```
Then open the local URL shown in the terminal.

## Build
```bash
npm run build
```
