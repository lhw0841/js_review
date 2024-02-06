import React from "react";

const styles={
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

// Comment라는 함수형 컴포넌트를 정의합니다. props를 인자로 받습니다.
function Comment(props){
    return(
        <div style={styles.wrapper}>
            {/* 이미지를 담는 컨테이너입니다. */}
            <div style={styles.imageContainer}>
                {/* 이미지 요소입니다. */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
                    style={styles.image}
                />
            </div>
            
            {/* 코멘트 내용을 담는 컨테이너입니다. */}
            <div style={styles.contentContainer}>
                {/* 이름을 표시하는 요소입니다. */}
                <span style={styles.nameText}>{props.name}</span>
                {/* 코멘트를 표시하는 요소입니다. */}
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

// Comment 컴포넌트를 export 합니다. 이를 통해 다른 파일에서 이 컴포넌트를 import하여 사용할 수 있습니다.
export default Comment;
