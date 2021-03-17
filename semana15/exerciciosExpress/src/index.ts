import express, {Request, Response} from "express"
import cors from "cors"
import {countries} from "./countries"

const app = express()
app.use(express.json())
app.use(cors())

const result = countries.map((country) => ({
    id: country.id,
    name: country.name
}))

app.get("/countries/all", (req: Request, res: Response) => {
    res
    .status(200)
    .send(result)
})


app.listen(3003, () => {
    console.log("server pronto")
})