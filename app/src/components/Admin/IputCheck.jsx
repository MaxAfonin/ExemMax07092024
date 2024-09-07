import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import { useEffect, useState } from "react";


export default function InputCheck(){
    const  {calcArr} =  useAppContext(); // Массив калькуляторов
    const {calcActiv, toggleCalcActiv} = useAppContext();//Активные калькуляторы
    let [startForm, setStartForm] = useState(false);


useEffect(()=>{ toggleCalcActiv([true,true,true,true,true])},[]);

useEffect(()=>{
    localStorage.setItem("calcActiv", calcActiv );
    setStartForm(true);
}, [calcActiv]);


const Form = () => {return(
    <form className={styles.Form} action="" >
    <div>
        <input
        onChange={()=>{ toggleCalcActiv(calcActiv.map((elem, index) =>{ return index ===0 ?  elem = !elem : elem  }))}}
        type="checkbox"
        id="0"
        name="calc0"
        checked={calcActiv[0]}
        defaultChecked={calcActiv[0]}
        />
        <label for="subscribeNews">{calcArr[0].name}</label>
    </div>

    <div>
        <input
        onChange={()=>{ toggleCalcActiv(calcActiv.map((elem, index) =>{ return index ===1 ?  elem = !elem : elem  }))}}
        type="checkbox"
        id="1"
        name="calc1"
        checked={calcActiv[1]}
        />
        <label for="subscribeNews">{calcArr[1].name}</label>
    </div>

    <div>
        <input
        onChange={()=>{ toggleCalcActiv(calcActiv.map((elem, index) =>{ return index ===2 ?  elem = !elem : elem  }))}}
        type="checkbox"
        id="2"
        name="calc2"
        checked={calcActiv[2]}
        />
        <label for="subscribeNews">{calcArr[2].name}</label>
    </div>

    <div>
        <input
        onChange={()=>{ toggleCalcActiv(calcActiv.map((elem, index) =>{ return index ===3 ?  elem = !elem : elem  }))}}
        type="checkbox"
        id="3"
        name="calc3"
        checked={calcActiv[3]}
        />
        <label for="subscribeNews">{calcArr[3].name}</label>
    </div>

    <div>
        <input
        onChange={()=>{ toggleCalcActiv(calcActiv.map((elem, index) =>{ return index ===4 ?  elem = !elem : elem  }))}}
        type="checkbox"
        id="4"
        name="calc4"
        checked={calcActiv[4]}

        />
        <label for="subscribeNews">{calcArr[4].name}</label>
    </div>
</form>
)}


    return (
        <div className="">
            <br/>
                {startForm ? <Form/> : <div>leading...</div>}
        </div>
    )};