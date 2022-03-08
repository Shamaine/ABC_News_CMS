const router = require("express").Router();
const Category = require("../models/Category");
const { verifyToken } = require("./verifyToken");

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  try {
    //Update article by Id
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        //take everything inside req.body and set it again
        $set: req.body,
      },
      //update data in mongodb
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    try {
      await category.delete();
      res.status(200).json("Category has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
