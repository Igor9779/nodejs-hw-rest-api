const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");
const subscriptionList = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": `missed required email field`,
  }),
  password: Joi.string().required().messages({
    "any.required": `missed required password field`,
  }),
  subscription: Joi.string().valid(...subscriptionList),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": `missed required email field`,
  }),
  password: Joi.string().required().messages({
    "any.required": `missed required password field`,
  }),
});

const emailSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": `missed required field email`,
  }),
});

const updateSubscriptionSchemas = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required()
    .messages({
      "any.required": `missed required subscription field`,
    }),
});

const schemas = {
  registerSchema,
  loginSchema,
  emailSchema,
};

const User = model("user", userSchema);

module.exports = {
  schemas,
  User,
  updateSubscriptionSchemas,
};