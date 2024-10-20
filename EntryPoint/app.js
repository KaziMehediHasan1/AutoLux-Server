const express = require("express");
const ConnectDB = require("../Config/db");
require("dotenv").config();
const app = express();
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("../src/Routes/UserRoute");
const listingDetailRoute = require("../src/Routes/ListingRoute");
const blogRoute = require("../src/Routes/BlogRoute");
const bookmarkRoute = require("../src/Routes/BookmarkListingRoute");
const productRoute = require("../src/Routes/ProductRoute");
const cartRoute = require("../src/Routes/CartRoute");
const payment = require("../src/Routes/PaymentRoute");
const Mail = require("../src/Routes/EmailRoute");
const review = require("../src/Routes/ReviewRoute");
const bodyParser = require("body-parser");
// connect to mongodb
ConnectDB();

// middleware..
app.use(express.json());
app.use(morgan("dev"));

app.use(
  cors({
    origin: ["https://autolux-one.netlify.app", "http://localhost:5173"],
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    credentials: true,
  })
);

// jwt token..
app.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.JWT_SECRET_TOKEN, {
    expiresIn: "1h",
  });
  res.json({ token });
});

// PAYMENT..
app.post("/create-checkout-session", async (req, res) => {
  const body = req.body;
  if (!body || body.length === 0) {
    return res.status(400).json({ error: "No Products found in request body" });
  }
  const lineItems = body?.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item?.title,
        images: [item?.images],
      },
      unit_amount: parseInt(item?.price) * 100,
    },
    quantity: item?.quantity,
  }));
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CHECKOUT_PORT}/cart?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CHECKOUT_PORT}/cancel`,
    });
    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Stripe Webhook to handle events
const endpointSecret = process.env.ENDPOINT_SECRET;
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    console.log("webhooks", req.body);
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("Checkout session was successful!", session);
    }
    const paymentIntent = await stripe.paymentIntents.retrieve(
      session.payment_intent
    );
    console.log(paymentIntent.id, "transaction id..");

    res.json({ received: true, paymentIntent });
  }
);
// Route to fetch checkout session details
app.get("/checkout-session", async (req, res) => {
  const { sessionId } = req.query;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Routes.
app.use("/", userRoutes);
app.use("/", listingDetailRoute);
app.use("/", blogRoute);
app.use("/", bookmarkRoute);
app.use("/", productRoute);
app.use("/", cartRoute);
app.use("/", payment);
app.use("/", Mail);
app.use("/", review);

module.exports = app;
