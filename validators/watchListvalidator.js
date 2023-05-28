const { checkSchema } = require("express-validator");
const mongoose = require("mongoose");

const addValidate = checkSchema({
  userId: {
    in: ["body"],
    errorMessage: "user Id   is required",
    custom: {
      options: async (value) => {
        if (value === undefined || value === "") {
          throw new Error("user Id   is required");
        }
        return true;
      },
    },
  },
  code: {
    in: ["body"],
    errorMessage: "crypto Code   is required",
    custom: {
      options: async (value) => {
        if (value === undefined || value === "") {
          throw new Error("crypto Code   is required");
        }
        return true;
      },
    },
  },
  lowPrice: {
    in: ["body"],
    errorMessage: "Low price  is required",
    custom: {
      options: async (value) => {
        if (value === undefined || value === "") {
          throw new Error("low Price is required.");
        }

        return true;
      },
    },
  },
  highPrice: {
    in: ["body"],
    errorMessage: "Low price  is required",
    custom: {
      options: async (value) => {
        if (value === undefined || value === "") {
          throw new Error("low Price is required.");
        }

        return true;
      },
    },
  },
});

module.exports = { addValidate };
