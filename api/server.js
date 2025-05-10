import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Clicked from "./schema.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8800;

mongoose
  .connect(
    "mongodb+srv://temvvgen:hxkw3mdd@gymmanagement.1ujlnkb.mongodb.net/?retryWrites=true&w=majority&appName=gymManagement"
  )
  .then(() => {
    console.log(`ogogdliin san amjilttai`);
    app.listen(PORT, () => {
      console.log(`server is running ${PORT}`);
    });
  })
  .catch(`server asaahad aldaa garlaa`);

app.post("/api/click", async (req, res) => {
  try {
    const { click } = req.body;
    const saved = await Clicked.create({ click });
  } catch (error) {
    console.log(error);
  }
});
