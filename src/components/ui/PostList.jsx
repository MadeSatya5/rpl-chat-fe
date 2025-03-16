import ProfilePicture from "./ProfilePicture";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

function PostList({ post, onDeletePost }) {
  const [liked, setIsLiked] = useState(false);
  return (
    <div className="post-list">
      <ProfilePicture />
      <div className="post-details">
        <div className="user-info">
          <h4>Made Satya</h4>
          <p>@madesatya.5</p>
        </div>
        <p>{post.caption}</p>
        <div className="post-icons">
          {liked ? (
            <FaHeart className="liked" onClick={() => setIsLiked(false)}/>
          ) : (
            <FaRegHeart className="unliked" onClick={() => setIsLiked(true)}/>
          )}
          <FaRegEdit />
          <MdOutlineDeleteOutline onClick={() => onDeletePost(post.id)} />
        </div>
      </div>
    </div>
  );
}

export default PostList;
