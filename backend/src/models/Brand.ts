const { model, Schema } = require("mongoose");

const brandSchema = new Schema({
  avatar: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  para: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
  },
});

const Brand = model("brand", brandSchema);

export { Brand };
