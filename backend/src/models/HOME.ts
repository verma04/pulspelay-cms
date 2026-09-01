const { model, Schema } = require("mongoose");

const homeSchema = new Schema(
  {
    image: String,
    work: { type: Schema.Types.ObjectId, ref: "work" },
    url: String,
    sort: Number,
    color: String,
  },
  {
    timestamps: true,
  }
);

const Home = model("homePage", homeSchema);

export { Home };
