import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const productSchema = new Schema(
  {
    image : {
      type: String,
      required: true,
  },
    name : {
        type: String,
        required: true,
    },
    desc : {
        type: String,
        required: true,
    },
    isFeatured : {
      type: Boolean,
      required: false,
      default : false,
  },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;

