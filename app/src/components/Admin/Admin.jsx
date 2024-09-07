import {AppContextProvider} from "../../context/ContextProvider";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import InputCheck  from "./IputCheck";



export default function Admin(){

    return (
        <div className={styles.calc}>

            <div className={styles.container}>

                Какие калькуляторы работают?
                <AppContextProvider>
                <div>
                    {/* <InputCheck/> */}
                    <Link to="/" >Вернуться в Home</Link>
                </div>
                </AppContextProvider>
            </div>
        </div>
    )};