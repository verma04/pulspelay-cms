const { model, Schema } = require("mongoose");

const faceSchema = new  Schema({
    label: {
        type: String,
        required: true,
      
    },
    descriptions: {
        type: Array,
        required: true,
    },
    userID: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const FaceModel = model("Face", faceSchema);


export { FaceModel };