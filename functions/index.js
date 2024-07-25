const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenev = require("dotenv");
dotenev.config();
const stripe = require("stripe")(process.env.API_KEY);
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    massage: "sucess",
  });
});
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  if (total > 0) {
    const paymentProcess = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).json({
      clientSecret: paymentProcess.client_secret,
    });
  } else {
    res.status(404).json({
      message: "Total must be more than 0 ",
    });
  }
});
exports.api = onRequest(app);
