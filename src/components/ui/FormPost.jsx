import { useState } from "react";
import ProfilePicture from "./ProfilePicture";

function FormPost({onAddPost}) {
  const [caption, setCaption] = useState("");

  function handleSubmit(e) {
      e.preventDefault();
      
      if(!caption) return;
      // console.log(inputPost);

      const newPost  = {
        id: Date.now(),
        caption,
      }
      
      onAddPost(newPost);

      setCaption("");
  }

  return (
    <form className="form-post" onSubmit={handleSubmit}>
      <div className="input-container">
        <ProfilePicture />
        <input
          type="text"
          placeholder="What's Going On?"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>
      <button>Post</button>
    </form>
  );
}

export default FormPost;
