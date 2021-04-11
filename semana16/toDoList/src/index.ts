import app from "./app";
import createUser from "./endpoints/user/createUser";

app.put("/users", createUser);
