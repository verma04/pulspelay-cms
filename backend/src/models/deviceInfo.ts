const { model, Schema } = require("mongoose");

const deviceInfoSchema = new Schema({
  country_code: String,
  country_name: String,
  city: String,
  postal: String,
  latitude: String,
  longitude: String,
  IPv4: String,
  state: String,
  name: String,
  version: String,
  os: String,
  type: String,
  createdAt: String,
  page: String,
  user: { type: Schema.Types.ObjectId, ref: "knownUser" },
});

const DeviceInfo = model("deviceInfo", deviceInfoSchema);

export { DeviceInfo };
