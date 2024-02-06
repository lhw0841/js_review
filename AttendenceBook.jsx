// React 라이브러리를 import합니다.
import React from "react";

// 학생들의 정보를 담은 배열을 선언합니다.
const students = [
    {   
        id: 1,
        name : "Inje",
    },
    {   
        id: 2,
        name : "steve",
    },
    {
        id: 3,
        name : "Billi",
    },
    {
        id: 4,
        name : "Jeff",
    },
];

// AttendenceBook이라는 함수형 컴포넌트를 선언합니다.
function AttendenceBook(props){
    // 컴포넌트의 UI를 반환합니다.
    return(
        <ul>
            {/* students 배열을 순회하며, 각 학생의 이름을 li 요소로 렌더링합니다. */}
            {/* 각 li 요소는 학생의 id를 key prop으로 가집니다. */}
            {students.map((student)=>{
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

// AttendenceBook 컴포넌트를 export합니다.
export default AttendenceBook;
