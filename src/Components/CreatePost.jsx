import React, { useState } from "react";
import swal from "sweetalert";
const CreatePost = ({ posts, setNewPosts }) => {
  const [post, setpost] = useState({
    username: JSON.parse(localStorage.getItem("current_user")).fullname,
    image: "",
    likes: [],
    comments: [],
  });
  const { username, image } = post;
  const handlepost = (e) => (name) => {
    setpost({ ...post, [name]: e.target.value, id: posts.length });
  };

  const submit = () => {
    if (post.image.length != 0) {
      const newpostData = [...posts, post];
      if (!localStorage["Posts"]) {
        localStorage.setItem("Posts", JSON.stringify(newpostData));
        setNewPosts(newpostData);
      } else {
        const newposts = [...JSON.parse(localStorage.getItem("Posts")), post];
        localStorage.setItem("Posts", JSON.stringify(newposts));
        setNewPosts(newposts);
      }
    } else {
      swal("Invalid", "Image filed required", "info");
    }
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create Post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name={username}
                    value={username}
                    onChange={(e) => handlepost(e)("username")}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Image Link
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name={image}
                    onChange={(e) => handlepost(e)("image")}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={submit}
                className="btn btn-primary"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
