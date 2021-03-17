import express, {Request, Response} from "express"
import cors from "cors"
import {countries, country} from "./countries"

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

app.get("/countries/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id)

    const result: country | undefined = countries.find((country) => {
        return country.id === id
    })
if(result) {
    res
    .status(200)
    .send(result)
} else {
    res
    .status(404)
    .send("Not found")
}
})

app.listen(3003, () => {
    console.log("server pronto")
})