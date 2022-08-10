import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import "./CreditCards.css"
 
export default function PaymentForm (props) {
    const [cvc, setcvc] = useState('')
    const [expiry, setexpiry] = useState('')
    const [focus, setfocus] = useState('')
    const [name, setname] = useState('DIGITAL BOOKING')
    const [number, setnumber] = useState('')

    const [className, setclassName] = useState("")

  const handleInputFocus = (e) => {
    console.log(e.target.name)
    if (e.target.name === "cvc"){
        setclassName("paymentBack")
    }
  }
  
  const setValueChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    console.log("hola")
    if (name === "name"){
        setname(value)
    } else if (name === "number"){
        setnumber(value)
    }else if (name === "expiry"){
        setexpiry(value)
    }else if (name === "cvc"){
        setcvc(cvc)
    }
    
  }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   }
  
    return (
      <div id="PaymentForm" className={className}>
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
          placeholders={ {name: 'DIGITAL BOOKING'}}

        />
        <form >
            <div className="form-group">
              <input
                type="text"
                name="number"
                className="form-control"
                placeholder="Numero de tarjeta"
                maxLength={16}
                required
                onChange={setValueChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                maxLength={18}
                className="form-control"
                placeholder="Nombre y Apellido"
                required
                onChange={setValueChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="MMAA"
                  pattern="[\d| ]{16,22}"
                  maxLength={4}
                  required
                onChange={setValueChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="Codigo de Seguridad"
                  pattern="\d{3,4}"
                  maxLength={4}
                  required
                onChange={setValueChange}
                  onFocus={handleInputFocus}
                  onBlur={() => setclassName("")}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={"issuer"} />
            <div className="form-actions">
              <button 
              className="btn btn-primary btn-block">Confirmar Pago</button>
            </div>
          </form>
      </div>
    );
  }