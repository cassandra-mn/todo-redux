export default function todo(state = [], action) {
    switch (action.type) {
        case 'add':
            return [...state, action.task];
        case 'remove':
            return state.filter(task => task !== action.task);
        default:
            return state;
    }
}