const { model, Schema } = require("mongoose");

const carrerSchema = new Schema({
  carrer: {
    type: String,
    require: true,
  },
  carrerVaccancy: {
    type: String,
    require: true,
  },
  carrerCategory: {
    type: String,
    require: true,
  },
  carrerLocation: {
    type: String,
    require: true,
  },
  carrerVancy: {
    type: String,
    require: true,
  },
  carrerDescription: {
    type: String,
    default: true,
  },
  slug: {
    type: String,
    default: true,
  },

  experience: {
    type: String,
    default: true,
  },
  employeLink: {
    type: Schema.Types.ObjectId,
    ref: "TeamMember",
  },
  createdAt: {
    type: String,
  },
  seo: {
    metaDescription: {
      type: String,
    },
    metaTitle: {
      type: String,
    },
    keyword: [
      {
        type: String,
      },
    ],
  },
});

const Carrer = model("Carrer", carrerSchema);

export { Carrer };
