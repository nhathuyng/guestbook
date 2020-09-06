import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GuestBookStore, GuestBookEntry } from '../interfaces';

export const initialGB: GuestBookStore = {
  guestbook: {
    entries: [{ name: 'Huy', content: ' Hi , there!', submitted: new Date() }],
  },
};

const GB = createSlice({
  name: 'GB',
  initialState: initialGB,
  reducers: {
    addEntry: {
      reducer: ({ guestbook }, { payload }: PayloadAction<GuestBookEntry>) => {
        guestbook.entries.unshift(payload);
      },
      prepare: ({ name, content }: { name: string; content: string }) => {
        return {
          payload: { name, content, submitted: new Date() },
        };
      },
    },
    removeEntry: ({ guestbook }, { payload }: PayloadAction<number>) => {
      guestbook.entries.splice(payload, 1);
    },
  },
});

export const { addEntry, removeEntry } = GB.actions;

export const reducer = {
  GB: GB.reducer,
};
