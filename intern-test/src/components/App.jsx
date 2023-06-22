import Navbar from "./Navbar"
import Form from "./Form"
import '../App.css'
import Footer from "./Footer"
import { useEffect, useState } from "react"
function App() {
  const [users, setUsers] = useState([]);
  const updateUsers = (newUser) => {
    const temp = users.slice();
    temp.push(newUser);
    setUsers(temp);
  }
  const removeUser = (email) => {
    const temp = users.slice();
    setUsers(temp.filter((user)=> user.email !== email));
  }
  return (
    <div className="container">
      <Navbar/>
      <Form onSubmit={updateUsers} />
      <Footer list={users} removeUser={removeUser} />
    </div>
  )
}

export default App
