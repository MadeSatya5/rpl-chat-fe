import { useState } from "react";
import ProfilePicture from "./ProfilePicture";

function FormPost() {
  const [inputPost, setInputPost] = useState("");

  function handleSubmit(e) {
      e.preventDefault();
      
      if(!inputPost) return;
      console.log(inputPost);

      setInputPost("");
  }

  return (
    <form className="form-post" onSubmit={handleSubmit}>
      <div className="input-container">
        <ProfilePicture />
        <input
          type="text"
          placeholder="What's Going On?"
          value={inputPost}
          onChange={(e) => setInputPost(e.target.value)}
        />
      </div>
      <button>Post</button>
    </form>
  );
}

export default FormPost;
