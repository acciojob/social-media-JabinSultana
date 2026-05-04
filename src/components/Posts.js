import React, { useState } from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("User1");
  const [content, setContent] = useState("");

  const addPost = () => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      user: author,
      reactions: [0,0,0,0,0]
    };
    setPosts([...posts, newPost]);
  };

  const addReaction = (postId, index) => {
    if (index === 4) return; // 5th button no change

    setPosts(posts.map(p => {
      if (p.id === postId) {
        const newReactions = [...p.reactions];
        newReactions[index]++;
        return { ...p, reactions: newReactions };
      }
      return p;
    }));
  };

  return (
    <div>
      <h1>GenZ</h1>

      {/* Create Post */}
      <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />
      <select id="postAuthor" onChange={e => setAuthor(e.target.value)}>
        <option>User1</option>
        <option>User2</option>
        <option>User3</option>
      </select>
      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={addPost}>Add Post</button>

      {/* Posts */}
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            <Link className="button" to={`/posts/${post.id}`}>View</Link>

            {post.reactions.map((count, i) => (
              <button key={i} onClick={() => addReaction(post.id, i)}>
                {count}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
