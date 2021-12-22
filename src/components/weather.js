import React from "react";

const Weather = props => (
    <div>
        {props.Город &&
               <div>
                   <p>Местоположение: {props.Город}, {props.Страна}</p>
                   <p>Температура, °C: {props.Температура}</p>
                   <p>Чувствуется как: {props.Ощущается_как}</p>
                   <p>Давление, мм: {props.Давление}</p>
                   <p>Влажность, %: {props.Влажность}</p> 
               </div> 
            }
            <p>{props.Ошибка}</p>
    </div>
)

export default Weather;