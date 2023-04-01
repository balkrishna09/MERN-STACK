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

  const [formData,setFormData] = useState({firstName:"" , lastName:"", comments:true, candidates:true, offers:true , isVisible:true, mode:"", favCar:"",email:"",country:"India", streetAddress:"", city:"", state:"",postalCode:"",pushNotification:""})

  function changeHandler(event){
    //destructuring all value
    const {name,type,checked,value} = event.target
    setFormData(prevFormData => {
      return {
        // here first we care copying prev data and than in prev 
        // data we are updating whichever value is updated
        ...prevFormData,
        [name] : type ==="checkbox"? checked : value
        // ternary operator to check if its checkbox or not 
        }

    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }




  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler} className="">

        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" placeholder='Enter your first name...' value={formData.firstName} onChange={changeHandler}
          className="block border-2 border-black"
        />


        <label htmlFor="lastName">last Name</label>
        <input type="text" name="lastName" id="lastName" placeholder='Enter your last name...' value={formData.lastName} onChange={changeHandler}
          className="block border-2 border-black"
        />

        <label htmlFor="Email">Email</label>
        <input type="email" name="email" id="Email" placeholder='xyz@email.com' value={formData.email} onChange={changeHandler}
          className="block border-2 border-black"
        />

        <label htmlFor='country'> Country</label>
        <br></br>
        <select id="country" name="country" value={formData.country} className="block border-2 border-black">
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
        </select>

        <label htmlFor="streetAdress">Street Address</label>
        <input type="text" name="streetAdress" id="streetAdress" placeholder='Enter your streetAdress' value={formData.streetAdress} onChange={changeHandler}
          className="block border-2 border-black"
        />

        <label htmlFor="city">city</label>
        <input type="text" name="city" id="city" placeholder='Enter your city' value={formData.city} onChange={changeHandler}
          className="block border-2 border-black"
        />

        <label htmlFor="state">state</label>
        <input type="text" name="state" id="state" placeholder='Enter your state' value={formData.state} onChange={changeHandler}
          className="block border-2 border-black"
        />

        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" name="postalCode" id="postalCode" placeholder='Enter your postalCode' value={formData.postalCode} onChange={changeHandler}
          className="block border-2 border-black"
        />

        <fieldset>
          <legend> By Email</legend>

          <div className='flex '>
            <input id="comments" name="comments" type="checkbox" checked= {formData.comments} onChange={changeHandler}/>
            <div> 
              <label htmlFor='comments'> Comments</label>
              <p> Get notified when someone posts a comment</p>
            </div>
          </div>

          <div className='flex '>
            <input id="candidates" name="candidates" type="checkbox" checked= {formData.candidates} onChange={changeHandler}/>
            <div> 
              <label htmlFor='candidates'> candidates</label>
              <p> Get notified when someone posts a comment</p>
            </div>
          </div>

          <div className='flex '>
            <input id="offers" name="offers" type="checkbox" checked= {formData.offers} onChange={changeHandler}/>
            <div> 
              <label htmlFor='offers'> Offers</label>
              <p> Get notified when someone posts a comment</p>
            </div>
          </div>
          
        </fieldset>

        <br></br>
        <fieldset>
        
          <legend>Push Notification</legend>
          <p> These are Delivered via SMS to your Mobile phone.</p>
          
          
          <input type="radio" id="pushEverything" name="pushNotification" value="Everything" onChange={changeHandler}/>
          <label htmlFor="pushEverything">Everything</label>
          <br></br>

          <input type="radio" id="pushEmail" name="pushNotification" value="same as email" onChange={changeHandler}/>
          <label htmlFor="pushemail">Same as Email</label>
          <br></br>

          <input type="radio" id="pushNothing" name="pushNotification" value="No Push Notification" onChange={changeHandler}/>
          <label htmlFor="pushNothing">No Push Notification</label>

        </fieldset>

        <button className='bg-blue-500 text-white font-bold rounded py-2 px-4 hover:bg-blue-700'>Save</button>
      </form>
    </div>
  );
}

export default App;
