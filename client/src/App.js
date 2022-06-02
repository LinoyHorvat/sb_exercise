import React, { useState, useEffect } from "react";
import "./style.css";
import myApi from "./api/Api";
import Card from "./Component/Card/Card";

function App() {
  const [phonebookData, setPhonebookData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getPhonebookData = async () => {
    const { data } = await myApi.get(`/?q=${searchTerm}`);
    console.log(data);
    setPhonebookData(data);
  };

  const age = (birthday) => {
    // TODO: get the current year
    return String(Number(2022 - birthday.slice(0, 4)));
  };

  useEffect(() => {
    getPhonebookData();
  }, [searchTerm ]);

  const showData = () => {
    return phonebookData.length > 0 ?
      phonebookData
        .map((contact, index) => {
          return (
            <div key={index}>
              <Card
                picture={contact.picture}
                name={contact.name}
                age={age(contact.birthday)}
                address={contact.address}
                phone_number={contact.phone_number}
              />
            </div>
          );
        })
    :
   <p>No results, please review your search or try a different one. 
   </p>
  };

  return (
    <div className="App">
      <h1>Yellow Pages</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {phonebookData && showData()}
    </div>
  );
}

export default App;
