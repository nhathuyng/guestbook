import React from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import useStyles from './styles';
import { useForm } from 'react-hook-form';
import { GuestBookEntry } from '../../../interfaces';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { addEntry } from '../../../store/GBslice';
import { useSelector, useDispatch } from 'react-redux';

const GuestBookEntrySchema = yup.object().shape({
  name: yup.string().trim().required('Required.'),
  content: yup
    .string()
    .trim()
    .min(10, 'Must be at least 10 characters.')
    .max(200, 'Can not exceed 200 characters.')
    .required('Required.'),
});

interface FormProps {}

const Form: React.FC<FormProps> = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm<GuestBookEntry>({
    resolver: yupResolver(GuestBookEntrySchema),
  });

  const onSubmit = (data: GuestBookEntry): void => {
    console.log(data);
    dispatch(addEntry(data));
    reset();
  };

  console.log(errors);
  return (
    <form
      noValidate
      className={classes.formContainer}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        inputRef={register}
        variant="outlined"
        fullWidth
        name="name"
        label="Name"
        color="secondary"
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ''}
      />
      <TextField
        inputRef={register}
        variant="outlined"
        multiline
        rows={3}
        fullWidth
        name="content"
        label="Content"
        color="secondary"
        error={!!errors.content}
        helperText={errors.content ? errors.content.message : ''}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button type="submit" variant="contained" color="secondary">
          Add Entry
        </Button>
      </Box>
    </form>
  );
};

export default Form;
