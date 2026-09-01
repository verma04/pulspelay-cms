const { model, Schema } = require("mongoose");

const brandArchSchema = new Schema({
  url: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
  },
});

const BrandArch = model("brandArch", brandArchSchema);

export { BrandArch };
