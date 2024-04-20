const express = require("express");
const rentalControllers = require("../controllers/rental.controllers");

const router = express.Router();

router.post("/create-rental", rentalControllers.createRental);
router.get("/get-rental", rentalControllers.getRental);

module.exports = router;
