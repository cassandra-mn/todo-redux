import {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/todo';
import {IoIosAddCircle, IoMdTrash} from 'react-icons/io';
import {Container, Form, Input, Button, Todos, Task} from '../css/style.js';

function Todo(props) {
    const [task, setTask] = useState('');
    const [todo, setTodo] = useState([]);

    function add() {
        setTodo([...todo, task]);
        setTask('');
        props.add(task);
    }

    function remove(task) {
        const newTodo = todo.filter(todo => todo !== task);
        setTodo(newTodo);
    }

    return (
        <Container>
            <Form>
                <Input placeholder='Adicione uma tarefa' required 
                    value={task} onChange={e => setTask(e.target.value)} />
                <Button onClick={add}><IoIosAddCircle /></Button>
            </Form>
          
            <Todos>
                <p>Local</p>
                {todo ? (
                    todo.map(task => {
                        return <Task key={task.id}>{task} <IoMdTrash onClick={() => remove(task)} /></Task>
                    })
                ) : ''}
            </Todos>
        </Container>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(Todo);