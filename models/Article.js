const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  linkURL: {
    type: String,
    required: true
  },

  date_created_at: {
    type: String,
    required: true
  }

});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;









