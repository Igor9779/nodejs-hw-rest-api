const validation = require("./validation");
const isValidId = require("./isValidId");
const validateFavorite = require("./validateFavorite");
const authenticate = require("./authenticate");
const validateSubscription = require("./validateSubscription");
const upload = require("./upload");
const validateAvatar = require("./validateAvatar");

module.exports = {
  validation,
  isValidId,
  validateFavorite,
  authenticate,
  validateSubscription,
  upload,
  validateAvatar,
};