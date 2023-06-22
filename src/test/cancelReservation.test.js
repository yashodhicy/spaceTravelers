import rocketsReducer, { cancelReservation } from '../redux/rockets/rocketsSlice';

describe('cancelReservation reducer', () => {
  it('should update the reserved property of the rocket with the given id', () => {
    const initialState = {
      rockets: [
        {
          id: '123a', rocket_name: 'Rocket 1', description: 'Description 1', image: 'rocket1.png', reserved: true,
        },
        {
          id: '745', rocket_name: 'Rocket 2', description: 'Description 2', image: 'rocket2.png',
        },
      ],
    };

    const expectedState = {
      rockets: [
        {
          id: '123a', rocket_name: 'Rocket 1', description: 'Description 1', image: 'rocket1.png', reserved: false,
        },
        {
          id: '745', rocket_name: 'Rocket 2', description: 'Description 2', image: 'rocket2.png',
        },
      ],
    };

    const action = cancelReservation({ id: '123a' });
    const actualState = rocketsReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
});
