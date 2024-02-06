// scaleNames 객체를 선언합니다. 이 객체는 섭씨와 화씨에 대한 한글 표현을 매핑합니다.
const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

// TemperatureInput이라는 함수형 컴포넌트를 선언합니다.
function TemperatureInput(props){
    // handleChange 함수를 선언합니다. 이 함수는 입력 이벤트를 처리하고, onTemperaturechange prop을 호출합니다.
    const handleChange = (event) => {
        props.onTemperaturechange(event.target.value); // event.target 은 이벤트가 발생한 DOM, 즉 여기선 <input> 입력 태그. value 는 입력값
        // onTemperaturechange prop 으로 전달된 함수 handleCelsiusChange,handleFahrenheitChange 중 하나에 입력값을 적용하게 된다
    };

    // 컴포넌트의 UI를 반환합니다.
    return (
        <fieldset>
            <legend>
                {/* 온도 입력 필드의 단위를 표시합니다. 단위는 props.scale에 따라 결정됩니다. */}
                온도 입력  단위 :{scaleNames[props.scale]}
            </legend>
            {/* 입력 필드를 렌더링합니다. value는 props.temperature이고, onChange 이벤트 핸들러로 handleChange를 설정합니다. */}
            <input value={props.temperature} onChange={handleChange}></input>
        </fieldset>
    );
}

// TemperatureInput 컴포넌트를 export합니다.
export default TemperatureInput;
