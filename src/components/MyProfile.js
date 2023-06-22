import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missions.missions);
  const joinedmissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="profile-container mx-5">
      <div className="px-4" style={{ width: '50%' }}>
        <h2>My Missions</h2>
        <Table bordered>
          <tbody>
            {
        joinedmissions.map((mission) => (
          <tr key={mission.mission_id}>
            <td style={{ fontWeight: '400' }}>{mission.mission_name}</td>
          </tr>
        ))
        }
          </tbody>

        </Table>
      </div>
      <div className="px-4" style={{ width: '50%' }}>
        <h2>My Rockets</h2>
        <Table bordered>
          <tbody>
            {
            reservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td style={{ fontWeight: '400' }}>{rocket.rocket_name}</td>
              </tr>
            ))
}
          </tbody>

        </Table>
      </div>
    </div>
  );
};

export default MyProfile;
