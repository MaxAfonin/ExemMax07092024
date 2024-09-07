import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import INPUTnumber from "../microElements/InputNumber"




export default function Page(){ //
    const  {PageArr, typeCalc} =  useAppContext(); // Массив








    return (
        <div className={styles.inputForm}>
            <h1>{PageArr[typeCalc].name}</h1>
            
        </div>
    )};