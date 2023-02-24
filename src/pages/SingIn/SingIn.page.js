import React, { useState } from "react";
import styles from "../style/SingAll.module.css"

import iconLock from "../../img/icon-lock.png"
import { Link, useNavigate } from "react-router-dom";


const SingInPage = () => {
    const navigateTo = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailDirty, setEmailDirty] = useState('')
    const [passwordDirty, setPasswordDirty] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handlerSingIn = () => {
        window.alert("Sing in")
    };

    const handlerChange = (event) => {
        setEmail(event.target.value)
        const inputChange = event.target.value;
        if (inputChange.length >= 3){
            
        }
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["header-sing-in"]}>

                <img className={styles["header-sing-in-icon"]} src={iconLock} alt="icon-lock" />

                <div className={styles["header-sing-in-text"]}>
                    Sing In
                </div>
            </div>

            <div className={styles["container-inputs"]}>

                <input type="email" onChange={handlerChange} className={styles["email-input"]} placeholder=" Email Address *" value={email} />
                <input className={styles["password-input"]} placeholder=" Password *"></input>
                <div className={styles["container-checkbox-input"]} type="checkbox">

                    <label htmlFor="id1">
                        <input className={styles["checkbox-input"]} id="id1" type="checkbox"></input>
                        <span className={styles["fake"]}></span>
                        <span className={styles["checkbox-text"]}>Remember me</span>
                    </label>
                </div>


            </div>

            <button className={styles["button-sing-up"]} onClick={handlerSingIn}>Sing in</button>


            <div className={styles["container-text-under-button"]}>
                <h5>Forgot password?</h5>
                <Link to="/SingUp"><h5>Don't have an account? Sing Up</h5></Link>
            </div>
            <div className={styles["footer-text"]}>
                <h5>Copyright © Your Webside 2020</h5>
            </div>

        </div>
    );
};

export default SingInPage;
