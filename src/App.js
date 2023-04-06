import {  Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
function App() {
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '94vh',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>TODO APP with REDUX</h1>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
