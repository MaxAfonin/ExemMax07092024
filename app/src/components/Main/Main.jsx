import {AppContextProvider} from "../../context/ContextProvider";
import { Routes, Route, Link} from 'react-router-dom';
import styles from "./styles.module.css";
import CalcNav from "../CalcNav/CalcNav";
import RenderPage from "../RenderPage/RenderPage";




export default function Main(){

return (
    <div className={styles.calc}>

        <AppContextProvider>
        <div className={styles.container}>
                    <div className={styles.accaunt }><Link  to="/admin" >Личный кабинет </Link> </div>            
                <div className={styles.div}>
                    
                    <CalcNav/>
                   <RenderPage/>
                </div>
        </div>
        </AppContextProvider>
    </div>
)};