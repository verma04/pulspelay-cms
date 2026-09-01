const { model, Schema } = require("mongoose");

const mediaSchema = new Schema({
  imgUrl: {
    type: String,
    require: true,
  },

  createdAt: {
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
});

const Media = model("mediaSchema", mediaSchema);

export { Media };
