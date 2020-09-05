import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GuestBookEntry, GuestBookList, GuestBookStore } from '../interfaces';

export const initialEntry: GuestBookEntry = {
  name: 'Huy',
  content: 'Hi, there!',
  submitted: new Date(),
};

const GBEntry = createSlice({
  name: 'GBEntry',
  initialState: initialEntry,
  reducers: {
    add: (state, { payload }: PayloadAction<number>) => {
      return state;
    },
  },
});

export const { add } = GBEntry.actions;

export const initialList: GuestBookList = {
  entries: [initialEntry],
};

const GBList = createSlice({
  name: 'GBList',
  initialState: initialList,
  reducers: {
    addEntry: (state) => state,
  },
});

export const { addEntry } = GBList.actions;

export const initialGB: GuestBookStore = {
  guestbook: initialList,
};

const GB = createSlice({
  name: 'GB',
  initialState: initialGB,
  reducers: {
    addEntry: (state) => state,
  },
});

export const reducer = {
  GBEntry: GBEntry.reducer,
  GBList: GBList.reducer,
  GB: GB.reducer,
};
