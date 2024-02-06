// React 라이브러리와 useState 훅을 import합니다.
import React,{useState} from "react";
// Toolbar 컴포넌트를 import합니다.
import Toolbar from "./Toolbar";

// LandingPage라는 함수형 컴포넌트를 선언합니다.
function LandingPage(props){
    // isLoggedIn라는 상태를 선언하고 초기값을 false로 설정합니다.
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    // onClickLogin 함수를 선언합니다. 이 함수는 isLoggedIn 상태를 true로 설정합니다.
    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    // onClickLogout 함수를 선언합니다. 이 함수는 isLoggedIn 상태를 false로 설정합니다.
    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    // 컴포넌트의 UI를 반환합니다.
    return (
        <div>
            {/* Toolbar 컴포넌트를 렌더링하고, isLoggedIn 상태와 onClickLogin, onClickLogout 함수를 prop으로 전달합니다. */}
            <Toolbar
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            {/* "리액트 공부"라는 텍스트를 포함하는 div 요소를 렌더링합니다. 이 div 요소는 padding이 16으로 설정되어 있습니다. */}
            <div style={{padding:16}}>리액트 공부</div>
        </div>
    );
}

// LandingPage 컴포넌트를 export합니다.
export default LandingPage;
