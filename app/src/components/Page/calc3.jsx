import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";




export default function Page(){ // Онлайн запись
    const  {PageArr, typeCalc, service} =  useAppContext(); // Массив

    const emailManager = "mail@email.com";
    
    let [PaymentHide, setPaymentHide] = useState(1);
    
    let [BaseCost, setBaseCost] = useState(0);
    let [infoBlock, setInfoBlock] = useState();
    let [customerName, setCustomerName] = useState();
    let [customerMail, setCustomerMail] = useState();
    let [customerPhone, setCustomerPhone] = useState();
    let [targetName, setTargetName] = useState(customerName);
    let [targetMail, setTargetMail] = useState(customerMail);
    let [targetPhone, setTargetPhone] = useState(customerPhone);
    
    let [PaymentBtn, setPaymentBtn] = useState("");
    useEffect(()=>{
        if (PaymentHide === 1)  setPaymentBtn(PaymentOffer);
        if (PaymentHide === 2)   Resend(handleClick);
        if (PaymentHide === 3)  setPaymentBtn(PaymentThanks);
        if (PaymentHide === 4)  setPaymentBtn(PaymentErr);
    },[PaymentHide, customerMail])
    
    let Resend = (func) =>{
        setPaymentBtn(PaymentLoader);
        let coin=0;   
        let Dalay = setInterval(()=>{
            coin++; 
            if (coin===2) {func(); clearInterval(Dalay);  }    
        },100) };
    
    

    
    useEffect(()=>{
        setCustomerName(customerName);
        setCustomerMail(customerMail);
        setCustomerPhone(customerPhone);
        if (customerName && customerMail && customerPhone) {setPaymentHide(2)} else setPaymentHide(1);
    console.log(customerName,customerMail, customerPhone);
    },[ customerName,customerMail, customerPhone ]);
    
    
    // const schema = yup // Валидация
    //     .object({
    //       name: yup.string().required(),
    //       tel: yup.number().positive().integer().required(),
    //       email: yup.string().email().required()
    //     })
    //     .required()
    
    // const { // К форме
    //         register,
    //         handleSubmit,
    //         watch,
    //         formState: { errors },
    //       } = useForm({
    //         resolver: yupResolver(  ),  //schema),
    //       });
    
    const onSubmit = (data) => {
        setCustomerName(data.name);
        setCustomerMail(data.email);
        setCustomerPhone(data.tel);
        }
    
    let PaymentOffer =   <form      >
                         {/* onSubmit={handleSubmit(onSubmit)}>         */}
                        {/* "handleSubmit" проверит ваши входные данные перед вызовом команды" */}
                        <div className={styles.userForm}>
                            <input type="text"   placeholder="Ваше имя"  /><p/>
                            <input type="tel" pattern="[+]{1}[7]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"   placeholder="Телефон +79005004030" /><p/>
                            <input type='email' pattern="[A-Za-z]{*}[@][A-Za-z]{*}[.][A-Za-z]{*}"  placeholder="Электронная почта" /><p/>
                            <div className={styles.PaymentBtn}><button  className={styles.button}  type="submit"><span >Получить консультацию</span></button></div>
                        </div>
                        </form>;
    
      let  PaymentLoader =   <div className={styles.userForm}>
                                <div style={{"margin": "0 auto", "width": "50px"}}><img src="/CalculatorJs/img/loader.gif" alt="Ждем ответа сервера" style={{"margin": "0 auto", "width": "50px"}}  /></div>
                            </div>;
    
    let PaymentThanks = <div className={styles.userForm}>
    <form action="" method="post">
        <p>
           <div> Спасибо! Ваша заявка отправлена! Вам на почту придет сообщение.  </div>
           <div> Не забудьте проверить папку "Спам"   </div>
        </p>
    </form>
    </div>;
    
    let PaymentErr = <div className={styles.userForm}>
    <form action="" method="post">
        <p>
        
           <div> Внимание! Ваша заявка НЕ отправлена! Возникла ошибка!  </div>
           <div> Пожалуйста, попробуйте позже или напишите на {emailManager} !</div>
        </p>
    </form>
    </div>;
    
    async function handleClick (e) {
    
        console.log(infoBlock);
        const response = await fetch('/CalculatorJs/ServerPHP/send_mail.js', {
            method: 'POST',
            body:infoBlock
        });
        if(response.ok){
            // const json = await response.json();
            console.log("Письмо ушло");
            setPaymentHide(3);
    
        }
        else{
            console.log('Ошибка отправки');
            setPaymentHide(4);
        }
    };
    
    
    
    
    
    return (
        <div className={styles.inputForm}> 
            
            <h1>{PageArr[typeCalc].name}</h1>
                {PaymentBtn}
    </div>
    )};