const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = process.env.DB_URL;
    await mongoose.connect(db);
    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

//password kya hai mongodb enter karo!  id ka ya jo project ka banaya tha wo? project ka aahar12

module.exports = connectDB;


