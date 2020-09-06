import React from 'react';
import Entries from '../molecules/Entries/Entries';

import Form from '../organisms/GuestBookEntryForm/Form';
interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div>
      <Form />
      <Entries />
    </div>
  );
};

export default Home;
