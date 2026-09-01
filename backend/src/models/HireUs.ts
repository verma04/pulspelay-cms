const { model, Schema } = require("mongoose");

const hireUsFormSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },

  service: {
    type: String,
    require: true,
  },
  skill: {
    type: String,
    require: true,
  },

  createdAt: {
    type: String,
  },
});

const HireUsForm = model("hireUsForm", hireUsFormSchema);

export { HireUsForm };
