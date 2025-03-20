import ProfilePicture from "./ProfilePicture";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

function PostList({ post, onDeletePost, onEditPost }) {
  const [liked, setIsLiked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newCaption, setNewCaption] = useState(post.caption);

  return (
    <div className="post-list">
      <ProfilePicture />
      <div className="post-details">
        <div className="user-info">
          <h4>Made Satya</h4>
          <p>@madesatya.5</p>
        </div>

        {isEditing ? (
          <input
            type="text"
            value={newCaption}
            onChange={(e) => {
              setNewCaption(e.target.value);
              onEditPost(post.id, e.target.value);
            }}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setIsEditing(false);
            }}
            autoFocus
          />
        ) : (
          <p>{newCaption}</p>
        )}

        <div className="post-icons">
          {liked ? (
            <FaHeart className="liked" onClick={() => setIsLiked(false)} />
          ) : (
            <FaRegHeart className="unliked" onClick={() => setIsLiked(true)} />
          )}
          <FaRegEdit
            onClick={() => {
              setIsEditing(true);
            }}
          />
          <MdOutlineDeleteOutline onClick={() => onDeletePost(post.id)} />
        </div>
      </div>
    </div>
  );
}

export default PostList;
