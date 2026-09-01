const { model, Schema } = require("mongoose");

const carrerFormSchema = new Schema({
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
  organization: {
    type: String,
    require: true,
  },
  services: {
    type: String,
    require: true,
  },
  solutions: {
    type: String,
    require: true,
  },

  createdAt: {
    type: String,
  },
});

const Contactus = model("Contactus", carrerFormSchema);

export { Contactus };
