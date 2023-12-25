const validation = require("./validation");
const isValidId = require("./isValidId");
const validateFavorite = require("./validateFavorite");
const authenticate = require("./authenticate");
const validateSubscription = require("./validateSubscription");
const validateSimpleBody = require("./validateSimpleBody");

module.exports = {
  validation,
  isValidId,
  validateFavorite,
  authenticate,
  validateSubscription,
  validateSimpleBody,
};