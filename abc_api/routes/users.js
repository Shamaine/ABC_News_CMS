const User = require("../models/User");
const CryptoJS = require("crypto-js");
const { verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//UPDATE
//Only admin can access the update function
//Update password when user id is verified,
//if password exist on request, encrypt new password
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        //take everything inside req.body and set it again
        $set: req.body,
      },
      //Update data in mongodb
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
//Only Admin can delete Journalist
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    try {
      await Article.deleteMany({ username: user.username });
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(404).json("User Not Found");
  }
});

//GET USER
//Only Admin can access get Journalist function
//Use verifyTokenAndAdmin to verify user is an admin
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER
//Only Admin can access get all user function
//Use verifyTokenAndAdmin to verify user is an admin
//sort in decending order by id -1
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
