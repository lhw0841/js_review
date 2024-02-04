import React from "react";

const styles={
    wrapper:{
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: "16",
    },
};

// Notification이라는 이름의 클래스 컴포넌트를 정의합니다.
class Notification extends React.Component {
    // 생성자 함수입니다. props를 인자로 받아 부모 클래스의 생성자 함수를 호출합니다.
    constructor(props) {
        super(props);

        // state 객체를 초기화합니다. 현재는 빈 객체입니다.
        this.state = {};
    }
    // 컴포넌트가 마운트되었을 때 호출되는 생명주기 메서드입니다.
    componentDidMount(){
        // 콘솔에 로그를 출력합니다. props.id와 함께 "componentDidMount() called."라는 메시지를 출력합니다.
        console.log(`${this.props.id} "componentDidUpdate() called."`);
    }
    
    // 컴포넌트가 업데이트되었을 때 호출되는 생명주기 메서드입니다.
    componentDidUpdate(){
        // 콘솔에 로그를 출력합니다. props.id와 함께 "componentDidUpdate() called."라는 메시지를 출력합니다.
        console.log(`${this.props.id} "componentDidUpdate() called."`);
    }

    // 컴포넌트가 언마운트되기 직전에 호출되는 생명주기 메서드입니다.
    componentWillUnmount(){
        // 콘솔에 로그를 출력합니다. props.id와 함께 "componentWillUnmount() called."라는 메시지를 출력합니다.
        console.log(`${this.props.id} "componentWillUnmount() called."`);
    }

    // render 메서드입니다. JSX를 반환합니다.
    render() {
        return(
            // div 요소를 반환합니다. 스타일은 styles.wrapper를 참조합니다.
            <div style={styles.wrapper}>
                {/* span 요소를 반환합니다. 스타일은 styles.messageText를 참조하며, 내용은 props.message를 참조합니다. */}
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

// Notification 컴포넌트를 export 합니다. 이를 통해 다른 파일에서 이 컴포넌트를 import하여 사용할 수 있습니다.
export default Notification;