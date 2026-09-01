const { model, Schema } = require("mongoose");

const awardsSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    slug: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },

    decription: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
    status: {
        type: Boolean,
        require: true,
        default: false
    },

    updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: false },
    img: [{
        type: String,
        require: true
    }],
},
    {
        timestamps: true,
    }
);

const Awards = model("Awards", awardsSchema);



export { Awards }