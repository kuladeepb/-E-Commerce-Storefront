import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';

dotenv.config();
connectDB();

const users = [
  {
    name: 'Admin User',
    email: 'admin@store.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'john123',
    role: 'user',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'jane123',
    role: 'user',
  },
];

const products = [
  {
    name: 'Sony WH-1000XM5 Wireless Headphones',
    description:
      'Industry-leading noise cancellation with two processors and eight microphones. Up to 30 hours battery life with quick charging. Premium sound with Integrated Processor V1.',
    price: 349.99,
    category: 'Electronics',
    brand: 'Sony',
    stock: 45,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800',
    ],
    rating: 4.8,
    numReviews: 128,
    isFeatured: true,
    discount: 10,
  },
  {
    name: 'Apple MacBook Pro 14" M3',
    description:
      'Supercharged by M3 Pro or M3 Max, MacBook Pro takes its power further than ever. With an amazing 22 hours of battery life. The best pro laptop ever.',
    price: 1999.99,
    category: 'Electronics',
    brand: 'Apple',
    stock: 20,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800',
    ],
    rating: 4.9,
    numReviews: 256,
    isFeatured: true,
    discount: 5,
  },
  {
    name: 'Nike Air Max 270',
    description:
      "Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks. The sleek, running-inspired design pairs perfectly with everyday outfits.",
    price: 150.0,
    category: 'Clothing',
    brand: 'Nike',
    stock: 100,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800',
    ],
    rating: 4.5,
    numReviews: 89,
    isFeatured: true,
    discount: 0,
  },
  {
    name: 'Samsung 65" 4K QLED TV',
    description:
      'Quantum Dot technology produces a billion shades of brilliant color. Neo QLED processing with AI. Quantum HDR 32X for deep contrast with incredible detail.',
    price: 1299.99,
    category: 'Electronics',
    brand: 'Samsung',
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?w=800',
    ],
    rating: 4.7,
    numReviews: 67,
    isFeatured: true,
    discount: 15,
  },
  {
    name: 'Kindle Paperwhite 11th Gen',
    description:
      'Our fastest Kindle ever. 6.8" display and adjustable warm light. Waterproof, so you can read in the bath or by the pool. 10 weeks of battery life.',
    price: 139.99,
    category: 'Electronics',
    brand: 'Amazon',
    stock: 80,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800',
    ],
    rating: 4.6,
    numReviews: 312,
    isFeatured: false,
    discount: 0,
  },
  {
    name: "Levi's 501 Original Jeans",
    description:
      "The original blue jean since 1873. The 501 Original's sat-on-hip fit, button fly, and straight leg silhouette has influenced countless trends over the decades.",
    price: 79.5,
    category: 'Clothing',
    brand: "Levi's",
    stock: 200,
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
    ],
    rating: 4.4,
    numReviews: 445,
    isFeatured: false,
    discount: 0,
  },
  {
    name: 'Instant Pot Duo 7-in-1',
    description:
      'Replaces 7 kitchen appliances: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and food warmer. Cooks up to 70% faster.',
    price: 99.99,
    category: 'Home & Garden',
    brand: 'Instant Pot',
    stock: 60,
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800',
    ],
    rating: 4.7,
    numReviews: 1024,
    isFeatured: true,
    discount: 20,
  },
  {
    name: 'Adidas Ultraboost 22',
    description:
      'Feel the energy return with each and every step. Linear Energy Push midsole propels you forward. A sock-like knit upper hugs your foot for a supportive feel.',
    price: 190.0,
    category: 'Sports',
    brand: 'Adidas',
    stock: 75,
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800',
    ],
    rating: 4.6,
    numReviews: 178,
    isFeatured: false,
    discount: 0,
  },
  {
    name: 'The Psychology of Money',
    description:
      'Timeless lessons on wealth, greed, and happiness. Morgan Housel shows us how to have a better relationship with money by understanding how people think about it.',
    price: 18.99,
    category: 'Books',
    brand: 'Harriman House',
    stock: 500,
    images: [
      'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=800',
    ],
    rating: 4.8,
    numReviews: 2156,
    isFeatured: false,
    discount: 0,
  },
  {
    name: 'Dyson V15 Detect Vacuum',
    description:
      'Powered by Dyson hyperdymium motor. Laser Slim Fluffy cleaner head reveals microscopic dust. HEPA filtration captures 99.99% of particles as small as 0.1 microns.',
    price: 749.99,
    category: 'Home & Garden',
    brand: 'Dyson',
    stock: 25,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    ],
    rating: 4.8,
    numReviews: 543,
    isFeatured: true,
    discount: 8,
  },
  {
    name: 'LEGO Technic Bugatti Chiron',
    description:
      "This impressive 1:8 scale replica of the Bugatti Chiron features a W16 engine with moving pistons, plus a gearbox, a rear wing and a working spoiler. The designer's dream build.",
    price: 449.99,
    category: 'Toys',
    brand: 'LEGO',
    stock: 30,
    images: [
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800',
    ],
    rating: 4.9,
    numReviews: 234,
    isFeatured: false,
    discount: 0,
  },
  {
    name: 'Garmin Forerunner 955 GPS Watch',
    description:
      'Multisport GPS smartwatch with training readiness, daily suggested workouts, and triathlon training support. Up to 15 days battery in smartwatch mode.',
    price: 499.99,
    category: 'Sports',
    brand: 'Garmin',
    stock: 40,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    ],
    rating: 4.7,
    numReviews: 389,
    isFeatured: true,
    discount: 5,
  },
];

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    console.log('Users Imported!'.green.inverse);

    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((p) => ({ ...p }));
    await Product.insertMany(sampleProducts);

    console.log('Products Imported!'.green.inverse);
    console.log('\n✅ Data seeded successfully!'.green.bold);
    console.log('Admin login: admin@store.com / admin123'.cyan);
    console.log('User login:  john@example.com / john123'.cyan);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '--destroy') {
  destroyData();
} else {
  importData();
}
