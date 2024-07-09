import "./App.css";
import {useState} from 'react';
import './Registration.css';
function Registration() {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email: "",
        streetAddress:"",
        city: "",
        state: "",
        country: "",
        postalCode:"",
        comments: false,
        candidates: false,
        offers: false,
        push:''
    });

    function changeHandler(event) {
        const {name, value, checked, type} = event.target;
        setFormData((prev)=>{
            return{
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            };
        })
        console.log(formData);
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(formData);
    }
  return (
    <div className="w-[1100px] border-[1px] border-[#3c3e4433] p-3 bg-white hover:shadow-md transition-all duration-200">
        <div className="text-center text-red-900 font-extrabold text-[20px]">Registration Form</div>
      <form className="flex flex-col gap-2 p-4" onSubmit={submitHandler}>
        <div className="field">
            <label className="label">First Name</label>
            <input type="text" placeholder="Enter First Name" name="firstName" value={formData.firstName} onChange={changeHandler} className="input"/>
        </div>

        <div className="field">
            <label className="label">Last Name</label>
            <input type="text" placeholder="Enter Last Name" name="lastName" value={formData.lastName} onChange={changeHandler} className="input"/>
        </div>

        <div className="field">
            <label className="label">Email</label>
            <input type="email" placeholder="Enter Email address" name="email" value={formData.email} onChange={changeHandler} className="input"/>
        </div>

        <div className="field">
            <label className="label">Street Address</label>
            <input type="text" placeholder="Enter Street address" name="streetAddress" value={formData.streetAddress} onChange={changeHandler} className="input"/>
        </div>

        <div className="field">
            <label className="label">City</label>
            <input type="text" placeholder="Pune" name="city" value={formData.city} onChange={changeHandler} className="input"/>
        </div>

        <div className="field">
            <label className="label">State/Province</label>
            <input type="text" placeholder="Maharashtra" name="state" value={formData.state} onChange={changeHandler} className="input"/>
        </div>

        <div className="field">
            <label className="label">Country</label>
            <select className="input w-full" name="country" value={formData.country} onChange={changeHandler}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Russia">Russia</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
            </select>
        </div>

        <div className="field">
            <label className="label">Zip/Postal Code</label>
            <input type="text" placeholder="785421" name="postalCode" value={formData.postalCode} onChange={changeHandler} className="input"/>
        </div>

        <div className="field">
            <fieldset>
                <label className="label">By Email</label>
            
                <div className="checkbox">
                    <input type="checkbox" id="comments" name="comments" value={formData.comments} onChange={changeHandler} checked={formData.comments}/>
                    <div>
                        <label htmlFor="comments">Comments</label>
                        <p className="check-para">Get notified when someone posts a comment on post</p>
                    </div>
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="candidates" name="candidates" value={formData.candidates} onChange={changeHandler} checked={formData.candidates}/>
                    <div >
                        <label htmlFor="candidates">Candidates</label>
                        <p className="check-para">Get notified when someone posts a comment on post</p>
                    </div>
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="offers" name="offers" value={formData.offers} onChange={changeHandler} checked={formData.offers}/>
                    <div>
                        <label htmlFor="offers">Offers</label>
                        <p className="check-para">Get notified when someone posts a comment on post</p>
                    </div>
                </div>
            </fieldset>
        </div>

        <div className="field">
            <label className="label">Push Notidications</label>
            <div className="radio">
                <input type="radio" value="everything" name="push" id="everything" onChange={changeHandler} className="input" checked={formData.push === "everything"}/>
                <label htmlFor="everything" className="radio-label">Everything</label>
            </div>

            <div className="radio">
                <input type="radio" value="same as email" name="push" id="sameEmail" onChange={changeHandler} className="input" checked={formData.push === "same as email"}/>
                <label htmlFor="sameEmail" className="radio-label">Same as email</label>
            </div>

            <div className="radio">
                <input type="radio" value="no push notification" name="push" id="noPush" onChange={changeHandler} className="input" checked={formData.push === "no push notification"}/>
                <label htmlFor="noPush" className="radio-label">No push notification</label>
            </div>
        </div>

        <div>
            <button 
                className="bg-blue-800 text-white w-[120px] h-[35px] border-[gray] border-[1px] rounded-md hover:bg-violet-700 transition-all duration-200"
            >Save</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
