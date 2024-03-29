const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/UserModel");

// Get route for getting all the users
router.get("/login", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
  }
});

// Get route to get wishlist products
router.get("/wishlist/:userId", async (req, res) => {
  let userId = req.params.userId;
  console.log(userId)

  try {
    const response = await User.find({ userId: userId });
    console.log(response)
    console.log(response[0].likedProducts)
    res.json(response[0].likedProducts);
  } catch (err) {
    console.error(err);
  }
});

// Post route for wishlist products
router.post("/like-product", async (req, res) => {
  let productId = req.body.productId;
  let userId = req.body.userId;
  console.log(userId, productId)

  try {
    const updatedUser = await User.updateOne(
      { userId: userId },
      { $addToSet: { likedProducts: productId } }
    );
    res.json({ message: "liked success" });
  } catch (err) {
    console.error(err);
  }
});

// Post route for signUp
router.post("/signup", async (req, res) => {
  let userId = req.body.userId;
  let email = req.body.email;
  let phone = req.body.phone;

  const user = {
    userId: userId,
    email: email,
    phone: phone
  };

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ userId: user.userId });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = await User.create({
      userId: user.userId,
      email: user.email,
      phone: user.phone,
    });
    res.json({ message: "User registered successfully" });
    // res.status(201).json(newUser)
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Post route for Login
router.post("/login", async (req, res) => {
  const loginData = req.body;

  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const validUser = await User.findOne({ username: loginData.username });
    if (!validUser) {
      return res.status(401).json({ message: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(
      loginData.password,
      validUser.password
    );
    if (!isPasswordValid) {
      return res.json({ message: "Username or Password Is Incorrect" });
    }

    const token = jwt.sign({ id: validUser._id }, "secret");

    res.json({ token, userId: validUser._id, username: user.username });
  } catch (error) {
    console.error("error logging user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete route to remove liked products
router.delete("/remove-like-product/:userId/:productId", async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;

  try {
    const result = await User.findOneAndUpdate(
      { userId: userId },
      { $pull: { likedProducts: productId } },
      { new: true }
    );

    if (result) {
      res.json({ message: "removed product" });
    } else {
      console.log("No document found matching the query criteria.");
      res
        .status(404)
        .json({ error: "No document found matching the query criteria." });
    }
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
