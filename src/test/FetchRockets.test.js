import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FetchRockets } from '../redux/rockets/rocketsSlice';

// Create a mock store
const mockStore = configureMockStore([thunk]);

describe('FetchMissions async action', () => {
  let store;

  beforeEach(() => {
    // Create a new store before each test
    store = mockStore({});
  });

  it('dispatches the correct actions when API call is successful', async () => {
    // Mock the fetch function to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([
        {
          id: '1', rocket_name: 'Rocket 1', description: 'Description 1', image: 'rocket1.png',
        },
        {
          id: '2', rocket_name: 'Rocket 2', description: 'Description 2', image: 'rocket2.png',
        },
      ]),
    });

    // Define the expected actions that should be dispatched
    const expectedActions = [
      FetchRockets.pending().type,
      FetchRockets.fulfilled([
        {
          id: '1', rocket_name: 'Rocket 1', description: 'Description 1', image: 'rocket1.png',
        },
        {
          id: '2', rocket_name: 'Rocket 2', description: 'Description 2', image: 'rocket2.png',
        },
      ]).type,
    ];

    // Dispatch the async action
    await store.dispatch(FetchRockets());

    // Get the dispatched actions from the store
    const dispatchedActions = store.getActions();

    // Verify that the dispatched actions match the expected actions
    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });

  it('dispatches the correct actions when API call fails', async () => {
    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue('API error');

    // Define the expected actions that should be dispatched
    const expectedActions = [
      FetchRockets.pending().type,
      FetchRockets.rejected().type,
    ];

    // Dispatch the async action
    await store.dispatch(FetchRockets());

    // Get the dispatched actions from the store
    const dispatchedActions = store.getActions();

    // Verify that the dispatched actions match the expected actions
    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });
});
