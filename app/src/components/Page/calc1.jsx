import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import INPUTnumber from "../microElements/InputNumber";
import { useEffect, useState } from "react";


export default function Page(){ // услцуги
    const  {PageArr, typeCalc} =  useAppContext(); // Массив








    return (
        <div className={styles.inputForm}>
            <h1>{PageArr[typeCalc].name}</h1>
        </div>
    )};