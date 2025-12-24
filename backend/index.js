const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables FIRST
dotenv.config();

console.log("Environment loaded. STRIPE_KEY present:", !!process.env.STRIPE_KEY);

// Initialize Stripe with the key
const stripe = require("stripe")(process.env.STRIPE_KEY || "sk_test_dummy_key");

const app = express();

// Production CORS settings
const allowedOrigins = [
  'http://localhost:5173',
  'https://amazon-clone.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ 
    message: "API is running successfully 🚀",
    envLoaded: !!process.env.STRIPE_KEY
  });
});

app.post("/payments/create", async (req, res) => {
  const total = req.body.total;

  if (!total || total <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: "usd",
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Stripe payment error", error);
    res.status(500).json({ error: error.message });
  }
});

// Dynamic port for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Using Stripe key from:", process.env.STRIPE_KEY ? "Environment" : "Nowhere - will fail!");
});