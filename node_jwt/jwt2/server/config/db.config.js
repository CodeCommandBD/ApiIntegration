const mongoose = require("mongoose");
require("dotenv").config();

const dbconnected = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    throw error;
  }
};

module.exports = dbconnected;
