const mongoose = require("mongoose");

//define article properties: title,banner,details,photo
//use mongoose timestamp to store date and time created/updated
const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    banner: { type: String, required: true },
    details: { type: String, required: true },
    photo: { type: String, required: false },
    username: { type: String, required: true },
    categories: { type: Array, required: false },
  },
  { timestamps: true }
);

//call the model constructor on the Mongoose instance and pass it the name of the collection by exporting the ArticleSchema
module.exports = mongoose.model("Article", ArticleSchema);
