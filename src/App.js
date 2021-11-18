// import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import TodoForm from './components/todoForm/TodoForm';
import TodoList from './components/TodoList/TodoList'

import {Box} from "@mui/material";

const App = () => (
    <Box sx={{maxWidth: 1200, minHeight: '100vh', margin: '0 auto',}}>
      <Header/>
      <TodoForm/>
      <TodoList />
    </Box>
  )
;

export default App;

