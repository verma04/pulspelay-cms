const { model, Schema } = require("mongoose");

const seoPagesSchema = new Schema({
  name: String,
  seo: {
    metaDescription: {
      type: String,
    },
    metaTitle: {
      type: String,
    },
    updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: false },
    keyword: [
      {
        type: String,
      },
    ],
  },
}, {
  timestamps: true,
});

const SeoPages = model("SeoPages", seoPagesSchema);

export { SeoPages };
