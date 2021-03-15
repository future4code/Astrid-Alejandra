const newTask = process.argv[2];
const task1 = "water the plants";
const task2 = "feed the cat";
const task3 = "bake some arepas";
const taskList = [task1, task2, task3];

const newTaskList = [...taskList, newTask];

console.table(newTaskList);
