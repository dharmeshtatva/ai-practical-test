const { Joi, Segments } = require("celebrate");

module.exports = {
  getUser: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  },
  getUser: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  },
  deleteUser: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  },
  createUser: {
    [Segments.BODY]: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  },
  updateUser: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  },
  typeAhead: {
    [Segments.PARAMS]: {
      input: Joi.string().required(),
    },
  },
};
