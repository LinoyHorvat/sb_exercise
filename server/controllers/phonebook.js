const Phonebook = require("../models/Phonebook");



const getAllPhonebook = async (req, res) => {
  try {
    const { q } = req.query;

    const spaces = q.split(' ').length - 1;
    console.log("spaces",spaces);

    

    const searchTermObj = {
      name: q ? String(q.match(/[a-zA-z]{1,}/g)) : "",
      age: String(q.match(/\d{1,}/g)).length < 4 ? String(q.match(/\d{1,}/g)) : "",
      phone_number: q ? String(q.match(/\d{1,}/g)) : "",
    };
    console.log(searchTermObj);
    // const phonebook = await Phonebook.find({$regex: q});
    // const phonebook = await Phonebook.find();

    // const phonebook = await Phonebook.aggregate([
    //   { $match: { "phone_number": { $regex: searchTermObj.phone_number, $options: "i" },
    //   "name": { $regex: searchTermObj.name, $options: "i" }
    // }},
    // ]);
    // const phonebook = await Phonebook.aggregate([
    //   {
    //     $match: {
    //       $or: [
    //         {
    //           phone_number: {
    //             $regex: searchTermObj.phone_number,
    //             $options: "i",
    //           },
    //           name: { $regex: searchTermObj.name, $options: "i" },
    //         },
    //       ],
    //     },
    //   },
    // ]);

    const phonebook = await Phonebook.aggregate([
      {
        $match: {
          $and: [
            {
              $or: [
                {
                  phone_number: {
                    $regex: searchTermObj.phone_number,
                    $options: "i",
                  },
                },
                { name: { $regex: searchTermObj.name, $options: "i" } },
              ],
            },
          ],
        },
      },
    ]);

    // console.log(phonebook);
    res.status(200).send(phonebook);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllPhonebook,
};
