import React from 'react';

const LikeSection = props => {
  // console.log(props.currentLikes);
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={() => props.setLikes(props.currentLikes + 1) }/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
    {props.currentLikes} likes</p>
</div>
  )
};

export default LikeSection;
