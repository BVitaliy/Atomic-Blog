import { Link } from "react-router-dom";

function List({ items, type }) {
  return (
    <ul className="list">
      {items?.map((item, i) => (
        <li key={i}>
          <h3>{item.name ? item.name : item.title}</h3>
          {item.username && (
            <p>
              Username: <b>{item.username}</b>
            </p>
          )}
          {item.email && <span>{item.email}</span>}
          {item.body && <p>{item.body}</p>}

          {item.username && (
            <div className="d-flex justify-between align-items-center">
              <Link className="btn primary" to={`posts/${item.id}`}>
                Posts
              </Link>
              <Link className="btn secondary" to={`albums/${item.id}`}>
                Albums
              </Link>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default List;
