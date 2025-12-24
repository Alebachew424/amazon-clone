const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running successfully " });
});

app.post("/payments/create", async (req, res) => {
  const total = parseInt(req.body.total);

  if (!total || total <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100, // ✅ cents
      currency: "usd",
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    logger.error("Stripe payment error", error);
    res.status(500).json({ error: error.message });
  }
});

exports.api = onRequest(app);
