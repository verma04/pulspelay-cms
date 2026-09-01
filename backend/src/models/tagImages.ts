const { model, Schema } = require("mongoose");

const tagImageSchema = new Schema({
  image: {
    type: String,
    require: true,
    unique: true,
  },
  createdAt: {
    type: String,
    require: true,
  },

  caption: {
    type: String,
  },
  tag: [
    {
      value: {
        type: String,
      },
      label: {
        type: String,
      },
    },
  ],

  member: [
    {
      top: Number,
      left: Number,
      tag: {
        type: Schema.Types.ObjectId,
        ref: "TeamMember",
      },
    },
  ],

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const TagImage = model("TagImage", tagImageSchema);

export { TagImage };
