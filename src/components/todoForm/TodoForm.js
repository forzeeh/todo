import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {addTodoAction} from "../../store/actions";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const createTODO = () => {
    if (inputValue) {
      dispatch(addTodoAction({text: inputValue, id: uuidv4(), isDone: false}));
      setInputValue('');
    }
  }

  const setValueInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <TextField
        id="outlined-basic"
        fullWidth={true}
        label="TODO"
        variant="outlined"
        sx={{marginTop: 2}}
        value={inputValue}
        onChange={setValueInput}
      />

      <Stack spacing={2} direction='row' justifyContent='center'>
        <Button
          variant="contained"
          sx={{mt: 1, width: '50%'}}
          onClick={createTODO}
        >
          ADD TODO
        </Button>
      </Stack>
    </>
  );
}
export default TodoForm;