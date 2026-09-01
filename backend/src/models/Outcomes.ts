const { model, Schema } = require("mongoose");

const outcomesSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  para: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
  },
});

const Outcomes = model("Outcomes", outcomesSchema);

export { Outcomes };
