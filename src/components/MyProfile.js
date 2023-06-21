import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const MyProfile = () => {
  const missions = useSelector(state => state.missions.missions)
  console.log(missions)
  const joinedmissions = missions.filter(mission => mission.reserved === true)
   return(
    <div className='mx-5 px-4' style={{width:'50%' }} >
      <h2>My Missions</h2>
      <Table bordered>
        <tbody>
        {
        joinedmissions.map((mission) => (
        <tr key= {mission.mission_id}>
          <td style={{fontWeight:'400'}}>{mission.mission_name}</td>
        </tr>
        ))}
        </tbody>

      </Table>
    </div>
  )
};

export default MyProfile;
