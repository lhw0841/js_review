import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name : "이현우",
        comment : "제가 만든 첫 컴포넌트 입니다.",
    },
    {
        name : "유재석",
        comment : "리액트 재미있어요~!",
    },
    {
        name : "강민경",
        comment : "저도 리액트 배우고 싶어요!!",
    },
];

// CommentList라는 함수형 컴포넌트를 정의합니다. props를 인자로 받습니다.
function CommentList(props){
    // CommentList 컴포넌트는 JSX를 반환합니다.
    return(
        // 최상위 div 요소입니다.
        <div> 
        {/* comments 배열을 순회하며 각각의 comment에 대해 다음을 수행합니다. */}
        {comments.map((comment)=>{
            return (
                // Comment 컴포넌트를 렌더링합니다. comment의 name과 comment를 props로 전달합니다.
                <Comment name={comment.name} comment = {comment.comment} />
            );
        })}
        </div>
    );
}

// CommentList 컴포넌트를 export 합니다. 이를 통해 다른 파일에서 이 컴포넌트를 import하여 사용할 수 있습니다.
export default CommentList
