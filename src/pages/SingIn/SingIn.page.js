import React, { useState } from "react";
import styles from "../style/SingAll.module.css"

import iconLock from "../../img/icon-lock.png"
import { Link, } from "react-router-dom";


const SingInPage = () => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(' Password *')

    const [checkbox, setCheckbox] = useState(false)

    const handlerSingIn = () => {
        if (emailError === false && passwordError === false){
           window.alert("Sing in") 
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





    const handlerCheckbox = (event) => {
setCheckbox(event.target.checked)
console.log(event);
    }


    return (
        <form className={styles["container"]}>
            <div className={styles["header-sing-in"]}>

                <img className={styles["header-sing-in-icon"]} src={iconLock} alt="icon-lock" />

                <div className={styles["header-sing-in-text"]}>
                    Sing In
                </div>
            </div>

            <div className={styles["container-inputs"]}>

                <input type="email" name="email" onChange={handlerChange} className={emailError === true ? styles["email-input"] : styles["email-error-input"]} placeholder=" Email Address *" value={email} />

                <input type="password" name="password" onChange={handlerChange} className={passwordError === true ? styles["password-input"] : styles["password-error-input"]} placeholder=" Password *" value={password} />

                <div onChange={handlerCheckbox} className={styles["container-checkbox-input"]} type="checkbox" checked={checkbox}>

                    <label htmlFor="id1">
                        <input className={styles["checkbox-input"]} id="id1" type="checkbox"></input>
                        <span className={checkbox === true ? styles["checked"] : styles["fake"]}></span>
                        <span className={styles["checkbox-text"]}>Remember me</span>
                    </label>
                </div>


            </div>

            <button type="submit" className={styles["button-sing-up"]} onClick={handlerSingIn}>Sing in</button>


            <div className={styles["container-text-under-button"]}>
                <h5>Forgot password?</h5>
                <Link to="/SingUp"><h5>Don't have an account? Sing Up</h5></Link>
            </div>
            <div className={styles["footer-text"]}>
                <h5>Copyright © Your Webside 2020</h5>
            </div>

        </form>
    );
};

export default SingInPage;
