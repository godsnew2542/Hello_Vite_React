import type { ItemCard, Product } from "../type/type";

export function sourceProducts(): Product[] {
  return [
    {
      image: "📱📱",
      name: "iPhone 15 Pro",
      description:
        "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system",
      price: 999.0,
    },
    {
      image: "💻💻",
      name: "MacBook Pro M3",
      description:
        "Powerful laptop with M3 chip, 16-inch display, and all-day battery life",
      price: 1299.0,
    },
    {
      image: "🎧🎧",
      name: "AirPods Pro",
      description:
        "Premium wireless earbuds with active noise cancellation and spatial audio",
      price: 249.0,
    },
    {
      image: "⌚⌚",
      name: "Apple Watch Series 9",
      description:
        "Advanced health monitoring, fitness tracking, and seamless connectivity",
      price: 399.0,
    },
    {
      image: "🖥️🖥️",
      name: "iMac 24-inch",
      description:
        "All-in-one desktop with M3 chip, stunning 4.5K display, and vibrant colors",
      price: 1299.0,
    },
    {
      image: "📱📱",
      name: "iPad Pro",
      description:
        "Professional tablet with M2 chip, liquid retina display, and Apple Pencil support",
      price: 799.0,
    },
  ];
}

export function calculateVat(cart: ItemCard[], rate: number = 0.07): number {
  if (Object.keys(cart).length == 0) return 0;
  const temp = Object.values(cart);

  let total = 0;
  temp.forEach((element) => {
    let price = element.price * element.quantity;
    total = price * rate;
  });

  return total;
}

export function calculatePriceWithVat(
  cart: ItemCard[],
  rate: number = 0.07
): number {
  if (Object.keys(cart).length == 0) return 0;
  const temp = Object.values(cart);

  let total = 0;
  temp.forEach((element) => {
    let price = element.price * element.quantity;
    total = price + price * rate;
  });

  return total;
}

export function countTotalQuantity(cart: ItemCard[]): number {
  if (Object.keys(cart).length == 0) return 0;

  const temp = Object.values(cart);
  return temp.reduce((sum, item) => sum + item.quantity, 0);
}

export function countTotalPrice(cart: ItemCard[]): number {
  if (Object.keys(cart).length == 0) return 0;
  const temp = Object.values(cart);

  let total = 0;

  temp.forEach((element) => {
    total += element.price * element.quantity;
  });
  return total;
}

export function formatCurrency(
  value: number,
  currency: string = "THB",
  locale: string = "th-TH"
): string {
  return new Intl.NumberFormat(locale, {
    // style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
