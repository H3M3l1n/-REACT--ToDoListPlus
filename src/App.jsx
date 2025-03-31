import { lazy } from 'react';
import './styles/App.sass';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ToDoList = lazy(() => import('./components/todoList/ToDoList'));

const App = () => {
    return <ToDoList />;
};

export default App;
