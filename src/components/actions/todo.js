export function add(task) {
    return {
        type: 'add',
        task
    }
}

export function remove(task) {
    return {
        type: 'remove',
        task
    }
}