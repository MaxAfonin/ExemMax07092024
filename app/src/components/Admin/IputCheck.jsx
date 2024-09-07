import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import { useEffect, useState } from "react";


export default function InputCheck(){
let [startForm, setStartForm] = useState(true);

const Form = () => {return "Form"}


    return (
        <div className="">
            <br/>
                {startForm ? <Form/> : <div>leading...</div>}
        </div>
    )};