
import cloths1 from "@/public/assets/product/clothes (1).jpg"
import cloths2 from "@/public/assets/product/clothes (2).jpg"
import cloths3 from "@/public/assets/product/clothes (3).jpg"
import earing from "@/public/assets/product/earrings.jpg"
import jwellery from "@/public/assets/product/bindi.jpg"
export const data =[
    {
      "id": "1",
      "name": "Apple MacBook Pro 16-inch",
      "category": "Laptop",
      "description": "Powerful M2 Max chip with a 16-inch Retina XDR display. Designed for professionals who need high performance.",
      "image": cloths1.src,
      "images": [
        cloths1.src,
        cloths1.src,
        cloths1.src,
        cloths1.src
      ],
      "rating": 4.8,
      "price": 2499.0,
      "originalPrice": 2699.0,
      "tag": "NEW",
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
      "sizes": ["XS", "S", "M", "XL", "XXL"],
      "reviews": [
        {
          "user": "John Doe",
          "rating": 5,
          "comment": "Amazing performance and battery life!"
        },
        {
          "user": "Alice Smith",
          "rating": 4,
          "comment": "Expensive but worth it."
        }
      ],
      "specifications": {
        "Processor": "Apple M2 Max",
        "RAM": "32GB Unified Memory",
        "Storage": "1TB SSD",
        "Display": "16-inch Retina XDR",
        "Battery": "20 hours"
      },
      "vendor": "Apple Store",
      "weight": "2.1kg",
      "dimensions": "35.7 x 24.6 x 1.68 cm"
    },
    {
      "id": "2",
      "name": "iPhone 14 Pro Max",
      "category": "Phone",
      "description": "Apple's latest flagship with an A16 Bionic chip, ProMotion OLED display, and 48MP camera.",
      "image": cloths2.src,
      "images": [
        cloths2.src,
        cloths2.src,
        cloths2.src,
        cloths2.src,
        cloths2.src,
        cloths2.src
      ],
      "rating": 4.7,
      "price": 1199.0,
      "originalPrice": 1299.0,
      "tag": "SALE",
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
      "sizes": ["XS", "S", "M", "XL", "XXL"],
      "reviews": [
        {
          "user": "David Miller",
          "rating": 5,
          "comment": "Best camera phone ever!"
        },
        {
          "user": "Emma Wilson",
          "rating": 4,
          "comment": "Battery life could be better."
        }
      ],
      "specifications": {
        "Processor": "A16 Bionic",
        "RAM": "6GB",
        "Storage": "256GB",
        "Display": "6.7-inch Super Retina XDR",
        "Camera": "48MP Triple Camera System"
      },
      "vendor": "Apple Store",
      "weight": "240g",
      "dimensions": "160.7 x 77.6 x 7.85 mm"
    },
    {
      "id": "3",
      "name": "Samsung Galaxy S23 Ultra",
      "category": "Phone",
      "description": "The latest Galaxy S23 Ultra with 200MP camera, Snapdragon 8 Gen 2, and a 120Hz AMOLED display.",
      "image": cloths3.src,
      "images": [
        cloths3.src,
        cloths3.src,
        cloths3.src
      ],
      "rating": 4.9,
      "price": 1399.0,
      "originalPrice": 1499.0,
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
      "sizes": [],
      "reviews": [
        {
          "user": "Michael Brown",
          "rating": 5,
          "comment": "Best Android phone with top-notch camera!"
        },
        {
          "user": "Sophia Johnson",
          "rating": 4.5,
          "comment": "Great battery life and performance!"
        }
      ],
      "specifications": {
        "Processor": "Snapdragon 8 Gen 2",
        "RAM": "12GB",
        "Storage": "512GB",
        "Display": "6.8-inch Dynamic AMOLED 120Hz",
        "Camera": "200MP Quad Camera"
      },
      "vendor": "Samsung Official Store",
      "weight": "234g",
      "dimensions": "163.4 x 78.1 x 8.9 mm"
    },
    {
      "id": "4",
      "name": "Sony WH-1000XM5 Wireless Headphones",
      "category": "Headphone",
      "description": "Industry-leading noise cancellation with 30-hour battery life and premium sound quality.",
      "image": earing.src,
      "images": [
        earing.src,
        earing.src,
        earing.src
      ],
      "rating": 4.8,
      "price": 399.0,
      "originalPrice": 449.0,
      "tag": "BESTSELLER",
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
      "sizes": ["XS", "S", "M", "XL", "XXL"],
      "reviews": [
        {
          "user": "Chris Evans",
          "rating": 5,
          "comment": "Superb noise cancellation and sound!"
        },
        {
          "user": "Linda Adams",
          "rating": 4,
          "comment": "A bit pricey, but worth it."
        }
      ],
      "specifications": {
        "Driver": "30mm",
        "Battery": "30 hours",
        "Connectivity": "Bluetooth 5.2",
        "Noise Cancellation": "Yes"
      },
      "vendor": "Sony Official Store",
      "weight": "250g",
      "dimensions": "25.4 x 20.3 x 5.1 cm"
    },
    {
      "id": "5",
      "name": "Philips Hue Smart Bulb",
      "category": "Smart Light",
      "description": "Smart LED bulb with 16 million colors and voice assistant support (Alexa, Google, Siri).",
      "image": jwellery.src,
      "images": [
        jwellery.src,
        jwellery.src,
        jwellery.src
      ],
      "rating": 4.6,
      "price": 49.0,
      "originalPrice": 65.0,
      "tag": "SMART",
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
      "sizes": ["XS", "S", "M", "XL", "XXL"],
      "reviews": [
        {
          "user": "Jason Lee",
          "rating": 5,
          "comment": "Best smart bulb with easy setup!"
        },
        {
          "user": "Nina Patel",
          "rating": 4,
          "comment": "Works great but a bit expensive."
        }
      ],
      "specifications": {
        "Wattage": "10W",
        "Lumens": "800lm",
        "Connectivity": "Wi-Fi & Bluetooth",
        "Voice Control": "Alexa, Google Assistant"
      },
      "vendor": "Philips Store",
      "weight": "120g",
      "dimensions": "6.1 x 6.1 x 11 cm"
    }
  ]
  