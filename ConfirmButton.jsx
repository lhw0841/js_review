// React 라이브러리를 import합니다.
import React from "react";

// ConfirmButton이라는 React 클래스 컴포넌트를 선언합니다.
class ConfirmButton extends React.Component {
    // 컴포넌트의 생성자 함수입니다. props를 인자로 받습니다.
    constructor(props){
        // 부모 클래스의 생성자 함수를 호출합니다.
        super(props);

        // 컴포넌트의 초기 상태를 설정합니다. isConfirmed는 false로 초기화됩니다.
        this.state = {
            isConfirmed: false,
        };

        // handleConfirm 메서드를 현재 인스턴스에 바인딩합니다.
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    // handleConfirm 메서드를 선언합니다.
    handleConfirm(){
        // 상태를 업데이트합니다. isConfirmed의 값을 반전시킵니다.
        this.setState((prevState)=>({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    
    // render 메서드를 선언합니다. 이 메서드는 컴포넌트의 UI를 반환합니다.
    render(){
        return(
            // 버튼 요소를 반환합니다. onClick 이벤트 핸들러로 handleConfirm를 설정합니다.
            // isConfirmed 상태에 따라 버튼의 disabled 속성과 텍스트를 변경합니다.
            <button onClick={this.handleConfirm}
            disabled={this.state.isConfirmed}>
                {this.state.isConfirmed? "확인됨" : "확인하기"}
            </button>
        );
    }
}

// ConfirmButton 컴포넌트를 export합니다.
export default ConfirmButton;
