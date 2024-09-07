import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import INPUTnumber from "../microElements/InputNumber";
import { useEffect, useState } from "react";


export default function Page(){ // услцуги
    const  {PageArr, typeCalc, service} =  useAppContext(); // Массив








    return (
        <div className={styles.inputForm}> 
            
            <h1>{PageArr[typeCalc].name}</h1>
            <h2> Наши услуги </h2>
            {service.map(elem => <div> <h3> {elem.name}  </h3>  <p>{elem.cost} руб</p> </div> )}
            </div>
    )};