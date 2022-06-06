const Phonebook = require("../models/Phonebook");

const isPhoneNumber = (str) => {
  if (!isNaN(Number(str)) && str.length > 3) return true;
  return false;
};
const isAge = (str) => {
  if (
    !isNaN(Number(str)) &&
    Number(str) < 110 &&
    Number(str) > 0 &&
    str[0] != 0
  )
    return true;
  return false;
};
const year = (age) => {
  const currentYear =new Date().getFullYear()    
  return String(Number(2022 - age));
};

const getAllPhonebook = async (req, res) => {
  try {
    const { q } = req.query;
    const qArr = q.split(" ");

    const searchTermObj = { name: "", phone_number: "", year: "" };

    for (str of qArr) {
      if (isAge(str)) searchTermObj.year = year(str);
      else if (isPhoneNumber(str)) searchTermObj.phone_number = str;
      else searchTermObj.name = str;
    }

    let phonebook = [];
    const spaces = q.split(" ").length;
    switch (spaces) {
      case 1:
      case 3:
        phonebook = await Phonebook.aggregate([
          {
            $match: {
              $and: [
                {
                  phone_number: {
                    $regex: searchTermObj.phone_number,
                    $options: "i",
                  },
                },
                { birthday: { $regex: searchTermObj.year, $options: "i" } },
                { name: { $regex: searchTermObj.name, $options: "i" } },
              ],
            },
          },
        ]);
        break;

      case 2:
        phonebook = await Phonebook.aggregate([
          {
            $match: {
              $or: [
                {
                  $and: [
                    {
                      phone_number: {
                        $regex: searchTermObj.phone_number,
                        $options: "i",
                      },
                    },
                    { birthday: { $regex: searchTermObj.year, $options: "i" } },
                  ],
                  $and: [
                    { name: { $regex: searchTermObj.name, $options: "i" } },
                    {
                      phone_number: {
                        $regex: searchTermObj.phone_number,
                        $options: "i",
                      },
                    },
                  ],
                  $and: [
                    { birthday: { $regex: searchTermObj.year, $options: "i" } },
                    { name: { $regex: searchTermObj.name, $options: "i" } },
                  ],
                },
              ],
            },
          },
        ]);
        break;
    }

    res.status(200).send(phonebook);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllPhonebook,
};
