// 2. Display a list of user objects (id, name) and implement a search feature to filter results.

import React from "react";
import {useState} from "react";

function App() {
const [users, setUsers] = useState([
   { id: 1, name: "Nick", pay: 29000 },
    { id: 2, name: "John", pay: 32000 },
    { id: 3, name: "Jane", pay: 28000 },
    { id: 4, name: "Doe", pay: 35000 },
    { id: 5, name: "Smith", pay: 14000 },
    { id: 6, name: "Emily", pay: 40000 },
    { id: 7, name: "Michael", pay: 22000 },
    { id: 8, name: "Sarah", pay: 31000 },
]);

const [search, setSearch ] = useState('');

const filteredUsers = users.filter(users => 
    users.name.toLocaleLowerCase().includes(search.toLocaleLowerCase() )
);


const sortByPay = (order)=> {
  const sorted = [...users].sort((a,b) => {
    if(order ==='low'){
      return a.pay - b.pay;
    }
    else {
      return b.pay - a.pay ;
    }
  });
  setUsers(sorted);
}


return (
  <div>
    <div style={style.box}>
      <h3>Users List </h3>

      <div style={style.sort}>
        <button onClick={() => sortByPay ('low')}>Low Pay</button>
        <button onClick={() => sortByPay ('high')}>High Pay</button>
      </div>

      <input type="text" 
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={style.input}
      />
      <ul >
        {
          filteredUsers.length > 0 ? 
          (
            filteredUsers.map ((users => (
              <li key={users.id} style={style.list} >
                <span>{users.id} : { users.name}</span>
                <strong>${users.pay.toLocaleString()}</strong>
              </li>
            )))
          ) :
          (
            <li>No users found</li>
          )
        }
      </ul>

    </div>
  </div>
)
}
export default App;

const style = {
  box:{
    padding: "20px",
    margin: "20px",
    width: "300px",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    padding: "8px", 
    marginBottom: "10px",
    width: "100%",
    boxSizing: "border-box",
  },
  list:{
    listStyle: "none",
    padding: "10px",
    borderBottom: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
  },
  sort:{
    marginBottom: "10px",
    padding: "20px", 
    fontFamily: "sans-serif", 
    maxWidth: "400px",
    display: "flex",
    justifyContent: "space-between",

  }
}

