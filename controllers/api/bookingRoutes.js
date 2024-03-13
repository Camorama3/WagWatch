const router = require("express").Router();
const { Booking } = require("../../models");

router.post("/booking", async (req, res) => {
  try {
    const newBooking = await Booking.create({
      id: req.params.id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
