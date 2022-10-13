const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");
const fs = require("fs");

chai.use(chaiHttp);

describe("API ENDPOINT TESTING", () => {
  it("GET Landing Page", (done) => {
    chai
      .request(app)
      .get("/api/landing-page")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.be.have.property("hero");
        expect(res.body.hero).to.be.have.all.keys(
          "treasures",
          "travelers",
          "cities"
        );
        expect(res.body).to.be.have.property("mostPicked");
        expect(res.body.mostPicked).to.have.an("array");
        expect(res.body).to.be.have.property("category");
        expect(res.body.category).to.have.an("array");
        expect(res.body).to.be.have.property("testimonial");
        expect(res.body.testimonial).to.have.an("object");
        done();
      });
  });

  it("GET Detail Page", (done) => {
    chai
      .request(app)
      .get("/api/detail-page/5e96cbe292b97300fc902229")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("Object");
        expect(res.body).to.have.property("country");
        expect(res.body).to.have.property("isPopular");
        expect(res.body).to.have.property("unit");
        expect(res.body).to.have.property("sumBooking");
        expect(res.body).to.have.property("imageId");
        expect(res.body.imageId).to.have.an("array");
        expect(res.body).to.have.property("featureId");
        expect(res.body.featureId).to.have.an("array");
        expect(res.body).to.have.property("activityId");
        expect(res.body.activityId).to.have.an("array");
        expect(res.body).to.have.property("_id");
        expect(res.body).to.have.property("title");
        expect(res.body).to.have.property("price");
        expect(res.body).to.have.property("city");
        expect(res.body).to.have.property("description");
        expect(res.body).to.have.property("__v");
        expect(res.body).to.have.property("bank");
        expect(res.body.bank).to.have.an("array");
        expect(res.body).to.be.have.property("testimonial");
        expect(res.body.testimonial).to.have.an("object");
        done();
      });
  });

  it("GET Booking Page", (done) => {
    const image = __dirname + "/hero.jpg";
    const dataSample = {
      image,
      idItem: "5e96cbe292b97300fc902229",
      duration: 2,
      bookingStartDate: "9-4-2021",
      bookingEndDate: "11-4-2021",
      firstName: "poetri",
      lastName: "namira",
      email: "ptrinmra@gmail.com",
      phoneNumber: "089812930121",
      accountHolder: "98971821",
      bankFrom: "BNI",
    };
    chai
      .request(app)
      .post("/api/booking-page")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .field("idItem", dataSample.idItem)
      .field("duration", dataSample.duration)
      .field("bookingStartDate", dataSample.bookingStartDate)
      .field("bookingEndDate", dataSample.bookingEndDate)
      .field("firstName", dataSample.firstName)
      .field("lastName", dataSample.lastName)
      .field("email", dataSample.email)
      .field("phoneNumber", dataSample.phoneNumber)
      .field("accountHolder", dataSample.accountHolder)
      .field("bankFrom", dataSample.bankFrom)
      .attach("image", fs.readFileSync(dataSample.image), "hero.jpg")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("message");
        expect(res.body.message).to.equal("Success Booking");
        expect(res.body).to.have.property("booking");
        expect(res.body.booking).to.have.all.keys(
          "payments",
          "_id",
          "invoice",
          "bookingStartDate",
          "bookingEndDate",
          "total",
          "itemId",
          "memberId",
          "__v"
        );
        expect(res.body.booking.payments).to.have.all.keys(
          "status",
          "proofPayment",
          "bankFrom",
          "accountHolder"
        );
        expect(res.body.booking.itemId).to.have.all.keys(
          "_id",
          "title",
          "price",
          "duration"
        );
        done();
      });
  });
});
