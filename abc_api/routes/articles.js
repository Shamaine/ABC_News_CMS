const Article = require("../models/Article");
const router = require("express").Router();
const { verifyToken } = require("./verifyToken");

//CREATE NEW ARTICLE
router.post("/", verifyToken, async (req, res) => {
  const newArticle = new Article(req.body);
  try {
    const savedArticle = await newArticle.save();
    res.status(200).json(savedArticle);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE ARTICLE
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    //If the article belongs to the same journalist
    if (article.username === req.body.username) {
      try {
        //Update article by Id
        const updatedArticle = await Article.findByIdAndUpdate(
          req.params.id,
          {
            //take everything inside req.body and set it again
            $set: req.body,
          },
          //update data in mongodb
          { new: true }
        );
        res.status(200).json(updatedArticle);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your Article!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE ARTICLE
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article.username === req.body.username) {
      try {
        await article.delete();
        res.status(200).json("Article has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your article!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ARTICLE
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ARTICLE
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let articles;
    if (username) {
      articles = await Article.find({ username });
    } else if (catName) {
      articles = await Article.find({
        //look at this categories array
        categories: {
          //if inside include this catergory, just find it
          $in: [catName],
        },
      });
      //if there is no user or category name
      //fetch all articles
    } else {
      articles = await Article.find();
    }
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
