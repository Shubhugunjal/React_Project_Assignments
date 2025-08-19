const mongoose = require("mongoose");

const uri =
  "mongodb+srv://shubhangigunjal:MongoDBAtlas@cluster0.aktzmcj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {});
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
};

module.exports = connectDB;
