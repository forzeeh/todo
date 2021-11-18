import React from 'react';
import styles from './todoList.module.css'
import {useDispatch, useSelector} from "react-redux";

import {Box, Typography} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {deleteTodoAction, setIsDoneAction} from "../../store/actions";

export default function TodoList() {
  const todoList = useSelector(state => state);
  const dispatch = useDispatch();

  const deleteTODO = (index) => {
    dispatch(deleteTodoAction({index}));
  }

  const isTodoDone = (id) => {
    dispatch(setIsDoneAction({id}));
  }

  return (
    <Box>
      {todoList.map((item, index) => {
        return (
          <div key={index} className={styles.todoWrapper}>
            <Typography
              variant="body1"
              align='left'
              sx={{p: 3, mb: 2, borderBottom: '1px solid blue', width: '92%'}}
              className={item.isDone ? styles.isDone : null}
            >
              {item.text}
            </Typography>

            <div className={styles.iconsWrapper}>
              <CheckCircleIcon onClick={() => {isTodoDone(item.id)}}/>
              <DeleteForeverIcon sx={{color: 'red', cursor: 'pointer'}} onClick={() => { deleteTODO(index) }}/>
            </div>

          </div>
        )
      })}
    </Box>
  )
}