import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsLoaded = useSelector((state) => state.rockets.rockets.length > 0);
  useEffect(() => {
    if (!rocketsLoaded) {
      dispatch(FetchRockets());
    }
  }, [dispatch, rocketsLoaded]);

  const allRockets = useSelector((state) => state.rockets.rockets);

  return (
    <div className="mx-5">
      <ul className="rockets">
        {allRockets.map((rocket) => (
          <li key={rocket.id} className="rocket">
            <img alt="rocket" className="rocket-image" src={rocket.image} style={{ width: 300 }} />
            <div className="rocket-details">
              <h2>{rocket.rocket_name}</h2>
              <p>{rocket.description}</p>
              <button type="button" className="btn btn-primary">
                Reserve Rocket
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
