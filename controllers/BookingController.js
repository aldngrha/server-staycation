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
    } catch (error) {
      res.redirect("admin/booking");
    }
  },

  showDetailBooking: async (req, res) => {
    const { id } = req.params;
    try {
      const booking = await Booking.findOne({ _id: id })
        .populate("memberId")
        .populate("bankId");
      console.log(booking);
      res.render("admin/booking/show_detail_booking", {
        moment: Moment,
        title: "Staycation | Detail Booking",
        user: req.session.user,
        booking,
      });
    } catch (error) {}
  },
};
