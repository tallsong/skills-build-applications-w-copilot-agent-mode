
import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://zany-zebra-7r9v7rr779g2r4jr-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-danger mb-4">Workouts</h2>
          <ul className="list-group">
            {workouts.map(workout => (
              <li key={workout._id} className="list-group-item">
                <strong>{workout.name}</strong>: {workout.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
