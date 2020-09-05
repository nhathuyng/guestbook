export interface GuestBookEntry {
  name: string;
  content: string;
  submitted: Date;
}

export interface GuestBookList {
  entries: GuestBookEntry[];
}

export interface GuestBookStore {
  guestbook: GuestBookList;
}
