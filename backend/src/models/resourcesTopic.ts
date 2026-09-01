const { model, Schema } = require("mongoose");

const resourcesTopic = new Schema({
  title: String,
  label: String,
});

const ResourcesTopic = model("resourcesTopic", resourcesTopic);

export { ResourcesTopic };
