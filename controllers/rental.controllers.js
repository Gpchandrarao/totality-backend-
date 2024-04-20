const Rental = require("../models/rental.model");

const createRental = async (req, res) => {
  try {
    const { title, descriptions, prices, images } = req.body;

    const newRental = new Rental({
      title,
      descriptions,
      prices,
      images,
    });
    await newRental.save();
    res.status(200).json({ message: "Rental crested", rental: newRental });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

const getRental = async (req, res) => {
  try {
    const rental = await Rental.find();
    if (!rental) {
      return res.status(404).json({ error: "Reacipe not found" });
    }
    res.status(200).json({ rental });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createRental, getRental };
