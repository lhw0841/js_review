// React 라이브러리와 useState 훅을 import합니다.
import React,{useState} from "react";

// SignUp이라는 함수형 컴포넌트를 선언합니다.
function SignUp(props){
    // name과 gender라는 상태를 선언하고 초기값을 각각 ""와 "남자"로 설정합니다.
    const [name,setName] = useState("");
    const [gender,setGender] = useState("남자");

    // handleChangeName 함수를 선언합니다. 이 함수는 name 상태를 업데이트합니다.
    const handleChangeName = (event) =>{
        setName(event.target.value);
    };

    // handleSubmit 함수를 선언합니다. 이 함수는 폼 제출 시 alert를 표시하고, 기본 제출 동작을 방지합니다.
    const handleSubmit = (event) => {
        alert(`name : ${name} , gender : ${gender}`);
        event.preventDefault();
    };

    // handleChangeGender 함수를 선언합니다. 이 함수는 gender 상태를 업데이트합니다.
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }

    // 컴포넌트의 UI를 반환합니다.
    return (
        // 폼 요소를 반환합니다. onSubmit 이벤트 핸들러로 handleSubmit를 설정합니다.
        <form onSubmit={handleSubmit}>
            {/* 이름 입력 필드를 렌더링합니다. value는 name 상태이고, onChange 이벤트 핸들러로 handleChangeName를 설정합니다. */}
            <label>
                이름 : 
                <input type="text" value={name} onChange={handleChangeName}></input>
            </label>
            <br></br>
            {/* 성별 선택 드롭다운을 렌더링합니다. value는 gender 상태이고, onChange 이벤트 핸들러로 handleChangeGender를 설정합니다. */}
            <label>
                성별 : 
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            {/* 제출 버튼을 렌더링합니다. */}
            <button type="submit">제출</button>
        </form>
    );
}

// SignUp 컴포넌트를 export합니다.
export default SignUp;
