import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    confirmpassword: {
      type: String,
      required: true,
      trim: true,
    },
    phonenumber: {
      type: String,
      required: true,
      trim: true,
    },
    companyname: {
      type: String,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default model('User', userSchema);
