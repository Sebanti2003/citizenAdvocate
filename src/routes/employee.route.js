
import express from "express";
import { createmployee, getallemployees } from "../controllers/employee.controller.js";

const router = express.Router();

router.post("/employeeregistration", createmployee);


router.get("/getallemployees", getallemployees);

export default router;