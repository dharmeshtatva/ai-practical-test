const express = require("express");
const { celebrate } = require("celebrate");
const UserService = require("../services/users");
const validations = require("../validators/users");
const { successResponse, errorResponse } = require("../helpers");

const router = express.Router();
const userService = new UserService();

// Get All Users
router.get("/users/", (req, res) => {
  return userService
    .getAllUsers()
    .then((userData) => {
      res.status(200).json(successResponse(userData));
    })
    .catch((err) => {
      console.error("Something went wrong in get users", err);
      res
        .status(500)
        .json(errorResponse(err.message || "Something went wrong"));
    });
});

// Get User by ID
router.get("/user/:id", celebrate(validations.getUser), (req, res) => {
  return userService
    .getUserById(req.params.id)
    .then((userData) => {
      res.status(200).json(successResponse(userData));
    })
    .catch((err) => {
      console.error("Something went wrong in get user", err);
      res
        .status(500)
        .json(errorResponse(err.message || "Something went wrong"));
    });
});

// Create User
router.post("/user/", celebrate(validations.createUser), (req, res) => {
  const reqBody = req.body;
  return userService
    .createUser(reqBody)
    .then((userData) => {
      res
        .status(201)
        .json(successResponse(userData, "User created SuccessFully"));
    })
    .catch((err) => {
      console.error("Something went wrong in create user", err);
      res
        .status(500)
        .json(errorResponse(err.message || "Something went wrong"));
    });
});

// Update User
router.put("/user/:id", celebrate(validations.updateUser), (req, res) => {
  const userId = req.params.id;
  const reqBody = req.body;
  return userService
    .updateUser(userId, reqBody)
    .then((userData) => {
      res
        .status(200)
        .json(successResponse(userData, "User Updated SuccessFully"));
    })
    .catch((err) => {
      console.error("Something went wrong in Update user", err);
      res
        .status(500)
        .json(errorResponse(err.message || "Something went wrong"));
    });
});

// Delete User by ID
router.delete("/user/:id", celebrate(validations.deleteUser), (req, res) => {
  return userService
    .deleteUserById(req.params.id)
    .then((deleted) => {
      res.status(200).json(successResponse(deleted));
    })
    .catch((err) => {
      console.error("Something went wrong in delete user", err);
      res
        .status(500)
        .json(errorResponse(err.message || "Something went wrong"));
    });
});

// TypeAhead
router.get(
  "/typeahead/:input",
  celebrate(validations.typeAhead),
  (req, res) => {
    return userService
      .userTypeAhead(req.params.input)
      .then((userData) => {
        res.status(200).json(successResponse(userData));
      })
      .catch((err) => {
        console.error("Something went wrong in get users", err);
        res
          .status(500)
          .json(errorResponse(err.message || "Something went wrong"));
      });
  }
);

module.exports = router;
