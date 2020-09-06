import React from 'react';
import { CardContent, Card, Typography, Button, Box } from '@material-ui/core';
import { GuestBookEntry } from '../../../interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import useStyles from './styles';
import { removeEntry } from '../../../store/GBslice';

interface EntriesProps {}

const Entries: React.FC<EntriesProps> = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.GB);
  const { entries } = state.guestbook;

  return (
    <div>
      {entries.map((entry: GuestBookEntry, id) => (
        <Card key={id} className={classes.singleCard}>
          <CardContent>
            <Typography variant="h2" color="initial">
              {entry.name}
            </Typography>
            <Typography variant="body1" color="initial">
              {entry.content}
            </Typography>
            <Typography variant="caption" color="initial">
              {entry.submitted ? entry.submitted.toLocaleString() : ''}
            </Typography>
            <Box display="flex" justifyContent="flex-end">
              <Button
                onClick={() => dispatch(removeEntry(id))}
                variant="outlined"
                color="secondary"
              >
                Delete
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Entries;
