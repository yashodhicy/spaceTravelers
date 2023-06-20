import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchMissions } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchMissions());
  }, []);

  return (
    <>
      <h1>I am Missions Component.</h1>
    </>
  );
};

export default Missions;
