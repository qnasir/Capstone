const express = require("express");
const cors = require("cors");
const connectDb = require("./db");
const port = process.env.PORT || 3000;

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

// Middleware for error catching
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error("Failed to connect to MongoDB:", err.message);
  process.exit(1);
});
