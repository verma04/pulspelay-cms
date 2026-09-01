const { model, Schema } = require("mongoose");

const BlogCategorySchema = new Schema({
  title: String,
});

const BlogCategory = model("BlogCategory", BlogCategorySchema);

export { BlogCategory };
