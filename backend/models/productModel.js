import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Product name is required'], trim: true },
    description: { type: String, required: [true, 'Description is required'] },
    price: { type: Number, required: [true, 'Price is required'], default: 0 },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Beauty', 'Toys', 'Automotive', 'Other'],
    },
    brand: { type: String, required: true },
    stock: { type: Number, required: true, default: 0, min: 0 },
    images: [{ type: String }],
    reviews: [reviewSchema],
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    discount: { type: Number, default: 0, min: 0, max: 100 },
  },
  { timestamps: true }
);

// Virtual: discounted price
productSchema.virtual('discountedPrice').get(function () {
  return this.price - (this.price * this.discount) / 100;
});

const Product = mongoose.model('Product', productSchema);
export default Product;
