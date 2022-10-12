const Moment = require("moment");
const Booking = require("../models/Booking");
const Member = require("../models/Member");
const Bank = require("../models/Bank");

module.exports = {
  viewBooking: async (req, res) => {
    try {
      const booking = await Booking.find()
        .populate("memberId")
        .populate("bankId");
      res.render("admin/booking/view_booking", {
        moment: Moment,
        title: "Staycation | Booking",
        user: req.session.user,
        booking,
      });
    } catch (error) {}
  },
};
