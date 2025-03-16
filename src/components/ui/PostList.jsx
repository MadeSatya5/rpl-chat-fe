import ProfilePicture from "./ProfilePicture";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function PostList({ post, onDeletePost }) {
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
          <FaRegHeart />
          <FaRegEdit />
          <MdOutlineDeleteOutline onClick={() => onDeletePost(post.id)} />
        </div>
      </div>
    </div>
  );
}

export default PostList;
