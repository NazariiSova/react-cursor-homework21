import React from "react";
import styles from "../style/SingAll.module.css"
import style from "./SingUp.module.css"
import iconLock from "../../img/icon-lock.png"
import { Link, } from "react-router-dom";


const SingUpPage = () => {
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
                <input  className={style["firstname-input"]} placeholder=" First name *" />
                <input className={style["lastname-input"]} placeholder=" Last name *"></input>  
                </div>

                <input type="email" className={styles["email-input"]} placeholder=" Email Address *" />
                <input className={styles["password-input"]} placeholder=" Password *"></input>
                <div className={style["container-checkbox-input"]} type="checkbox">

                    <label htmlFor="id1">
                        <input className={styles["checkbox-input"]} id="id1" type="checkbox"></input>
                        <span className={styles["fake"]}></span>
                        <div className={style["container-span"]}>
                            <span className={style["checkbox-text"]}>I want to receive inspiration, marceting </span>
                            <span className={style["checkbox-text"]}>promotions and updates via email</span>
                        </div>

                    </label>
                </div>


            </div>

            <button className={style["button-sing-up"]}>Sing up</button>


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