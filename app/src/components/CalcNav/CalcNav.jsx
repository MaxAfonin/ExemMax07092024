import { useEffect} from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";


export default function CalcNav(){
const  {PageArr, PageTrue} =  useAppContext(); // Массив страниц
let {typeCalc, toggleTypeCalc} = useAppContext(); // Выбранный тип страницы



let Items =  () =>  { return( PageArr.map( (elem, index) => 
(<div className={typeCalc !== PageArr[index].id ? styles.item : styles.itemSelect} onClick={()=>{ toggleTypeCalc(index) }}> 
<p>{PageArr[index].name}</p>
</div>)
)
)};



return (
            <div className={styles.header}>
                <Items/>
            </div>

)};