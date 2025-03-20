import { useState } from "react";
import FormPost from "../ui/FormPost";
import MainNav from "../ui/MainNav";
import PostList from "../ui/PostList";
import { useEffect } from "react";

function Main() {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  });
  console.log(posts);

  function handleAddPost(post) {
    setPosts((posts) => [...posts, post]);
  }
  function handleDeletePost(id) {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  }
  function handleEditPost(id, newCaption) {
    setPosts((posts) =>
      posts.map((post) =>
        post.id === id ? { ...post, caption: newCaption } : post
      )
    );
  }
  function handleLikePost(id) {
    setPosts((posts) =>
      posts.map((post) => 
        post.id === id ? { ...post, liked: !post.liked } : post)
    );
  }

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="main">
      <MainNav />
      <FormPost onAddPost={handleAddPost} />
      {posts.map((post, idx) => (
        <PostList
          post={post}
          key={idx}
          onDeletePost={handleDeletePost}
          onEditPost={handleEditPost}
          onLike={handleLikePost}
        />
      ))}
    </div>
  );
}

export default Main;
