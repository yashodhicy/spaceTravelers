import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const FetchRockets = createAsyncThunk(
  'Rockets/FetchRockets',

  async (_, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  rockets: [],
  isLoading: false,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      const { id } = action.payload;

      const updatedReservation = state.rockets.map((rocket) => {
        if (rocket.id !== id) { return rocket; }

        return { ...rocket, reserved: true };
      });

      return { ...state, rockets: updatedReservation };
    },

    cancelReservation: (state, action) => {
      const { id } = action.payload;
      const updatedReservation = state.rockets.map((rocket) => {
        if (rocket.id === id) { return { ...rocket, reserved: false }; }
        return rocket;
      });

      return { ...state, rockets: updatedReservation };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload;

        const rockets = data.map((element) => ({
          id: element.id,
          rocket_name: element.name,
          description: element.description,
          image: element.flickr_images[0],
        }));
        state.rockets = rockets;
      })
      .addCase(FetchRockets.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addReservation, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
