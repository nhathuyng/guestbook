import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CardContent, Card, Typography } from '@material-ui/core';
import Form from '../organisms/GuestBookEntryForm/Form';
interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const state = useSelector((state: RootState) => state.GB);
  const { entries } = state.guestbook;
  return (
    <div>
      <Form />
      {entries.map((entry, i) => (
        <Card key={i}>
          <CardContent>
            <Typography variant="h2" color="initial">
              {entry.name}
            </Typography>
            <Typography variant="body1" color="initial">
              {entry.content}
            </Typography>
            <Typography variant="caption" color="initial">
              {entry.submitted ? entry.submitted.toLocaleDateString() : ''}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
