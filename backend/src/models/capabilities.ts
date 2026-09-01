const { model, Schema } = require("mongoose");

const CapabilitiesSchema = new Schema({
  capabilitiesTitle: {
    type: String,
    require: true,
  },
  capabilitiesDescription: {
    type: String,
    require: true,
  },

  capabilitiesList: [
    {
      value: {
        type: String,
      },
      avatar: {
        type: String,
      },
    },
  ],

  createdAt: {
    type: String,
  },
});

const Capabilities = model("Capabilities", CapabilitiesSchema);

export { Capabilities };
