import { useState } from "react";
import FormPost from "../ui/FormPost";
import MainNav from "../ui/MainNav";
import PostList from "../ui/PostList";

function Main() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  function handleAddPost(post) {
    setPosts((posts) => [...posts, post]);
  }
  function handleDeletePost(id) {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  }
  return (
    <div className="main">
      <MainNav />
      <FormPost onAddPost={handleAddPost} />
      {posts.map((post, idx) => (
        <PostList
          post={post}
          key={idx}
          onDeletePost={handleDeletePost}
        />
      ))}
    </div>
  );
}

export default Main;
