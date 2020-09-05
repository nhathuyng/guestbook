import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GuestBookEntry } from '../interfaces';

export const initialState: GuestBookEntry = {
  name: '',
  content: '',
  submitted: new Date(),
};

const guestBookEntry = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<number>) => {
      return state;
    },
  },
});

export const { add } = guestBookEntry.actions;

export const reducer = {
  guestBookEntry: guestBookEntry.reducer,
};
