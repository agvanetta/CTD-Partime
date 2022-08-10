import React, { useState } from 'react'
import "./Account.css";
import ProfileImg from './img/profile.png'
import BannerImg from './img/bannerprueba.jpg'

const findByIdUrl="http://localhost:8080/users/";
const postUrl="http://localhost:8080/users/";
const deleteUrl="http://localhost:8080/users/";
const createUrl="http://localhost:8080/users/update";

function Account(props) {
  const [clicked, setClicked] = useState("none");

  function doClick() {
    setClicked("unset");
    console.log(clicked)
    console.log("ejecutado")
  }

  function didClick() {
    setClicked("none");
    console.log(clicked)
    console.log("ejecutado")
  }
  // console.log(clicked)
  return (
    <div className='account'>
        <div className='account__banner'>
          <div className='account__dates'>
            <img className='account__dates__img' src={ProfileImg} alt="perfil" /> 
            <div>
              <h2>Hi Agustin <span>!</span></h2>
              <div>Your money is <span>$114,656.84</span></div>
            </div>
          </div>
          <img className='account__banner__img' src={BannerImg} alt="banner" /> 
        </div>

        <div className='account__container'>
          <div className='account__container__title'>
            <div>Dates</div>
          </div>

          <div className='account__container__dates'>
            
            <div>
              <span>Email</span>
              <span>agvanetta@test.com</span>
            </div>

            <div>
              <span>Bank account</span>
              <span>165432135</span>
            </div>

          </div>

          <div className='account__container__edit'>
            <div>Edit account dates</div>
            <button onClick={clicked === "none" ? doClick : didClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
              <path  d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
              </svg>
            </button>
          </div>

          <div className='account__edit' style={{display:clicked}}>
            <form >
              <p>Name: <input type="text" name="name" placeholder="Enter name"/></p>
              <p>Lastname: <input type="text" name="lastname" placeholder="Enter lastname"/></p>
              <p>Email: <input type="text" name="email" placeholder="Enter email"/></p>
              <p>Bank Account: <input type="number" name="fechaDeNacimiento" placeholder="Enter bank account number"/></p>
              <p>Money: <input type="number" name="money" placeholder="$......"/></p>
              <p>Country: <input type="text" name="country" placeholder="Enter country"/></p>
              <div className='account__edit_button'><input className="button__enviar" type="submit" value="Send"/></div>
            </form>
          </div>
          
        </div>
        
        {/* <div className='account__dates'>
          <div className='account__dates__name'><span className='date' >Name : </span><span> Agustin</span></div>
          <div className='account__dates__lastname'><span className='date'>Lastname : </span><span>Vanetta</span></div>
          <div className='account__dates__email'><span className='date'>Email : </span><span>agvanetta@test.com</span></div>
          <div className='account__dates__bankaccount'><span className='date'>Bank Account : </span><span>867451238</span></div>
           <div className='account__dates__money'><span className='date'>Money : </span><span>$10000</span></div>
          <div className='account__dates__country'><span className='date'>Country : </span><span>Argentina</span></div>
        </div> */}
           
        </div>
  )
}

export default Account