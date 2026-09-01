const { model, Schema } = require("mongoose");

const categoryMemberSchema = new Schema({
  category: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
  },
});

const Category = model("Category", categoryMemberSchema);

export { Category };
