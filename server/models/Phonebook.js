const mongoose = require("mongoose");
const validator = require("validator");

const PhonebookSchema = new mongoose.Schema({
  // _id: '{{objectId()}}',
  // picture: 'image{{integer(0, 10)}}.png',
  // birthday: '{{date(new Date(1934, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  // name: '{{firstName()}} {{surname()}}',
  // address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
  // phone_number: '(05{{integer(2,4)}}) {{integer(1000000, 9999999)}}'

  // {
  //   "_id": "5dd6a1bf97dce12cc05d3855",
  //   "picture": "image6.png",
  //   "birthday": "1961-07-12T05:41:09 -02:00",
  //   "name": "Lou Gardner",
  //   "address": "888 Thatford Avenue, Chalfant, Alabama, 2716",
  //   "phone_number": "(053) 8589246"
  // },

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