import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  seeker_pro: "price_1UJarOQ8P9tCCAhA3R1Y6ene",
  seeker_premium: "price_1UJcsmQ8P9tCCAhAdC0HE8pb",
  recruiter_growth: "price_1UJzTuQ8P9tCCAhALW9kOL0E",
  recruiter_enterprise: "price_1UJzUaQ8P9tCCAhAXtMux7w5",
};