import "./App.css";
import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments:'',
    isVisible:false,
    gender:'',
    city:''
  });

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    console.log(formData);
    setFormData(prev => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-[500px]" onSubmit={submitHandler}>
        <h2 className="text-center text-2xl font-bold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            name="firstName"
            placeholder="First name"
            onChange={changeHandler}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            name="lastName"
            placeholder="Last name"
            onChange={changeHandler}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            name="email"
            placeholder="Enter email"
            onChange={changeHandler}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex gap-8">
          <label htmlFor="isVisible">Am I Visible</label>
          <input type="checkbox" onChange={changeHandler} name="isVisible" id="isVisible" checked={formData.isVisible}/>
        </div>
        <div className="flex gap-[50px]">
          <label>Gender: </label>
          <div className="flex gap-2">
            <input type="radio" name="gender" id="male" value="male" onChange={changeHandler} checked={formData.gender === "male"}/>
            <label htmlFor="male">Male</label> 
            <input type="radio" name="gender" id="female" value="female" onChange={changeHandler} checked={formData.gender === "female"}/>
            <label htmlFor="female">Female</label> 
          </div>
        </div>
        <div className="flex gap-[40px]">
          <label>City: </label>
          <fieldset>
            <select name="city" id="city" onChange={changeHandler} value={formData.city}>
              <option>none</option>
              <option value="Pune">Pune</option>
              <option value="Banglore">Banglore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
            </select>
          </fieldset>
        </div>
        <div className="mb-4">
          <label>Comments</label>
          <textarea
            placeholder="enter your comments"
            name="comments"
            onChange={changeHandler}
            value={formData.comments}
            className="w-full px-3 py-2 border border-gray-300 rounded h-[100px]"
            ></textarea>
        </div>
        <div>
          <button className="bg-black text-white w-[200px] h-[50px] font-bold hover:bg-red-800 border-[2px] rounded-md transition-all duration-200">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
