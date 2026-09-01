const { model, Schema } = require("mongoose");

const NotificationSchema = new Schema({
  notificationType: {
    type: String,
    require: true,
  },
  notification: [
    {
      type: String,
    },
  ],

  createdAt: {
    type: String,
  },
});

const Notification = model("Notifications", NotificationSchema);

export { Notification };
