import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import INPUTnumber from "../microElements/InputNumber"
import { useEffect, useState } from "react";



export default function Page(){ // запись

    const  {PageArr, typeCalc} =  useAppContext(); // Массив








    return (
        <div className={styles.inputForm}>
            <h1>{PageArr[typeCalc].name}</h1>
            Телефон: <a href="tel: +79225250707">+7 922 525 07 07</a><br/>
            Email: <a href="mailto: email@mail.com">email@mail.com</a> <br/>
            Московская область село Зеленое ул. Первомайская, 77
            <br/>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7ebb8c9fdabffc0d224ed3995e7c81735327f4e5f06d418a61742d0f0e24476f&amp;source=constructor" width="100%" height="563" frameborder="0"></iframe>     

            <form name="send" method="post" action="">
                Ваше имя<br/>
                <input type="text" size="40"></input>
                <p/>
                Комментарий<br/>
                <textarea name="comment" cols="40" rows="3"></textarea><br/>
                <input type="submit" value="Отправить"/>
                <input type="reset" value="Очистить"/><br/>
                 </form>

        </div>
    )};