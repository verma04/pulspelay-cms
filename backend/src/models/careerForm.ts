const { model, Schema } = require("mongoose");

const carrerFormSchema = new Schema({
  candidateName: {
    type: String,
    require: true,
  },
  candidateEmail: {
    type: String,
    require: true,
  },
  candidatePhone: {
    type: String,
    require: true,
  },
  candidateMessage: {
    type: String,
    require: true,
  },
  jobTitle: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "Carrer",
    },
    carrerTitle: {
      type: Schema.Types.ObjectId,
      ref: "Carrer",
    },
  },
  candidatePosition: {
    type: String,
    require: true,
  },
  candidateCv: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },

  createdAt: {
    type: String,
  },
  referrer: {
    referrerName: {
      type: String,
    },
    referrerEmail: {
      type: String,
    },
    referrerPhone: {
      type: String,
    },
    referrerLocation: {
      type: String,
    },
  },
});

const CareerForm = model("  carrerForm", carrerFormSchema);

export { CareerForm };
