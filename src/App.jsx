import React , { useState }from 'react'
import axios from 'axios'

const App = () => {

  const [formState , setFormState] = useState({
    username : "" ,
    password : ""
  })
   console.log(formState , "formState")

  const handleInputChange = (event) => {
    console.log(event, "event");

    if (event.target.name === "username") {
      setFormState({
        ...formState,
        username: event.target.value,
      });
    } else if (event.target.name === "password") {
      setFormState({
        ...formState,
        password: event.target.value,
      });
    }
  };
   const handleCreate = () => {
    // http://localhost:4001/createSign?username=kumar&password=kumar123
    axios.get(`http://localhost:4001/createSign?username=${formState.username}&password=${formState.password}`)
   }
  return (
    <div>
        <div>
         <input name="username" onChange={handleInputChange} />
         <input name="password" onChange={handleInputChange} />
         <button onClick={handleCreate}>Create User</button>
       </div>
      <br />
    </div>
  )
}

export default App