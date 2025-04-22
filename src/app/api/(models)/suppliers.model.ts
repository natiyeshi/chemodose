import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const supplierSchema = new Schema(
  {
  image : {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const supplier = mongoose.models.supplier || mongoose.model("supplier", supplierSchema);
export default supplier;

