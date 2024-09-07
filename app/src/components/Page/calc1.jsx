import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import INPUTnumber from "../microElements/InputNumber";
import { useEffect, useState } from "react";


export default function Page(){ // услцуги
    const  {PageArr, typeCalc} =  useAppContext(); // Массив








    return (
        <div className={styles.inputForm}>
            <h1>{PageArr[typeCalc].name}</h1>
            Наши услуги:Конные прогулки по живописному лесу, 1200 руб.
            Обучение верховой езде для взрослых и детей от 2-х лет, 1500 руб.
            Фотосессии с лошадьми, 1000 руб.
            Экскурсии на конюшню, 800 руб.
            Подарочные сертификаты, 1000 руб, 2000 руб.
        </div>
    )};