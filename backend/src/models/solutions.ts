const { model, Schema } = require("mongoose");

const solutionsSchema = new Schema({
  solutionsAvatar: {
    type: String,
    require: true,
  },
  svg: {
    type: String,
    require: true,
  },
  solutionsName: {
    type: String,
    require: true,
  },
  sort: {
    type: String,
    require: true,
  },
  solutionsCover: {
    type: String,
    require: true,
  },

  slug: {
    type: String,
    require: true,
  },
  solutionsHeading: {
    type: String,
    require: true,
  },

  solutionsHeading1: {
    type: String,
    require: true,
  },

  solutionsPara1: {
    type: String,
    require: true,
  },

  solutionsImg1: {
    type: String,
    require: true,
  },
  solutionsImg2: {
    type: String,
    require: true,
  },

  colorCode: {
    type: String,
    require: true,
  },
  paraList: [
    {
      label: {
        type: String,
      },
    },
  ],

  list: [
    {
      logo: {
        type: String,
      },
      head: {
        type: String,
      },
      para: {
        type: String,
      },
    },
  ],
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
  status: {
    type: Boolean,
    default: false,
    require: true,
  },
  updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: false },
}
  ,
  {
    timestamps: true,
  }
);

const Solutions = model("solutions", solutionsSchema);

export { Solutions };
