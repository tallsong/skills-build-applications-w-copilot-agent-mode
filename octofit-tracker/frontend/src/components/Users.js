
import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://zany-zebra-7r9v7rr779g2r4jr-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-warning mb-4">Users</h2>
          <ul className="list-group">
            {users.map(user => (
              <li key={user._id} className="list-group-item">
                {user.username} <span className="text-muted">({user.email})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Users;
