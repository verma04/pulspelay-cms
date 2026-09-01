const { model, Schema } = require("mongoose");

const NewsSchema = new Schema({
  newsTitle: {
    type: String,
    require: true,
  },
  newsAvatar: {
    type: String,
    require: true,
  },
  category: [
    {
      value: {
        type: String,
      },
      label: {
        type: String,
      },
    },
  ],

  newsSubTitle: {
    type: String,
    require: true,
  },
  newsAuthor: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },

  newstags: [
    {
      value: {
        type: String,
      },
    },
  ],

  newsDescription: {
    type: String,
    require: true,
  },
  newsDescriptionHtml: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
  },

  publish: {
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
    keyword: [
      {
        type: String,
      },
    ],
  },
});

const News = model("News", NewsSchema);

export { News };
