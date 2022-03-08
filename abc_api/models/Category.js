const mongoose = require("mongoose");

//define categories properties: username,email,pass,access
//use mongoose timestamp to store date and time created/updated
const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

//call the model constructor on the Mongoose instance and pass it the name of the collection by exporting the ArticleSchema
module.exports = mongoose.model("Category", CategorySchema);
