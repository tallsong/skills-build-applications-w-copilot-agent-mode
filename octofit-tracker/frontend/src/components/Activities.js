

import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    fetch('https://zany-zebra-7r9v7rr779g2r4jr-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  const openModal = (activity) => {
    setSelectedActivity(activity);
    const modal = new window.bootstrap.Modal(document.getElementById('activityModal'));
    modal.show();
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-primary mb-4">Activities</h2>
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>User</th>
                <th>Activity Type</th>
                <th>Duration (seconds)</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity._id}>
                  <td>{activity.user}</td>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                  <td>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => openModal(activity)}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bootstrap Modal for Activity Details */}
      <div className="modal fade" id="activityModal" tabIndex="-1" aria-labelledby="activityModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="activityModalLabel">Activity Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {selectedActivity && (
                <div>
                  <p><strong>User:</strong> {selectedActivity.user}</p>
                  <p><strong>Activity Type:</strong> {selectedActivity.activity_type}</p>
                  <p><strong>Duration:</strong> {selectedActivity.duration} seconds</p>
                  {/* Add more details here if available */}
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
