// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';

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

  const [formData,setFormData] = useState({firstName:"" , lastName:"", comments:"", isVisible:true, mode:"", favCar:""})

  function changeHandler(event){
    //destructuring all value
    const {name,type,checked,value} = event.target
    setFormData(prevFormData => {
      return {
        // here first we care copying prev data and than in prev 
        // data we are updating whichever value is updated
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value 
        // ternary operator to check if its checkbox or not 
        }

    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }




  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="first name" onChange={changeHandler} name="firstName" value={formData.firstName}/>
        <br></br>
        <input type="text" placeholder='last name' onChange={changeHandler} name="lastName" value={formData.lastName}/>
        <br></br>
        <textarea placeholder='enter your comment here' onChange={changeHandler} name="comments" value={formData.comments}/>
        <br></br>
        <input type="checkbox" onChange={changeHandler} name="isVisible" id='isVisible' checked={formData.isVisible} value="Hello There"/>
        <label htmlFor='isVisible'>Hello there</label>
        <br></br>
        <input type="radio" onChange={changeHandler} name="mode" value= "online mode" id="online-mode"/>
        <label htmlFor='online-mode'>Online Mode</label>
        <br></br>
        <input type="radio" onChange={changeHandler} name="mode" value= "offline mode" id="offline-mode"/>
        <label htmlFor='offline-mode'>Offline Mode</label>
        <br></br>
        {/* drop down */}
        <select name='favCar'onChange = {changeHandler} value={formData.favCar} id= "favCar">
        <option value="">Select a car</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="audi">Audi</option>
        <option value="bmw">BMW</option>
        <option value="mercedes">Mercedes</option>
        <option value="opel">Opel</option>
        </select>

        <button>submit</button>

      </form>
    </div>
  );
}

export default App;
