const express = require("express");

const router = express.Router();

const {
  validation,
  authenticate,
  validateSubscription,
} = require("../../middlewares");

const { schemas, updateSubscriptionSchemas } = require("../../models/user");

const ctrl = require("../../controllers/auth");

router.post("/register", validation(schemas.registerSchema), ctrl.register);

router.post("/login", validation(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validateSubscription(updateSubscriptionSchemas),
  ctrl.updateSubscription
);

module.exports = router;