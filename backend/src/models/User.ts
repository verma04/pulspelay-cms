const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },

  member: {
    type: Schema.Types.ObjectId,
    ref: "TeamMember",
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  createdAt: {
    type: String,
    require: true,
    unique: true,
  },
  role: {
    type: String,
  },
  avatar: {
    type: String,
  },

  assignRole: [
    {
      type: String,
    },
  ],

  otp: {
    type: String,
  },
  tempToken: {
    type: String,
  },

  token: [
    {
      deviceToken: {
        type: String,
        unique: false,
      },
    },
  ],
  iosToken: [
    {
      type: String,
      unique: false,
    },
  ],
});

const User = model("User", userSchema);

export { User };
