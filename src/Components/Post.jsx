import React, { useEffect, useState } from "react";
import "../css/Post.css";

const Post = ({
  image,
  id,
  likes,
  username,
  Posts,
  setNewPost,
  isNewPost,
  postcomments,
}) => {
  const [comment, setComment] = useState("");
  const [updatedId, setUpdateId] = useState(null);
  const [isrefresh, setrefresh] = useState(false);
  const style = {
    cardTitle: {
      margin: "5px",
    },
    fontSize: {
      fontSize: "20px",
      cursor: "pointer",
    },
    input: {
      border: "none",
      width: "80%",
      padding: "5px",
    },
  };
  const handlelike = (id) => {
    const newPosts = Posts.map((post) => {
      if (post.id === id) {
        if (
          localStorage["current_user"] &&
          !post.likes.includes(
            JSON.parse(localStorage.getItem("current_user")).username
          )
        ) {
          post.likes.push(
            JSON.parse(localStorage.getItem("current_user")).username
          );
          return post;
        } else {
          const new_likes = post.likes.filter(
            (l) =>
              l != JSON.parse(localStorage.getItem("current_user")).username
          );
          post.likes = new_likes;
          return post;
        }
      } else {
        return post;
      }
    });
    localStorage.setItem("Posts", JSON.stringify(newPosts));
    setNewPost(!isNewPost);
  };
  const handlecomment = (e, id) => {
    e.preventDefault();
    if (comment.length !== 0) {
      const newPosts = Posts.map((post) => {
        if (post.id === id) {
          const com = {
            username: JSON.parse(localStorage.getItem("current_user")).username,
            comment: comment,
          };
          post.comments.push(com);

          return post;
        } else {
          return post;
        }
      });
      localStorage.setItem("Posts", JSON.stringify(newPosts));

      setNewPost(!isNewPost);
    }
  };
  return (
    <div className="card post text-dark">
      <div className="card-title d-flex my-2" style={style.cardTitle}>
        <i
          className="bi bi-person-circle mx-2"
          style={{ fontSize: "24px" }}
        ></i>
        <h5 className="mx-2 mt-1">{username}</h5>
        <span className="mt-1 text-primary">Follow</span>
      </div>
      <div className="card-body">
        <img src={image} alt="Ai" width="100%" height="100%" />
      </div>
      <div className="card-footer">
        <div className="icons">
          <i
            className="bi bi-heart mx-1"
            onClick={() => handlelike(id)}
            style={style.fontSize}
          ></i>
          <i
            type="button"
            className="bi bi-chat mx-2 "
            data-toggle="collapse"
            data-target={`#${id}`}
            aria-expanded="false"
            aria-controls="collapseExample"
            style={style.fontSize}
          ></i>

          <span className="comment_value">{postcomments.length}</span>
          <i className="bi bi-send mx-2" style={style.fontSize}></i>
          <i
            className="bi bi-cloud-download mx-2 float-end "
            style={style.fontSize}
          ></i>
        </div>
        <div className="mx-1">
          <p> {likes.length} Likes</p>
        </div>
        <div>
          <div className="collapse w-100 h-100" id={id}>
            <h3> All comments</h3>
            {postcomments?.map((comment, index) => (
              <div key={index}>
                <div className="card px-3 pt-2 my-2 card-body">
                  <h6>
                    {comment?.username}:{comment?.comment}
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <form>
            <input
              type="text"
              placeholder="Add a comments"
              style={style.input}
              name="comment"
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="btn btn-primary btn-sm mx-md-2 mx-2 mx-lg-4"
              onClick={(e) => handlecomment(e, id)}
            >
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
