const express = require("express");

const router = express.Router();

const {
  validation,
  authenticate,
  upload,
  validateAvatar,
  validateSimpleBody,
} = require("../../middlewares");

const { schemas, updateSubscriptionSchemas } = require("../../models/user");

const ctrl = require("../../controllers/auth");

router.post("/register", validation(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/verify",
  validateSimpleBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

router.post("/login", validation(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validateSimpleBody(updateSubscriptionSchemas),
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  validateAvatar,
  ctrl.updateAvatar
);

module.exports = router;