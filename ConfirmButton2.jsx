// React 라이브러리와 useState 훅을 import합니다.
import React,{useState} from "react";

// ConfirmButton2라는 함수형 컴포넌트를 선언합니다.
function ConfirmButton2(props){
    // isConfirmed라는 상태를 선언하고 초기값을 false로 설정합니다.
    const [isConfirmed, setIsConfirmed] = useState(false);

    // handleConfirm 함수를 선언합니다. 이 함수는 isConfirmed 상태를 반전시킵니다.
    const handleConfirm = () =>{
        setIsConfirmed((prevIsConfirmed)=>!prevIsConfirmed);
    };

    // 컴포넌트의 UI를 반환합니다.
    return(
        // 버튼 요소를 반환합니다. onClick 이벤트 핸들러로 handleConfirm를 설정합니다.
        // isConfirmed 상태에 따라 버튼의 disabled 속성과 텍스트를 변경합니다.
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed? "확인됨" : "확인하기"}
        </button>
    );
}

// ConfirmButton2 컴포넌트를 export합니다.
export default ConfirmButton2;
