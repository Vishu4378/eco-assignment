export interface ProductType {
  id: number | string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface IPrice {
  from: number;
  to: number;
}
export type SortBy = 'PRICE LOW TO HIGH' | 'PRICE HIGH TO LOW';
