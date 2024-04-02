import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema(
  {
    token: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
);

TokenSchema.index(
  {
    expiresAt: 1,
  },
  {
    expireAfterSeconds: 60,
  }
);

export const TokenModel = mongoose.model("Token", TokenSchema)