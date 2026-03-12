import { useCart } from './CartContext';

function Product({ product }) {
  const { addToCart } = useCart();
  
  return <button onClick={() => addToCart(product)}>Add to Cart</button>;
}
