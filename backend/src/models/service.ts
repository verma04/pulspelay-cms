const { model, Schema } = require("mongoose");

const servicesSchema = new Schema({
  servicesAvatar: {
    type: String,
    require: true,
  },
  servicesName: {
    type: String,
    require: true,
  },
  servicesCover: {
    type: String,
    require: true,
  },
  servicesCode: {
    type: String,
    require: true,
  },

  services: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },
  servicesVideo: {
    type: String,
    require: true,
  },
  servicesHeading: {
    type: String,
    require: true,
  },
  servicesHeading1: {
    type: String,
    require: true,
  },
  servicesHeading2: {
    type: String,
    require: true,
  },
  servicesPara1: {
    type: String,
    require: true,
  },
  servicesPara2: {
    type: String,
    require: true,
  },
  servicesImg1: {
    type: String,
    require: true,
  },
  servicesImg2: {
    type: String,
    require: true,
  },
  svg: {
    type: String,
    require: true,
  },
  sort: {
    type: String,
    require: true,
  },

  capabilities: [
    {
      label: {
        type: String,
      },
    },
  ],

  expert: [
    {
      value: {
        type: String,
      },
      label: {
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

const Services = model("Services", servicesSchema);

export { Services };
