import React,{useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props){
    if (props.celsius>=100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function toCelsius(props){
    return ((props -32)*5)/9;
}

function toFahrenheit(props){
    return (props*9)/5 +32;
}

function tryConvert(temperature,func){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return "";
    }

    const output = func(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
}

function Calculator(props){
    const [temperature, setTemperature] = useState("");
    const [scale,setScale] = useState("c");

    const handleCelsiusChange = (temperature) =>{
        setTemperature(temperature);
        setScale("c")
    };

    const handleFahrenheitChange = (temperature) =>{
        setTemperature(temperature);
        setScale("f")
    };

    const celsius = scale === "f" ? tryConvert(temperature,toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature,toFahrenheit) : temperature;

    return(
        <div>
            <TemperatureInput
                scale = "c"
                temperature = {celsius}
                onTemperaturechange={handleCelsiusChange}
            />
            <TemperatureInput
                scale = "f"
                temperature = {fahrenheit}
                onTemperaturechange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
        </div>
    );


}

export default Calculator;