const { model, Schema } = require("mongoose");

const teamcategorySchema = new Schema({
  name: {
    type: String,
    require: true,
    unique:true
  },
  createdAt: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default:true,
    require: true,
  },
});

const TeamCategory = model("TeamCategory", teamcategorySchema);

export { TeamCategory };
