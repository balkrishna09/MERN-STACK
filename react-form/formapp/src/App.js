// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // const[firstName,setFirstName] = useState("");
  // const[lastName,setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);


  // function changeHandlerFirstName(event){
  //   setFirstName(event.target.value);
  //   }

  // function changeHandlerLastName(event){
  //   setLastName(event.target.value);
  //   }

  const [formData,setFormData] = useState({firstName:"" , lastName:""})

  function changeHandler(event){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
        }

    })
  }

  console.log(formData);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="first name" onChange={changeHandler} name="firstName"/>
        <input type="text" placeholder='last name' onChange={changeHandler} name="lastName"/>
      </form>
    </div>
  );
}

export default App;
