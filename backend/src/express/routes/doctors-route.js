import express from "express";
import makeCallback from "./../make-callback";
import {
	getDoctors, getDoctorsId,

} from "./../../controllers";

const router = express.Router();

router.get("/", makeCallback(getDoctors));
router.get("/:Auto_id", makeCallback(getDoctorsId));

export default router;

