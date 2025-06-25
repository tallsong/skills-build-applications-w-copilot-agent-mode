
import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://zany-zebra-7r9v7rr779g2r4jr-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-info mb-4">Teams</h2>
          <ul className="list-group">
            {teams.map(team => (
              <li key={team._id} className="list-group-item">
                {team.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Teams;
