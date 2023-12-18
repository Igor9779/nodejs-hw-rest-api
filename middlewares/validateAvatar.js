const { HttpError } = require("../helpers");

const validateAvatar = async (req, res, next) => {
  if (req.file === undefined) {
    next(
      HttpError(400, "The image is not found, please check form-data values!")
    );
  }
  next();
};

module.exports = validateAvatar;