import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import { useEffect, useState } from "react";
import INPUTnumber from "../microElements/InputNumber";


export default function InputCheck(){
let [startForm, setStartForm] = useState(true);
let [month, setMonth] = useState(0);
let [dey, setDey] = useState(0);
let [hour, setHour] = useState(0);
let [min, setMin] = useState(0);

let [dateRecord, setDateRecord] = useState(localStorage.getItem("DateRecord")); //[month, dey, hour, min]



useEffect(()=>{

if (month > 12)  {setMonth(0) } else localStorage.setItem("DateRecord",  [month, dey, hour, min]);
if (dey > 31)  {setDey(0) } else localStorage.setItem("DateRecord",  [month, dey, hour, min]);
if (hour > 23)  {setHour(0) } else localStorage.setItem("DateRecord",  [month, dey, hour, min]);
if (min > 59)  {setMin(0) } else localStorage.setItem("DateRecord",  [month, dey, hour, min]);
setDateRecord([month, dey, hour, min]);
}, [month, dey, hour, min])





    return (
        <div className="">
            <br/>
        <INPUTnumber lable={"Напишите номер месяца"}  state = {month} setState={setMonth}/> 
        <INPUTnumber lable={"Напишите число"}  state = {dey} setState={setDey}/>
        <INPUTnumber lable={"Напишите час"}  state = {hour} setState={setHour}/>
        <INPUTnumber lable={"Напишите минуту"}  state = {min} setState={setMin}/>

        <div>Вы выбрали время для встречи: {dateRecord[2]}:{dateRecord[3]}  и дату     {dateRecord[1]}.{dateRecord[0]}.2024  </div>



        </div>


    )};