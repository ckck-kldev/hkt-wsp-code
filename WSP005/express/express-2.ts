import express from "express";
import { Request, Response } from "express";

const app = express();


app.use("/images", express.static("uploads"));




const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});