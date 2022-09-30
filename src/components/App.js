import {Provider} from 'react-redux';
import {store} from './store.js';
import Todo from './Todo.js';
import TodoGlobal from './TodoGlobal.js';

export default function App() {
    return (
        <Provider store={store}><>
            <Todo />
            <TodoGlobal />
        </></Provider>
    )
}