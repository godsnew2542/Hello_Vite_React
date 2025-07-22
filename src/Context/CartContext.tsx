import { createContext, useContext, useState, type ReactNode } from "react";
import type { ItemCard, Product } from "../type/type";

interface CartContextType {
  cartItems: ItemCard[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCart] = useState<ItemCard[]>([]);

  const addToCart = (product: Product) => {
    const existingCartItem = cartItems.find(
      (item) => item.name == product.name
    );

    if (existingCartItem) {
      existingCartItem.quantity += 1;
      setCart((prevCart) => [
        ...prevCart.filter((item) => item.name != product.name),
        existingCartItem,
      ]);
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          image: product.image,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ]);
    }
  };

  const contexValue: CartContextType = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={contexValue}>{children}</CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
