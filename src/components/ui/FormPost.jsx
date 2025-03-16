import ProfilePicture from "./ProfilePicture"

function FormPost() {
    return (
        <form className="form-post">
            <ProfilePicture />
            <input type="text" placeholder="What's Going On?"/>
            <button>Post</button>
        </form>
    )
}

export default FormPost
