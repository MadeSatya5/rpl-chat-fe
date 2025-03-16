import ProfilePicture from "./ProfilePicture";

function PostList({post}) {
  return (
    <div className="post-list">
      <ProfilePicture />
      <div className="post-details">
        <div className="user-info">
          <h4>Made Satya</h4>
          <p>@madesatya.5</p>
        </div>
        <p>{post}</p>
      </div>
    </div>
  );
}

export default PostList;
