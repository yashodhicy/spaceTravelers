import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MyProfile from '../components/MyProfile';

// Create a mock Redux store
const mockStore = configureMockStore();
const store = mockStore({
  missions: {
    missions: [
      { mission_id: 1, mission_name: 'Mission 1', reserved: true },
      { mission_id: 2, mission_name: 'Mission 2', reserved: false },
    ],
  },
  rockets: {
    rockets: [
      { id: 1, rocket_name: 'Rocket 1', reserved: true },
      { id: 2, rocket_name: 'Rocket 2', reserved: false },
    ],
  },
});

test('renders MyProfile component', () => {
  // Render the component with the mock Redux store
  const { getByText, queryByText } = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );

  // Assert that the component renders the mission names correctly
  expect(getByText('Mission 1')).toBeInTheDocument();
  expect(queryByText('Mission 2')).toBeNull();

  // Assert that the component renders the rocket names correctly
  expect(getByText('Rocket 1')).toBeInTheDocument();
  expect(queryByText('Rocket 2')).toBeNull();
});
