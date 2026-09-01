const { model, Schema } = require("mongoose");

const testimonialSchema = new Schema({
  testimonialName: {
    type: String,
  },
  testimonialDescription: {
    type: String,
  },

  testimoniaDesignation: {
    type: String,
  },
  testimonialImage: {
    type: String,
  },
  slug: {
    type: String,
  },
  sort: {
    type: Number,
  },
  status: {
    type: Boolean,
  },
  createdAt: {
    type: String,
  },
  caseStudies: {
    value: String,
    label: String,
  },
  updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: false },
});

const Testimonial = model("testimonial", testimonialSchema);

export { Testimonial };
