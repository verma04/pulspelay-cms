const { model, Schema } = require("mongoose");

const resourcesTypes = new Schema({
  title: String,
  label: String,
});

const ResourcesTypes = model("resourcesTypes", resourcesTypes);

export { ResourcesTypes };
