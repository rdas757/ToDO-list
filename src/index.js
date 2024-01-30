import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './styles.css'; // Import your stylesheet if you have one

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

