import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import ShoesA from "../assets/ShoesA.jpg";
import bagA from "../assets/bagA.jpg";
import bagB from "../assets/bagB.jpg";
import beltA from "../assets/beltA.jpg";
import kajalA from "../assets/kajalA.jpg";
import lipstickA from "../assets/llipstickA.jpg"
import watchA from "../assets/watchA.jpg";
import watchB from "../assets/watchB.jpg";
import shoesB from "../assets/shoesB.jpg";
import bag3 from "../assets/bag3.jpg";
import bagD from "../assets/bagD.jpg";
import shoesD from "../assets/shoesD.jpg";
import ShoesC from "../assets/shoesD.jpg";
import ShoesE from "../assets/ShoesE.jpg";
import watchC from "../assets/watchC.jpg";
import watchD from "../assets/watchD.jpg";
import watchE from "../assets/watchE.jpg";


const products = [
  { id: 1, name: "Nike Air Max 270", brand: "Nike", category: "nike", price: 150, discountPrice: 120, discountPercent: 20, ratingValue: 4.5, ratingCount: 120, isHot: true, colors: ["Black","White","Red"], imageUrl: image5},
  { id: 2, name: "Adidas Ultraboost 21", brand: "Adidas", category: "adidas", price: 180, discountPrice: 150, discountPercent: 16, ratingValue: 4.7, ratingCount: 200, isHot: false, colors: ["Blue","White"], imageUrl: image2 },
  { id: 3, name: "Puma RS-X", brand: "Puma", category: "puma", price: 130, discountPrice: 99, discountPercent: 24, ratingValue: 4.2, ratingCount: 85, isHot: true, colors: ["Yellow","Black"], imageUrl: bagB },
  { id: 4, name: "Vans Old Skool", brand: "Vans", category: "vans", price: 90, discountPrice: 75, discountPercent: 16, ratingValue: 4.0, ratingCount: 60, isHot: false, colors: ["Black","White"], imageUrl: bagD },
  { id: 5, name: "Converse Chuck Taylor", brand: "Converse", category: "converse", price: 70, discountPrice: 55, discountPercent: 21, ratingValue: 4.3, ratingCount: 100, isHot: false, colors: ["Red","White"], imageUrl: watchB },
  { id: 6, name: "New Balance 574", brand: "New Balance", category: "new-balance", price: 110, discountPrice: 95, discountPercent: 13, ratingValue: 4.6, ratingCount: 70, isHot: false, colors: ["Blue","Grey"], imageUrl: image3 },

  { id: 7, name: "Reebok Classic", brand: "Reebok", category: "reebok", price: 95, discountPrice: 80, discountPercent: 16, ratingValue: 4.1, ratingCount: 50, isHot: false, colors: ["White","Black"], imageUrl: watchA },
  { id: 8, name: "Nike ZoomX Vaporfly", brand: "Nike", category: "nike", price: 250, discountPrice: 210, discountPercent: 16, ratingValue: 4.8, ratingCount: 320, isHot: true, colors: ["Black","Blue"], imageUrl: image1 },
  { id: 9, name: "Adidas NMD_R1", brand: "Adidas", category: "adidas", price: 140, discountPrice: 115, discountPercent: 18, ratingValue: 4.4, ratingCount: 95, isHot: false, colors: ["Black","White"], imageUrl: ShoesA },
  { id: 10, name: "Puma Future Rider", brand: "Puma", category: "puma", price: 120, discountPrice: 90, discountPercent: 25, ratingValue: 4.0, ratingCount: 65, isHot: false, colors: ["Red","White"], imageUrl: ShoesC },
  { id: 11, name: "Vans Sk8-Hi", brand: "Vans", category: "vans", price: 95, discountPrice: 78, discountPercent: 17, ratingValue: 4.2, ratingCount: 45, isHot: false, colors: ["Black","Red"], imageUrl: kajalA },
  { id: 12, name: "Converse One Star", brand: "Converse", category: "converse", price: 85, discountPrice: 68, discountPercent: 20, ratingValue: 4.1, ratingCount: 72, isHot: false, colors: ["White","Black"], imageUrl: bag3},

  { id: 13, name: "New Balance Fresh Foam", brand: "New Balance", category: "new-balance", price: 130, discountPrice: 110, discountPercent: 15, ratingValue: 4.5, ratingCount: 88, isHot: false, colors: ["Blue","White"], imageUrl: image6},
  { id: 14, name: "Reebok Nano X", brand: "Reebok", category: "reebok", price: 140, discountPrice: 120, discountPercent: 14, ratingValue: 4.3, ratingCount: 55, isHot: false, colors: ["Grey","Black"], imageUrl: shoesB },
  { id: 15, name: "Skechers D'Lites", brand: "Skechers", category: "skechers", price: 100, discountPrice: 80, discountPercent: 20, ratingValue: 4.0, ratingCount: 40, isHot: false, colors: ["White","Pink"], imageUrl: watchC },
  { id: 16, name: "Under Armour HOVR", brand: "Under Armour", category: "under-armour", price: 160, discountPrice: 135, discountPercent: 15, ratingValue: 4.4, ratingCount: 77, isHot: true, colors: ["Black","Yellow"], imageUrl: bagA },
  { id: 17, name: "ASICS Gel-Kayano", brand: "ASICS", category: "asics", price: 170, discountPrice: 149, discountPercent: 12, ratingValue: 4.6, ratingCount: 110, isHot: false, colors: ["Blue","White"], imageUrl: image4 },
  { id: 18, name: "Nike Blazer Mid", brand: "Nike", category: "nike", price: 110, discountPrice: 88, discountPercent: 20, ratingValue: 4.2, ratingCount: 90, isHot: false, colors: ["White","Black"], imageUrl: watchB },

  { id: 19, name: "Adidas Samba", brand: "Adidas", category: "adidas", price: 85, discountPrice: 70, discountPercent: 17, ratingValue: 4.1, ratingCount: 60, isHot: false, colors: ["White","Black"], imageUrl: shoesD },
  { id: 20, name: "Puma Clyde", brand: "Puma", category: "puma", price: 95, discountPrice: 80, discountPercent: 16, ratingValue: 4.0, ratingCount: 45, isHot: false, colors: ["Black","Red"], imageUrl: watchE },
  { id: 21, name: "Vans Era", brand: "Vans", category: "vans", price: 80, discountPrice: 65, discountPercent: 19, ratingValue: 4.0, ratingCount: 30, isHot: false, colors: ["Blue","White"], imageUrl: watchD },
  { id: 22, name: "Converse Pro Leather", brand: "Converse", category: "converse", price: 95, discountPrice: 78, discountPercent: 18, ratingValue: 4.2, ratingCount: 46, isHot: false, colors: ["Black","Red"], imageUrl: beltA },
  { id: 23, name: "New Balance 860", brand: "New Balance", category: "new-balance", price: 125, discountPrice: 105, discountPercent: 16, ratingValue: 4.3, ratingCount: 65, isHot: false, colors: ["Grey","Blue"], imageUrl: lipstickA },
  { id: 24, name: "Reebok Classic Leather", brand: "Reebok", category: "reebok", price: 100, discountPrice: 85, discountPercent: 15, ratingValue: 4.1, ratingCount: 52, isHot: false, colors: ["White","Black"], imageUrl: ShoesE }
];

export default products;
