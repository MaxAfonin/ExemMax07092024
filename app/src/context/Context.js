import { useState, useCallback, useEffect} from 'react';



export const useCreateAppContext = function(props) {



// Входные данные: ============================================================================================================

const PageArr =   
[   {   id:0, 
        name: "Главная",
    }, 
    {   id:1, 
        name: "Услуги",
    }, 
    {   id:2, 
        name: "О клубе",
    },
    {   id:3, 
        name: "Онлайн запись",
    },
    {   id:4, 
        name: "Контактная информация",
    }
];

let PageTrue = [true, true, true, true, true]




// Контекст для приложения ====================================================================================================



    const [typeCalc, setTypeCalc] = useState(props.typeCalc || 0); // Тип калькулятора 0-4
    const toggleTypeCalc = useCallback((num) => {setTypeCalc(num)},[]);

    const [initialMoney, setInitialMoney] = useState(props.initialMoney || 2000000); // Сумма денег запрашиваемая для кредита
    const toggleInitialMoney = useCallback((num) => {setInitialMoney(num)},[]);

    const [monthlyPayment, setMonthlyPayment] =useState(props.monthlyPayment || 1000); // Сумма ежемесячных инвестиций
    const toggleMonthlyPayment = useCallback((num) => {setMonthlyPayment(num)}, [])   

    const [startMoney, setStartMoney] = useState(props.startMoney || 500000) // Старторвый капиталл или первоначальный взнос
    const toggleStartMoney = useCallback((num) => {setStartMoney(num)}, [])

    const [time, setTime] = useState(props.time || 20); // Срок инвестирования либо кредита лет
    const toggleTime = useCallback((num) => {setTime(num)},[]);

    const [percent, setPercent] = useState(props.percent || 9); // Процентная ставка
    const togglePercent = useCallback((num) => setPercent(num), []);

    const [insurance, setInsurance] = useState(props.insurance || 0); // страхование
    const toggleInsurance = useCallback((num) => setInsurance(num), []);
    
    return {
        PageArr, PageTrue,  // Массив страниц
        typeCalc, toggleTypeCalc // Тип страницы 0-4
}
}