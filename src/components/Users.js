import React, { useState } from "react";

const Users = ({ posts }) => {
  const users = ["User1", "User2", "User3"];
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <ul>
        {users.map((u, i) => (
          <li key={i} onClick={() => setSelected(u)}>
            <a href="#">{u}</a>
          </li>
        ))}
      </ul>

      {selected && posts
        .filter(p => p.user === selected)
        .map(p => (
          <div className="post" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Users;
