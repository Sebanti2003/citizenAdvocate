import mongoose from "mongoose";

const govemployeeSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    index: true,
    unique: [true, "Email must be unique"],
  },
  password: { type: String, required: [true, "Password is required"] },
  state: { type: String, required: [true, "State is required"] },
  phonenumber: {
    type: String,
    required: [true, "Phone number is required"],
    unique: [true, "Phone number must be unique"],
    match: [/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"],
  },
  location: { type: String, required: [true, "Location is required"] },
  designation: { type: String, required: [true, "Designation is required"] },
  ministry_id: {
    type: String,
  },
});
const Govemployee = mongoose.model("Govemployee", govemployeeSchema);

export default Govemployee;
