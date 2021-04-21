import app from "./app";
import { createActor } from "./endpoints/actor/createActor";
import { getActorByGender } from "./endpoints/actor/getActorByGender";
import { getActorById } from "./endpoints/actor/getActorById";
import { getActorByName } from "./endpoints/actor/getActorByName";
import { updateSalaryById } from "./endpoints/actor/updateSalaryById";

app.get("/actors", getActorByName);
app.get("/actors/gender", getActorByGender);
app.get("/actors/:id", getActorById);
app.post("/actors", createActor);
app.post("/actors/:id", updateSalaryById);
