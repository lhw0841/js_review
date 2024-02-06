// React 라이브러리와 그 안의 useState, useEffect 훅을 import 합니다.
import React,{useState,useEffect} from "react";
// useCounter라는 커스텀 훅을 import 합니다.
import useCounter from "./useCounter";

// 수용 가능한 최대 인원을 상수로 정의합니다.
const MAX_CAPACITY = 10;

// Accomodate라는 함수형 컴포넌트를 정의합니다. props를 인자로 받습니다.
function Accomodate(props){
    // useState 훅을 사용하여 isFull 상태와 그를 변경하는 setIsFull 함수를 정의합니다. 초기값은 false입니다.
    const[isFull,setIsFull] = useState(false);
    // useCounter 훅을 사용하여 count 상태와 그를 변경하는 increaseCount, decreaseCount 함수를 정의합니다. 초기값은 0입니다.
    const[count,increaseCount,decreaseCount] = useCounter(0);

    // useEffect 훅을 사용하여 컴포넌트가 업데이트될 때마다 콘솔에 로그를 출력하는 부수효과를 정의합니다.
    useEffect(()=>{
        console.log("=========================");
        console.log("useEffect() 배열X is called.");
        console.log(`isFull : ${isFull}`);
    });

    // useEffect 훅을 사용하여 count 상태가 변경될 때마다 isFull 상태를 업데이트하는 부수효과를 정의합니다.
    useEffect(()=>{
        setIsFull(count>=MAX_CAPACITY);
        console.log(`배열O 호출, Current count value: ${count}`);
    },[count]); // 의존성 배열에 count를 포함시킵니다.

    // JSX를 반환합니다.
    return(
        <div style={{padding:16}}>
            <p>{`총 ${count} 명 수용했습니다.`}</p>

            {/* 입장 버튼입니다. 클릭하면 increaseCount 함수가 호출되며, isFull 상태가 true일 때는 비활성화됩니다. */}
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            {/* 퇴장 버튼입니다. 클릭하면 decreaseCount 함수가 호출됩니다. */}
            <button onClick={decreaseCount}>퇴장</button>

            {/* isFull 상태가 true일 때, "정원이 가득 찼습니다."라는 메시지를 빨간색으로 표시합니다. */}
            {isFull && <p style={{color:"red"}}>정원이 가득 찼습니다.</p>}
        </div>
    );
}

// Accomodate 컴포넌트를 export 합니다. 이를 통해 다른 파일에서 이 컴포넌트를 import하여 사용할 수 있습니다.
export default Accomodate;
