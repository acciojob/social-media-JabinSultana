import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = ({ posts, setPosts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const save = () => {
    setPosts(posts.map(p =>
      p.id === post.id ? { ...p, title, content } : p
    ));
    setEdit(false);
  };

  return (
    <div className="post">
      {edit ? (
        <>
          <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />
          <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />
          <button onClick={save}>Save</button>
        </>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button className="button" onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default PostDetail;
