const { model, Schema } = require("mongoose");

const workSchema = new Schema({
  projectLogo: {
    type: String,
  },
  sliderImage: {
    type: String,
  },
  projectLogoTransparent: {
    type: String,
  },

  blackAndWhiteLogo: {
    logo: String,
    isVisible: Boolean,
  },

  clientColorTheme: {
    type: String,
    default: "#ffffff",
  },
  testimonialImage: {
    type: String,
  },
  sort: {
    type: Number,
  },
  projectIndustry: [
    {
      value: {
        type: String,
      },
      label: {
        type: String,
      },
    },
  ],
  location: {
    type: String,
    require: true,
  },
  projectDescription: {
    type: String,
    require: true,
  },

  projectName: {
    type: String,
    require: true,
  },
  year: {
    type: String,
    require: true,
  },
  landingDescription: {
    type: String,
    require: true,
  },

  services: [
    {
      value: {
        type: String,
      },
      label: {
        type: String,
      },
    },
  ],

  employeeWork: [
    {
      value: {
        type: String,
      },
      label: {
        type: String,
      },
    },
  ],

  clientCover: {
    type: String,
    require: true,
  },

  projectCover: {
    type: String,
    require: true,
  },
  areas: {
    type: String,
    require: true,
  },
  area: [
    {
      label: {
        type: String,
      },
    },
  ],
  tools: [
    {
      label: {
        type: String,
      },
    },
  ],

  slug: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
  },

  website: {
    website: Boolean,
    websiteUrl: String,
    websiteImgLeft: String,
    websiteImgRight: String,
  },
  createdAt: {
    type: String,
  },

  branding: {
    branding: {
      type: String,
    },

    taglines: {
      type: String,
    },
    singleWord: {
      type: String,
    },
  },
  social: {
    social: Boolean,

    column1Img: String,

    mobile: String,
    column1Img2: String,

    column2Img: String,

    column2Img2: String,

    column2Img3: String,

    column3Img: String,

    column3Img2: String,

    column3Img3: String,

    column3Img4: String,

    column4Img: String,
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
  video: {
    video: Boolean,
    url: String,
  },
  outReach: {
    outreach: Boolean,
    outReach: String,
    outReach2: String,
    outReach3: String,
    outReach4: String,
  },
  outcomes: {
    outcomes: Boolean,

    list: [
      {
        title: {
          type: String,
        },
        label: {
          type: String,
        },
      },
    ],
  },
  updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: false },
});

const Work = model("work", workSchema);

export { Work };
