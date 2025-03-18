import Employee from "../models/Employee.js";
import bcrypt from "bcryptjs";
export const createmployee = async (req, res) => {
  const {
    name,
    email,
    phone,
    department,
    designation,
    employeeId,
    password,
    address,
    dateOfJoining,
  } = req.body;

  try {
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newEmployee = new Employee({
      name,
      email,
      phone,
      department,
      designation,
      employeeId,
      password: hashedPassword,
      address,
      dateOfJoining,
    });

    await newEmployee.save();

    res.status(201).json({ message: "Employee registered successfully" });
  } catch (err) {
    console.error("Error registering employee:", err);
    res.status(500).json({ message: "Error registering employee" });
  }
};
export const getallemployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error("Error fetching employees:", err);
    res.status(500).json({ message: "Error fetching employees" });
  }
};