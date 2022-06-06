const mongoose = require("mongoose");
const validator = require("validator");

const PhonebookSchema = new mongoose.Schema({
  picture: {
    type: "string",
  },
  birthday: {
    type: "string",
    validate: {
      validator: function (val) {
        validator.isDate(val);
      },
    },
  },
  name: { 
    type: "string",
  },
  address: {
    type: "string"
  },
  phone_number:
  { 
    type: "string",
  },
});
module.exports = mongoose.model("Phonebook", PhonebookSchema);