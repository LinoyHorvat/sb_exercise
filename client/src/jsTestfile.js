const age = (birthday) => {
  // TODO: get the current year
  return String(Number(2022 - birthday.slice(0, 4)));
};
const phonebookData = [
  {
    "_id": "5dd6a1bf97dce12cc05d3855",
    "picture": "image6.png",
    "birthday": "1961-07-12T05:41:09 -02:00",
    "name": "Lou Gardner",
    "address": "888 Thatford Avenue, Chalfant, Alabama, 2716",
    "phone_number": "(053) 8589246"
  },
  {
    "_id": "5dd6a1bf67256d9557ed1965",
    "picture": "image5.png",
    "birthday": "1940-03-29T02:16:36 -02:00",
    "name": "Erin Knight",
    "address": "608 Polar Street, Cotopaxi, Connecticut, 8858",
    "phone_number": "(053) 4110686"
  },
  {
    "_id": "5dd6a1bf32e9d8250ad3225f",
    "picture": "image6.png",
    "birthday": "2006-07-01T12:16:26 -03:00",
    "name": "Frankie Weaver",
    "address": "268 Moultrie Street, Jacksonburg, District Of Columbia, 550",
    "phone_number": "(052) 8468843"
  }]
const searchTerm = "Lou "

  phonebookData
  .filter((contact) => {
    const contactInfo = [
      contact.name.toLocaleLowerCase(),
      age(contact.birthday),
      contact.phone_number,
    ];
    const searchTermsArr = searchTerm.toLocaleLowerCase().split(" ");
    console.log(contactInfo);
    console.log(searchTermsArr);
    // if (setSearchTerm === "") return contact;
    searchTermsArr.some((searchWord) => contactInfo.some((contactVal) => {
      contactVal.includes(searchWord)}))          
      // else return "No results, please review your search or try a different one"
  })