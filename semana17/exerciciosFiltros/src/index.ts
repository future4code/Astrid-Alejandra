import app from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import getUserByName from "./endpoints/getUserByName";
import getUserByType from "./endpoints/getUserByType";
import getUsersOrderedByWithLimit from "./endpoints/getUsersOrderByWithLimit";
import getUsersOrderedBy from "./endpoints/getUsersOrderedBy";

app.get("/users/all", getAllUsers);
app.get("/users/name", getUserByName);
app.get("/users/search", getUsersOrderedByWithLimit);
app.get("/users/search/:type", getUserByType);
