export interface Products {
  id: string;
  title: string;
  description: string;
  quantity: number;
    category: string
    brand: string
    color: string
    size: string
    price: number
    tag?: string
    image: string
    name: string
    rating: number
    product:{
      id: string;
      image: string;
      name: string;
    }
  }
  
  export interface CartItem extends Products {
    quantity: number
  }