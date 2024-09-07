import { useState, useCallback, useEffect} from 'react';
import news from "./news.json";
import service from "./service.json";


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

    
    return {
        PageArr, PageTrue,  // Массив страниц
        news, service,  // Контент 
        typeCalc, toggleTypeCalc // Тип страницы 0-4
}
}