import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    padding: 40px;
    font-family: var(--font-osvald);
`;

const Form = styled.div`
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 280px;
    height: 50px;
    padding: 15px;
    margin-bottom: 5px;
    font-size: 23px;
    font-weight: 700;
    line-height: 40px;
    border-radius: 10px; 
    border: 1px solid;
    color: #333333;
    background: #FFFFFF;

    ::placeholder {
        color: #9F9F9F;
    }
`;

const Button = styled.button`
    font-size: 40px;
    border: none;
    color: #1E90FF;
    background-color: transparent;
    
    :hover {
        cursor: pointer;
    }
`;

const Todos = styled.div`
    margin-top: 30px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    color: #1C1C1C;

    p {
        font-size: 25px;
        font-weight: 700;
        line-height: 40px;
    }
`;

const Task = styled.div`
    width: 275px;
    height: 60px;
    margin: 5px;
    padding: 15px;
    font-size: 24px;
    line-height: 40px;
    border-radius: 10px;
    color: #363636;
    background-color: #DCDCDC;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export {
    Container,
    Form,
    Input,
    Button,
    Todos,
    Task
};