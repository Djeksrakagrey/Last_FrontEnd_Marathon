const list = [
    {name: 'create a post', status: 'In progress', priority: 'low'},
    {name: 'test', status: 'Done', priority: 'high'},
]

const TODO = 'To Do';
const INPROGRESS = 'In progress';
const DONE = 'Done';

const LOW = 'low';
const HIGH = 'high';

function addTask(task, priority, status = TODO) {
    list.push({name: task, status: status, priority: priority});
}

function changeStatus(task, status) {
     let foundTask = list.find(item => item.name === task);
     foundTask.status = status;
}

function changePriority(task, priority) {
    let foundTask = list.find(item => item.name === task);
    foundTask.priority = priority;
}

function deleteTask(task) {
    let foundTask = list.findIndex(item => item.name === task);
    list.splice(foundTask, 1);
}

function showBy() {
    let count = '';
    console.log('To Do:');
    list.forEach(function (item) {
        if (item.status === TODO) {
            console.log(` '${item.name}'`);
            count++;
        }
        if (count === 0) {
            console.log(' -');
        }
    });

    console.log('In Progress:');
    list.forEach(function (item) {
        if (item.status === INPROGRESS) {
            console.log(` '${item.name}'`);
            count++;
        }
        if (count === 0) {
            console.log(' -');
        }
    });
        console.log('Done:');
    list.forEach(function (item) {
        if (item.status === DONE) {
            console.log(` '${item.name}'`);
            count++;
        }
        if (count === 0) {
            console.log(' -');
        }
    });
}

addTask('play PS5', 'low');
addTask('go to sleep', 'low');
addTask('read a book', 'high');
changeStatus('play PS5', 'In progress');
changePriority('create a post', 'high');
deleteTask('go to sleep');

showBy();

















// let list = {
//     'create a new practice task': 'In Progress',
//     'make a bad': 'Done',
//     'write a post': 'To Do',
// }
//
// function changeStatus(task, status) {
//     if (task in list) {
//         list[task] = status;
//     }
// }
//
// function addTask(task) {
//     list[task] = 'In Progress';
// }
//
// function deleteTask(task) {
//     delete list[task];
// }
//
// function findTask(status) {
//     let count = 0;
//      for (let key in list) {
//         if (list[key] === status) {
//             console.log(' "' + key + '"');
//             count++;
//         }
//     }
//      if (count === 0) {
//          console.log('-');
//      }
// }
//
// function showList() {
//     console.log('Todo: ');
//     findTask('To Do');
//
//     console.log('In Progress: ');
//     findTask('In Progress');
//
//     console.log('Done: ');
//     findTask('Done');
// }
//
// changeStatus('make a bad', 'To Do');
// changeStatus('create a new practice task', 'Done');
// addTask('Play in PS5');
// changeStatus('Play in PS5', 'Done');
// addTask('go to sleep');
// changeStatus('go to sleep', 'In Progress');
// deleteTask('make a bad');
// changeStatus('go to sleep', 'To Do');
//
// showList();

