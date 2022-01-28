let list = {
    'create a new practice task': 'In Progress',
    'make a bad': 'Done',
    'write a post': 'To Do',
}

function changeStatus(task, status) {
    if (task in list) {
        list[task] = status;
    }
}

function addTask(task) {
    list[task] = 'In Progress';
}

function deleteTask(task) {
    delete list[task];
}

function findTask(status) {
    let count = 0;
     for (let key in list) {
        if (list[key] === status) {
            console.log(' "' + key + '"');
            count++;
        }
    }
     if (count === 0) {
         console.log('-');
     }
}

function showList() {
    console.log('Todo: ');
    findTask('To Do');

    console.log('In Progress: ');
    findTask('In Progress');

    console.log('Done: ');
    findTask('Done');
}

changeStatus('make a bad', 'To Do');
changeStatus('create a new practice task', 'Done');
addTask('Play in PS5');
changeStatus('Play in PS5', 'Done');
addTask('go to sleep');
changeStatus('go to sleep', 'In Progress');
deleteTask('make a bad');
changeStatus('go to sleep', 'To Do');

showList();

