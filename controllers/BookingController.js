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
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };

      const booking = await Booking.findOne({ _id: id })
        .populate("memberId")
        .populate("bankId");

      res.render("admin/booking/show_detail_booking", {
        title: "Staycation | Detail Booking",
        user: req.session.user,
        booking,
        alert,
      });
    } catch (error) {
      res.redirect("admin/booking");
    }
  },

  actionAccepted: async (req, res) => {
    const { id } = req.params;
    try {
      const booking = await Booking.findOne({ _id: id });
      booking.payments.status = "Accepted";
      await booking.save();
      req.flash("alertMessage", "Payment Confirmation Success");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/booking/${id}`);
    } catch (error) {
      res.redirect(`admin/booking/${id}`);
    }
  },

  actionRejected: async (req, res) => {
    const { id } = req.params;
    try {
      const booking = await Booking.findOne({ _id: id });
      booking.payments.status = "Rejected";
      await booking.save();
      req.flash("alertMessage", "Payment Confirmation Rejected");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/booking/${id}`);
    } catch (error) {
      res.redirect(`admin/booking/${id}`);
    }
  },
};
