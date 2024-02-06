// React 라이브러리와 그 안의 useState 훅을 import 합니다.
import React, { useState } from "react";

// useCounter라는 이름의 커스텀 훅을 정의합니다. 초기값을 인자로 받습니다.
function useCounter(innitialValue){
    // useState 훅을 사용하여 count 상태와 그를 변경하는 setCount 함수를 정의합니다. 초기값은 innitialValue입니다.
    const[count, setCount] = useState(innitialValue);

    // count를 증가시키는 함수를 정의합니다. 이 함수는 count 상태를 현재 값에서 1 증가시킵니다.
    const increaseCount = () => setCount((count)=>count+1);
    // count를 감소시키는 함수를 정의합니다. 이 함수는 count 상태를 현재 값에서 1 감소시키되, 0보다 작아지지 않도록 합니다.
    const decreaseCount = () => setCount((count)=>Math.max(count-1,0));

    // count 상태와 두 함수를 배열로 묶어 반환합니다.
    return [count,increaseCount,decreaseCount];
}

// useCounter 훅을 export 합니다. 이를 통해 다른 파일에서 이 훅을 import하여 사용할 수 있습니다.
export default useCounter;
