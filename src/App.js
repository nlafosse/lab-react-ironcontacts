import React, {useState} from 'react';
import contacts from "./contacts.json";
import './App.css';

let newContacts = [...contacts]
let fiveContacts = contacts.slice(0, 4);

function App() {
  const [contactArr, setContactArr] = useState(fiveContacts)

  function sortButtons(button){
    let sortArr = [...contactArr]
    if (button === 'name'){
      sortArr.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        // names must be equal
        return 0;
      })
    }
    if (button === 'pop') {
      sortArr.sort((a, b) => a.popularity - b.popularity);
    }
    setContactArr(sortArr)
  }

  // function sortNames(){
  //   let sortArr = [...contactArr]
  //   sortArr.sort(function(a, b) {
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     // names must be equal
  //     return 0;
  //   })
  //   setContactArr(sortArr)
  // }

  // function sortPop(){
  //   let sortArr = [...contactArr]
  //   sortArr.sort((a, b) => a.popularity - b.popularity);
  //   setContactArr(sortArr)
  // }

  function deleteContact(person){
    let removePersonArr = [...contactArr]
    setContactArr(removePersonArr.filter(contact => contact.id != person.id))
    
  }

  return (
    <div className="App">
      <h1>Iron Concacts</h1>

      <div className="topButtons">
        <button type="button" onClick={() =>{
          let i = Math.floor(Math.random()*newContacts.length)
          setContactArr(contactArr.concat(newContacts[i]))
          newContacts.splice(i, 1)
        }}>Add Random Contact</button>
      
        <button onClick={() => sortButtons('name')}>Sort by name</button>
      
        <button onClick={() => sortButtons('pop')}>Sort by popularity</button>
      </div>

      

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {contactArr.map(person => {
          return (
            <tr>
              <td><img src={person.pictureUrl} height="100" /></td>
              <td>{person.name}</td>
              <td>{person.popularity}</td>
              <td><button onClick={() => deleteContact(person)}>Delete</button></td>
            </tr>
          )
        })}

        

      </table>
    </div>
  );
}


export default App;