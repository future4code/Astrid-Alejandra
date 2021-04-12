import app from "./app";
import createTask from "./endpoints/task/createTask";
import getAllTasks from "./endpoints/task/getAllTasks";
import createUser from "./endpoints/user/createUser";
import editUserById from "./endpoints/user/editUserById";
import getAllUsers from "./endpoints/user/getAllUsers";
import getUserById from "./endpoints/user/getUserById";

app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.put("/users", createUser);
app.post("/users/edit/:id", editUserById);

app.get("/tasks", getAllTasks);
app.put("/tasks", createTask);
