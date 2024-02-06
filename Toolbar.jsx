// React 라이브러리를 import합니다.
import React from "react";

// 스타일 객체를 선언합니다. 이 객체는 wrapper와 greeting에 대한 스타일을 정의합니다.
const styles = {
    wrapper :{
        padding: 16,
        display: "flex",
        flexDirectoin: "row",
        borderBotton: "1px solid grey",
    },
    greeting :{
        marginRight: 8,
    },
};

// Toolbar라는 함수형 컴포넌트를 선언합니다.
function Toolbar(props){
    // props에서 필요한 값들을 추출합니다.
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    // 컴포넌트의 UI를 반환합니다.
    return(
        <div style={styles.wrapper}>
            {/* 로그인 상태가 true일 경우, 환영 메시지를 표시합니다. */}
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

            {/* 로그인 상태에 따라 버튼의 텍스트와 클릭 이벤트 핸들러를 변경합니다. */}
            {isLoggedIn ? (<button onClick={onClickLogout}>로그아웃</button>) : (<button onClick={onClickLogin}>로그인</button>)}
        </div>
    );
}

// Toolbar 컴포넌트를 export합니다.
export default Toolbar;
