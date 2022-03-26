import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
//import userRouter from "./routes/user.js";
import foodRouter from "./routes/food.js";
import requestRouter from "./routes/request.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true })); 
app.use(cors());

app.use("/food",foodRouter);
app.use("/hello",requestRouter);

const MONGODB_URL = "mongodb+srv://SaiKiran:SaiKiran@cluster0.hlzt5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = 5000;
//ZE5vdhWMFiWJWROZ
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));