import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    profilePicture: { type: String },
    coverpicture: { type: String },
    about: { type: String },
    livesin: { type: String },
    worksAt: { type: String },
    relationship: { type: String },
    country: { String },
    followers: [],
    followings: [],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
