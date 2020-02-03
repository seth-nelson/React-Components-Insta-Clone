// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
console.log(props);
  // Add state for the comments
const [comment, setComment] = useState(props.comments);


  return (
    <div>
      {comment.map((comment, index) => (
      <Comment comment={comment} key={index} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
