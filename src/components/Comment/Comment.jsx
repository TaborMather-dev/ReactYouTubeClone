import React from 'react';

const Comment = ({ comment, addLike, addDislike }) => {

    if (!comment) return <div></div>

    return (
        <div className="comment">
            <p>{comment.body}</p>
            <p><button onClick={() => addLike(comment.id, comment.video_id)}>Likes:</button> {comment.likes} | <button onClick={() => addDislike(comment.id, comment.video_id)}>Dislikes:</button> {comment.dislikes}</p>
        </div>
    )
}

export default Comment;