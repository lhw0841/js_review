import React from "react";
import Notification from "./Notification";

const reservedNotification = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    }
];

var timer;

// NotificationList라는 이름의 클래스 컴포넌트를 정의합니다.
class NotificationList extends React.Component {
    // 생성자 함수입니다. props를 인자로 받아 부모 클래스의 생성자 함수를 호출합니다.
    constructor(props){
        super(props);
        
        // state 객체를 초기화합니다. notifications는 빈 배열입니다.
        this.state = {
            notifications: [],
        };
    }

    // 컴포넌트가 마운트되었을 때 호출되는 생명주기 메서드입니다.
    componentDidMount() {
        // state에서 notifications를 가져옵니다.
        const {notifications} = this.state;
        // setInterval 함수를 사용하여 일정 시간마다 함수를 실행합니다.
        timer = setInterval(()=>{
            // notifications의 길이가 reservedNotification의 길이보다 작으면
            if(notifications.length<reservedNotification.length){
                // notifications의 길이를 index로 사용합니다.
                const index = notifications.length;
                // notifications에 reservedNotification의 해당 index의 요소를 추가합니다.
                notifications.push(reservedNotification[index]);
                // state를 업데이트합니다. notifications를 업데이트합니다.
                this.setState({
                    notifications: notifications,
                });
            } else{
                // 그렇지 않으면, notifications를 빈 배열로 설정하고 타이머를 정지합니다.
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        },1000); // 1초마다 실행합니다.
    }

    // render 메서드입니다. JSX를 반환합니다.
    render(){
        return(
            // div 요소를 반환합니다.
            <div>
                {/* state의 notifications를 순회하며 각각의 notification에 대해 다음을 수행합니다. */}
                {this.state.notifications.map((notification)=>{
                    // Notification 컴포넌트를 반환합니다. key, id, message를 props로 전달합니다.
                    return <Notification
                    key={notification.id}
                    id={notification.id}
                    message={notification.message} />
                })}
            </div>
        );
    }
}

// NotificationList 컴포넌트를 export 합니다. 이를 통해 다른 파일에서 이 컴포넌트를 import하여 사용할 수 있습니다.
export default NotificationList;
