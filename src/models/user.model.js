import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    phonenumber: {
      type: Number
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
