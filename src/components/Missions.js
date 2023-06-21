import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FetchMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsLoaded = useSelector((state) => state.missions.missions.length > 0);
  useEffect(() => {
    if (!missionsLoaded) {
      dispatch(FetchMissions());
    }
  }, [dispatch, missionsLoaded]);

  const allMissons = useSelector((state) => state.missions.missions);

  return (
    <div className="mx-5">
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr className="fw-bold">
            <td style={{ width: '10%' }}>Mission</td>
            <td style={{ width: '65%' }}>Discription</td>
            <td style={{ width: '10%' }}>Status</td>
            <td style={{ width: '15%' }}>
              {' '}
              {'   '}
              {' '}
            </td>
          </tr>
        </thead>
        <tbody>
          {allMissons.map((el) => (
            <tr key={el.mission_id}>
              <td className="fw-bold">{el.mission_name}</td>
              <td>{el.description}</td>
              <td className="text-center">
                { el.reserved ? (
                  <Badge bg="info">Active Member</Badge>
                ) : (
                  <Badge bg="secondary">NOT A MEMBER</Badge>
                )}
              </td>
              <td className="text-center">
                { el.reserved ? (
                  <Button variant="outline-secondary" onClick={() => dispatch(leaveMission({ id: el.mission_id }))}>Leave Missions</Button>
                ) : (
                  <Button variant="outline-danger" onClick={() => dispatch(joinMission({ id: el.mission_id }))}>Join Missions</Button>
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
