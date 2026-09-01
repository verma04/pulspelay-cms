const { model, Schema } = require("mongoose");

const ImageSchema = new Schema({
  imgName: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
  imgAlt: {
    type: String,
    require: true,
  },

  memberArr: [
    {
      memberName: {
        type: String,
      },
      id: {
        type: Schema.Types.ObjectId,
        ref: "TeamMember",
      },
    },
  ],

  createdAt: String,
});

const Image = model("Image", ImageSchema);

export { Image };
