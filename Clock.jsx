import React from "react";

function Clock(props){
    return(
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;

// index.js 파일 내용.
// setInterval(() => {
//     // ReactDOM.render 은 react 18 이후 지원 X , createRoot 사용.
//     const rootElement = document.getElementById('root')
//     const root = createRoot(rootElement)
//     root.render(
//       <React.StrictMode>
//         <Clock  />
//       </React.StrictMode>,
//     );
//   },1000);