const { model, Schema } = require("mongoose");

const ObjectId = Schema.Types.ObjectId;

const DeviceInfoSchema = new Schema({
  deviceOs: { type: String, required: true },
  deviceVersion: { type: String, required: true },
  deviceBrowser: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  deviceId: { type: String, required: true },
  region: { type: String, required: true },
  timezone: { type: String, required: true },

  city: { type: String, required: true },
  ipAddress: { type: String, default: "" },
  user: { type: ObjectId, ref: "user", required: true },
  token: { type: String, default: "" },
  notificationToken: { type: String, default: "" },
  createdAt: { type: String, default: new Date().toISOString() },
  logout: { type: Boolean, default: false },
});

const LoginSession = model("LoginSession", DeviceInfoSchema);

export { LoginSession };
