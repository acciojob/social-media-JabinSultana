import React, { useState } from "react";

const Notifications = () => {
  const [list, setList] = useState([]);

  const load = () => {
    setList(["New like", "New comment"]);
  };

  return (
    <div>
      <button className="button" onClick={load}>
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {list.map((n, i) => (
          <div key={i}>{n}</div>
        ))}
      </section>
    </div>
  );
};

export default Notifications;
