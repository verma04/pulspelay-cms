const { model, Schema } = require("mongoose");

const adviserSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        require: true,
    },
    slug: {
        type: String,
        require: true,
    },
    designation: {
        type: String,
        require: true,
    },


    videoUrl: {
        type: String,
        require: false,
    },
    about: {
        type: String,
        require: true,
    },

    status: {
        type: Boolean,
        require: true,
        default: false
    },
    social: {
        instagram: String,
        linkedin: String,
        facebook: String,
        youtube: String,
        twitter: String,
        medium: String,
        portfolio: String,
    },

    updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: false },

},
    {
        timestamps: true,
    }
);

const Adviser = model("Adviser", adviserSchema);



export { Adviser }