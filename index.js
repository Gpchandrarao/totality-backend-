const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const rentalRoutes = require("./routes/rental.routes");

dotenv.config();
const PORT = process.env.PORT || 4141;
const app = express();

app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongoose Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Server Running in ${PORT}`);
});

app.use("/user", userRoutes);
app.use("/rental", rentalRoutes);
