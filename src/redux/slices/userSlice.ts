import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {userInterface} from '../../types/interface';

export interface user {
  authenticated: boolean;
  userData: userInterface;
}

const initialState: user = {
  authenticated: false,
  userData: {
    name: '',
    email: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    Login: (state, action: PayloadAction<userInterface>) => {
      state.authenticated = true;
      state.userData = action.payload;
    },
  },
});
