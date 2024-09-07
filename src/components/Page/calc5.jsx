import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import INPUTnumber from "../microElements/InputNumber"
import { useEffect, useState } from "react";



export default function Page(){ // Контакты
    const  {PageArr, typeCalc} =  useAppContext(); // Массив

    return (
        <div className={styles.inputForm}>
            {/* <h1>{PageArr[typeCalc].name}dvdesdfs</h1>
            <div>dfgdsfds</div> */}
            Телефон: <a href="tel: +79225250707">+7 922 525 07 07</a>
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7ebb8c9fdabffc0d224ed3995e7c81735327f4e5f06d418a61742d0f0e24476f&amp;width=100%25&amp;height=563&amp;lang=ru_RU&amp;scroll=true">
            </script>            
        </div>
    )};