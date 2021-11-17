import React, {useState} from 'react';
import contacts from "./contacts.json";
import './App.css';

let fiveCelebs = contacts.slice(0, 5);

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {fiveCelebs.map(celeb => {
          return (
            <tr>
              <td><img src={celeb.pictureUrl} height="100" /></td>
              <td>{celeb.name}</td>
              <td>{celeb.popularity}</td>
            </tr>
          )
        })}

        

      </table>
    </div>
  );
}


export default App;