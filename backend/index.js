// index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      image:
        "https://www.prophotostudio.net/wp-content/uploads/2021/01/Lay-flat-shirt-front-green.jpg",
      price: 25.99,
      oldPrice: 39.99,
      discount: "-35% OFF",
      rating: 4.7,
      reviews: 180,
    },
    {
      id: 2,
      name: "Denim Jacket",
      image:
        "https://cdn.prod.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg",
      price: 49.99,
      oldPrice: 69.99,
      discount: "-28% OFF",
      rating: 4.6,
      reviews: 240,
    },
    {
      id: 3,
      name: "Women’s Floral Dress",
      image:
        "https://images.pexels.com/photos/17445013/pexels-photo-17445013/free-photo-of-blonde-woman-leaning-on-armchair.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 59.99,
      oldPrice: 89.99,
      discount: "-33% OFF",
      rating: 4.9,
      reviews: 310,
    },
    {
      id: 4,
      name: "Leather Handbag",
      image:
        "https://i.pinimg.com/236x/84/94/c9/8494c954ec27b5558e1ca66b26f5ec35.jpg",
      price: 85.0,
      oldPrice: 120.0,
      discount: "-30% OFF",
      rating: 4.8,
      reviews: 150,
    },
    {
      id: 5,
      name: "Men’s Polo Shirt",
      image: "https://i.sstatic.net/CeCrU.jpg",
      price: 29.99,
      oldPrice: 42.99,
      discount: "-25% OFF",
      rating: 4.5,
      reviews: 90,
    },
    {
      id: 6,
      name: "Casual Sneakers",
      image:
        "https://target.scene7.com/is/image/Target/GUEST_181ea8a5-2324-4841-a385-54d6b9895eb1",
      price: 69.99,
      oldPrice: 99.99,
      discount: "-30% OFF",
      rating: 4.7,
      reviews: 220,
    },
    {
      id: 7,
      name: "Formal Office Blazer",
      image:
        "https://www.shutterstock.com/image-photo/confident-businesswoman-studio-modern-executive-600nw-2611127511.jpg",
      price: 119.99,
      oldPrice: 169.99,
      discount: "-29% OFF",
      rating: 4.9,
      reviews: 340,
    },
    {
      id: 8,
      name: "Luxury Sunglasses",
      image:
        "https://media.voguebusiness.com/photos/5ce3d84932029c6ded13e829/2:3/w_2560%2Cc_limit/online-product-may-19-article.jpg",
      price: 89.99,
      oldPrice: 139.99,
      discount: "-35% OFF",
      rating: 4.8,
      reviews: 275,
    },
  ]);
});

app.post("/products", (req, res) => {
  const product = req.body;
  res.json({ message: "Product created", product });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
