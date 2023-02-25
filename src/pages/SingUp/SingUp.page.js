import React from "react";
import styles from "../style/SingAll.module.css"
import style from "./SingUp.module.css"
import iconLock from "../../img/icon-lock.png"
import { Link, } from "react-router-dom";
import { useState } from "react";



const SingUpPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(' Password *')

    const [checkbox, setCheckbox] = useState(false)

    const handlerSingUp = () => {
        if (emailError === false && passwordError === false){
           window.alert("Sing Up") 
        }
        
    };
    


    const handlerChange = (event) => {
        const name = event.target.name
        console.log(name);
        if (name === "email") {
             setEmail(event.target.value)
             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(event.target.value) ) {
               
                setEmailError(false)
             } else {
                setEmailError(true)
             }

        }else if(name === "password"){
            setPassword(event.target.value)
            if (!/^[а-яА-Яa-zA-Z0-9!@#$%^&*]{6,16}$/i.test(event.target.value)) {
                setPasswordError(false)
               
             } else {
                setPasswordError(true)
             }
        };

        console.log(event);
       
        
        const inputForm = event.target.value;
        console.log(inputForm);

    }

    const nameChange = (event) =>{
        const name = event.target.name
        console.log(name);
        if (name === "firstName") {
            setFirstName(event.target.value)
             if (!/^[а-яА-Яa-zA-Z0-9]{2,20}$/i.test(event.target.value)) {
               
                setFirstNameError(false)
             } else {
                setFirstNameError(true)
             }

        }else if(name === "lastName"){
            setLastName(event.target.value)
            if (!/^[а-яА-Яa-zA-Z0-9]{2,20}$/i.test(event.target.value)) {
                setLastNameError(false)
               
             } else {
                setLastNameError(true)
             }
        };

        console.log(event);
       
        
        const inputForm = event.target.value;
        console.log(inputForm);
    }





    const handlerCheckbox = (event) => {
setCheckbox(event.target.checked)
console.log(event);
    }
    return (
        <div className={style["container"]}>
            <div className={styles["header-sing-in"]}>

                <img className={styles["header-sing-in-icon"]} src={iconLock} alt="icon-lock" />

                <div className={styles["header-sing-in-text"]}>
                    Sing up
                </div>
            </div>

            <div className={style["container-inputs"]}>
                <div className={style["container-name-inputs"]}>
                <input name="firstName" className={firstNameError === true ? style["firstname-input"] : style["firstname-error-input"]} onChange={nameChange} value={firstName} placeholder=" First name *" />
                <input name="lastName" className={lastNameError === true ? style["lastname-input"] : style["lastname-error-input"]} onChange={nameChange} value={lastName} placeholder=" Last name *"></input>  
                </div>

                <input type="email" name="email" onChange={handlerChange} className={emailError === true ? styles["email-input"] : styles["email-error-input"]} placeholder=" Email Address *" value={email} />

<input type="password" name="password" onChange={handlerChange} className={passwordError === true ? styles["password-input"] : styles["password-error-input"]} placeholder=" Password *" value={password} />
                <div className={style["container-checkbox-input"]} type="checkbox">

                    <label htmlFor="id1">
                        <input onChange={handlerCheckbox} className={styles["checkbox-input"]} id="id1" type="checkbox" checked={checkbox}></input>
                        <span className={checkbox === true ? styles["checked"] : styles["fake"]}></span>
                        <div className={style["container-span"]}>
                            <span className={style["checkbox-text"]}>I want to receive inspiration, marceting </span>
                            <span className={style["checkbox-text"]}>promotions and updates via email</span>
                        </div>

                    </label>
                </div>


            </div>

            <button onClick={handlerSingUp} className={style["button-sing-up"]}>Sing up</button>


            <div className={style["container-text-under-button"]}>

                <Link to="/SingIn"><h5>Alredy have an account? Sing in</h5></Link>
            </div>
            <div className={style["footer-text"]}>
                <h5>Copyright © Your Webside 2020</h5>
            </div>

        </div>
    );
};

export default SingUpPage;