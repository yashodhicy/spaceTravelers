import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const FetchMissions = createAsyncThunk(
  'Missions/FetchMissions',

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
  missions: [],
  isLoading: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const { id } = action.payload;

      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id !== id) { return mission; }

        return { ...mission, reserved: true };
      });

      console.log('Updated Missions:', updatedMissions);

      return { ...state, missions: updatedMissions };
    },

    leaveMission: (state, action) => {
      const { id } = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === id) { return { ...mission, reserved: false }; }
        return mission;
      });
      console.log('Updated Missions:', updatedMissions);

      return { ...state, missions: updatedMissions };
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload;

        const missions = data.map((element) => ({
          mission_id: element.mission_id,
          mission_name: element.mission_name,
          description: element.description,
        }));
        state.missions = missions;
      })
      .addCase(FetchMissions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
