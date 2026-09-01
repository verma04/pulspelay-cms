const { model, Schema } = require("mongoose");

const resources = new Schema({
  title: {
    type: String,
    require: true,
  },
  contentTypes: [
    {
      value: {
        type: String,
      },
      label: {
        type: String,
      },
    },
  ],
  topics: [
    {
      value: {
        type: String,
      },
      label: {
        type: String,
      },
    },
  ],
  sortDescription: {
    type: String,
  },

  video: {
    type: String,
    require: true,
  },
  reportDescription: {
    type: String,
    require: true,
  },
  reportImage: {
    type: String,
    require: true,
  },
  reportPdf: {
    type: String,
    require: true,
  },
  reportAvatar: {
    type: String,
    require: true,
  },
  createdAt: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },
  sort: {
    type: String,
    require: true,
  },
});

const Resources = model("resources", resources);

export { Resources };
