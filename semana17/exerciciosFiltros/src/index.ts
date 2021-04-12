import app from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import getUserByName from "./endpoints/getUserByName";
import getUserByType from "./endpoints/getUserByType";
import getUsersOrderedBy from "./endpoints/getUsersOrderedBy";

app.get("/users/all", getAllUsers);
app.get("/users/name", getUserByName);
app.get("/users/search", getUsersOrderedBy);
app.get("/users/search/:type", getUserByType);
