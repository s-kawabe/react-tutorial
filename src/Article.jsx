import React,{useState} from 'react';
import LikeButton from "./LikeButton"

// ReactHooksで書いている
const Article = (props) => {
  const [isPublished, togglePublished] = useState(false);

  return (
    <div>
      <h2>{props.title}</h2>
      <label hetmlFor="check">公開状態：</label>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={() => togglePublished(!isPublished)}></input>
      <LikeButton /> 
    </div>
  )
};

export default Article;