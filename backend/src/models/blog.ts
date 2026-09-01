const { model, Schema } = require("mongoose");

const BlogSchema = new Schema({
  blogTitle: {
    type: String,
    require: true,
  },
  blogAvatar: {
    type: String,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
  ],
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

  blogSubTitle: {
    type: String,
    require: true,
  },
  blogAuthor: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },

  blogtags: [
    {
      value: {
        type: String,
      },
    },
  ],

  views: {
    type: Number,
    default: 1,
  },

  blogDescription: {
    type: String,
    require: true,
  },
  blogDescriptionHtml: {
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
  firstPublish: {
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
  updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: false },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
});

const Blog = model("Blog", BlogSchema);

const commentsSchema = new Schema({
  name: {
    type: String,
  },
  comment: {
    type: String,
  },
  email: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  blog: { type: Schema.Types.ObjectId, ref: "Blog" },
});

const Comments = model("Comments", commentsSchema);

export { Blog, Comments };
