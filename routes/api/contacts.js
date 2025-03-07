const express = require("express");

const {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
  updateStatusContact,
} = require("../../controllers/contacts");

const {
  validation,
  isValidId,
  validateSimpleBody,
  authenticate,
} = require("../../middlewares");

const { joiSchema, updateFavoriteSchemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, getAll);

router.get("/:contactId", authenticate, isValidId, getById);

router.post("/", authenticate, validation(joiSchema), add);

router.delete("/:contactId", authenticate, isValidId, deleteById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validation(joiSchema),
  updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateSimpleBody(updateFavoriteSchemas),
  updateStatusContact
);

module.exports = router;