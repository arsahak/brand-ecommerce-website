export interface Products {
  id: string;
  title: string;
  description: string;
  quantity: number;
    category: string
    brand: string
    colors: { name: string; value: string }[]
    sizes: string[]
    price: number
    originalPrice: number
    tag: string
    image: string
    name: string
    rating: number
    product:{
      id: string;
      image: string;
      name: string;
      colors:string[];
    }
  }

  export interface Product{
    id:string;
    title: string;
    image: string;
    colors: { name: string; value: string }[]
    description: string;
    price: number;
    brand: string;
    originalPrice: number;
    tag: string;
    rating: number;
    sizes: string[];
    category: string;
    discount?: number;
    countdown?: string;
  }
  
  export interface CartItem extends Products {
    quantity: number
  }