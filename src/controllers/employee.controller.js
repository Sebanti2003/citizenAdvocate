import Govemployee from "../models/govemployee.model.js";

export const createmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      state,
      phonenumber,
      location,
      designation,
      ministry_id,
    } = req.body;
    const employee = await Employee.create({
      name,
      email,
      password,
      state,
      phonenumber,
      location,
      designation,
      ministry_id,
    });
    return res.status(200).json({
      message: "Employee created successfully",
      employee: employee,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error in createmployee",
      success: false,
      error: error.message,
    });
  }
};

export const getallemployees = async (req, res) => {
  try {
    const employees = await Govemployee.find();
    return res.status(200).json({
      message: "All employees fetched successfully",
      employees: employees,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error in getallemployees",
      success: false,
      error: error.message,
    });
  }
};
