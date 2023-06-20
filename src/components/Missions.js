import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { FetchMissions } from '../redux/missions/missionsSlice';

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
          <td  style={{ width: '10%' }}>Mission</td>
          <td style={{ width: '70%' }}>discription</td>
          <td style={{ width: '10%' }}>status</td>
          <td style={{ width: '10%' }}>
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
            <td>  tobe</td>
            <td>  tobe</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default Missions;
