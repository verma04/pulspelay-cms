const { model, Schema } = require("mongoose");

const seoProductsSchema = new Schema(
  {
    productName: {
      type: String,
    },
    slug: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
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
    heroSection: {
      title: {
        type: String,
        require: true,
      },
      image: {
        type: String,
        require: true,
      },
      paragraph: {
        type: String,
        require: true,
      },
    },
    keyFeatures: [
      {
        title: {
          type: String,
          require: true,
        },
        svg: {
          type: String,
          require: true,
        },
        paragraph: {
          type: String,
          require: true,
        },
      },
    ],

    para: {
      type: String,
    },
    para2: {
      type: String,
    },
    image: {
      laptop: {
        type: String,
      },
      dashBoard: {
        type: String,
      },
      mobile: {
        type: String,
      },
    },
    experts: [
      {
        type: Schema.Types.ObjectId,
        ref: "TeamMember",
      },
    ],
    updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: false },
  },
  {
    timestamps: true,
  }
);

const Products = model("Products", seoProductsSchema);

export { Products };
