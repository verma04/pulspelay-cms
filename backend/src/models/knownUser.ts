const { model, Schema } = require("mongoose");

const knownUserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  IPv4: {
    type: String,
    require: true,
  },

  amxId: {
    type: String,
    require: true,
  },

  uniqueID: {
    type: String,
    require: true,
    unique: true,
  },
  createdAt: {
    type: String,
    require: true,
  },
});

const KnownUser = model("knownUser", knownUserSchema);

export { KnownUser };
