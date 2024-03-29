const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  state: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
    required: true
  },
  read_count: {
    type: Number,
    default: 0,
    required: true
  },
  description: String,
  reading_time: String,
  tags: [String],
  body: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  image: {
   type: String,
   default: "/img/default-cover.webp"
  }
});

module.exports = mongoose.model("Article", articleSchema);
