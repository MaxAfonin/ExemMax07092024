import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import INPUTnumber from "../microElements/InputNumber"
import { useEffect, useState } from "react";



export default function Page(){ // Главная
    const  {PageArr, typeCalc} =  useAppContext(); // Массив








    return (
        <div className={styles.inputForm}>
            <h1>{PageArr[typeCalc].name}</h1>
                <div className={styles.hello}>
                Приходи и отдохни от суеты! <p/>
                Конный клуб – не только самый крупный, но и один из самых популярных в Московской области.<p/>
                
                Сегодня в хозяйстве 40 лошадей русской рысистой, тяжеловозной и вятской пород. Так же имеются козы, овцы, кролики, индюки, курицы, собаки.<p/>

                Для особо искушенных туристов есть русская баня, родниковая купель и веревочный троллей.<p/>

                Верховая езда – это настоящая панацея для современного общества, в жизни которого преобладает сидячий образ жизни, повышенные умственные нагрузки, работа с гаджетами. А еще – это профилактика и лечение многих болезней, снятие стресса, чувства тревоги, психологическая разгрузка.<p/>
                                </div>
        </div>
    )};