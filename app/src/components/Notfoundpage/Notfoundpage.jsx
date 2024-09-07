import {AppContextProvider} from "../../context/ContextProvider";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";



export default function Notfoundpage(){

    return (
        <div className={styles.calc}>
            <AppContextProvider>
            <div className={styles.container}>
                Извините, но здесь ничего нет (404)
                <Link to="/" >Home</Link>
            </div>
            </AppContextProvider>
        </div>
    )};