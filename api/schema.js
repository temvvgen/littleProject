import mongoose from "mongoose";

const clickedSchema = new mongoose.Schema(
  {
    click: { type: String },
  },
  { timestamps: true }
);

const Clicked = mongoose.model("Clicked", clickedSchema);
export default Clicked;
