const newTask = process.argv[2];
const task1 = "water the plants";
const task2 = "feed the cat";
const task3 = "bake some arepas";
const taskList = [task1, task2, task3];

if (newTask) {
  const newTaskList = [...taskList, newTask];
  console.log("Task successfully added to the list!");
  console.table(newTaskList);
} else {
  console.log("Please enter a task");
}
