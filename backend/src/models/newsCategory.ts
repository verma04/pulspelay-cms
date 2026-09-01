const { model, Schema } = require("mongoose");

const newsCategorySchema = new Schema({
    categoryName: {
    type: String,
    require: true,

  },

  createdAt: {
    type: String,
    require: true,
  },
});

const NewsCategory = model("newsCategory", newsCategorySchema);

export { NewsCategory };
