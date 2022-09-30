import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/todo';
import {IoMdTrash} from 'react-icons/io'; 
import {Container, Todos, Task} from '../css/style.js';

function TodoGlobal(props) {
    return (
        <Container>
            <Todos>
                <p>Global</p>
                {props.todo.map(task => {
                    return <Task key={task.id}>{task} <IoMdTrash onClick={() => props.remove(task)} /></Task>
                })}
            </Todos>
        </Container>
    );
}

const mapStateToProps = state => ({todo: state.todo});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoGlobal);