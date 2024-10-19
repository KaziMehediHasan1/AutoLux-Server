const mongoose = require("mongoose");

// Define the schema for subscription plans
const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  features: {
    listings: {
      type: Number,
    },
    visibility_days: {
      type: Number,
    },
    highlighted_in_search: {
      type: Boolean,
    },
    revisions: {
      type: Number,
    },
    delivery_time_days: {
      type: Number,
    },
    product_support: {
      type: Boolean,
    },
  },
});

// Create the model for the subscription plan
const SubscriptionPlan = mongoose.model("membership", subscriptionSchema);

module.exports = SubscriptionPlan;
