import React from "react";

function Comment ({name, img, text}){
    return(
    <div className="comment">
        <div className="comment__img">
          <img src={img} alt="comment" />
        </div>
        <div className="comment__content">
          <h4 className="comment__name">{name}</h4>  
          <p className="comment__text">{text}</p>
        </div>
    </div>
    )
}

export default Comment;