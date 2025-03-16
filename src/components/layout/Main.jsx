import { useState } from "react"
import FormPost from "../ui/FormPost"
import MainNav from "../ui/MainNav"
import PostList from "../ui/PostList"

function Main() {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    
    function handleAddPost(post){
        setPosts((posts) => [...posts, post])
    }
    return (
        <div className="main">
            <MainNav />
            <FormPost onAddPost={handleAddPost}/>
            {posts.map((post, idx) => <PostList post={post} key={idx}/>)}
        </div>
    )
}

export default Main
