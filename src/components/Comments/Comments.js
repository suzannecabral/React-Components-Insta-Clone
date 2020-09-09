import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  // const { comments } = ['test1', 'test2', 'test3']
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}


      {
        comments.map(eachComment => 
        <Comment 
        comment = {eachComment}
        />
        )
      }


    </div>
  );
};

export default Comments;
