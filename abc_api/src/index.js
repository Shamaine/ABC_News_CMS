const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("../routes/auth");
const userRoute = require("../routes/users");
const articleRoute = require("../routes/articles");
const categoryRoute = require("../routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
//We can send any json file and object
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

//Create Storage to store images in local file
//cb= callback function take care of errors
//destination= > images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

//upload images to local storage
//we only upload one file so =single
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/articles", articleRoute);
app.use("/api/categories", categoryRoute);

app.listen(process.env.PORT || 5050, () => {
  console.log("Backend server is running!");
});
