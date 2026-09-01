const { model, Schema } = require("mongoose");

const TeamMemberSchema = new Schema({
  memberName: {
    type: String,
    require: true,
  },
  memberAvatar: {
    type: String,
    require: true,
  },
  pulseplayID: {
    type: String,
    require: true,
  },
  memberCover: {
    type: String,
  },
  sort: {
    type: Number,
  },
  memberPersonlEmail: {
    type: String,
    require: true,
  },
  memberPhone: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },

  memberDOB: {
    type: String,
  },

  email: {
    type: String,
  },
  password: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  whatsApp: {
    type: String,
  },
  memberDescription: {
    type: String,
  },
  memberDesignation: {
    type: String,
  },

  shortDescription: {
    type: String,
  },
  dreams: [
    {
      type: String,
    },
  ],
  social: {
    instagram: String,
    linkedin: String,
    facebook: String,
    youtube: String,
    twitter: String,
    medium: String,
    snapchat: String,
    portfolio: String,
    dribble: String,
  },

  education: {
    type: String,
  },

  interest: [
    {
      type: String,
    },
  ],

  certificate: [
    {
      type: String,
    },
  ],

  memberDateOfJoinnng: {
    type: String,
  },

  memberPersonalEmail: {
    type: String,
  },

  memberCategory: [
    {
      value: {
        type: String,
      },
      label: {
        type: String,
      },
    },
  ],
  rating: {
    imagine: {
      type: Number,
    },
    design: {
      type: Number,
    },
    build: {
      type: Number,
    },
    perform: {
      type: Number,
    },
  },

  family: {
    motherName: String,
    fatherName: String,
    emergencyPhone: String,
  },

  gender: {
    type: String,
  },
  maritalstatus: {
    type: String,
  },

  address: {
    addressline1: String,
    addressline2: String,
    city: String,
    pincode: String,
    state: String,
  },

  memberWorkType: {
    type: String,
  },
  memberLineManger: {
    value: {
      type: String,
    },
    label: {
      type: String,
    },
  },

  status: {
    type: Boolean,
  },

  enabled: {
    type: Boolean,
    default: false,
  },

  createdAt: String,
  updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: false },
});

const TeamMember = model("TeamMember", TeamMemberSchema);

export { TeamMember };
