const { model, Schema } = require("mongoose");

const newsLetterSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const NewsLetter = model("newsLetter", newsLetterSchema);

export { NewsLetter };
