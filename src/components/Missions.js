import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMissions } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchMissions());
  }, [dispatch]);

  const allMissons = useSelector((state) => state.missions.missions);

  return (
    <>
      <table className="missions-table">
        <thead>
          <tr>
            <td>Mission</td>
            <td>discription</td>
            <td>status</td>
            <td>
              {' '}
              {'   '}
              {' '}
            </td>
          </tr>
        </thead>
        <tbody>
          {allMissons.map((el) => (
            <tr key={el.mission_id}>
              <td>{el.mission_name}</td>
              <td>{el.description}</td>
              <td>  tobe</td>
              <td>  tobe</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
