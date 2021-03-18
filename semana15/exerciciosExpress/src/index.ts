import express, { Request, Response } from "express"
import cors from "cors"
import { countries, country } from "./countries"

const app = express()
app.use(express.json())
app.use(cors())

//ENDPOINT 1
app.get("/countries/all", (req: Request, res: Response) => {
    const result = countries.map((country) => ({
        id: country.id,
        name: country.name
    }))

    res
        .status(200)
        .send(result)
})

//ENDPOINT 3
app.get("/countries/search", (req: Request, res: Response) => {
    const qname: string = req.query.name as string
    const qcapital: string = req.query.capital as string
    const qcontinent: string = req.query.continent as string

    let filteredCountries: country[] = countries

    try {
        if (!qname && !qcapital && !qcontinent) {
            throw new Error("Please enter at least one parameter")
        }
        if (qname) {
            filteredCountries = filteredCountries.filter(
                country => country.name.includes(qname)
            )
        }
        if (qcapital) {
            filteredCountries = filteredCountries.filter(
                country => country.capital.includes(qcapital)
            )
        }
        if (qcontinent) {
            filteredCountries = filteredCountries.filter(
                country => country.continent.includes(qcontinent)
            )
        }
    } catch (error) {
        res.status(400).send(error.message)
    }


    res.status(200).send(filteredCountries)
})

//ENDPOINT 2
app.get("/countries/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id)

    const result: country | undefined = countries.find((country) => {
        return country.id === id
    })
    if (result) {
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

//ENDPOINT 4

app.put("/countries/edit/:id", (req: Request, res: Response) => {
let errorCode: number = 400

const {name, capital} = req.body

try {
    const countryIndex: number = countries.findIndex(
        country => country.id === Number(req.params.id)
    )
    if (countryIndex === -1) {
        errorCode = 404
        throw new Error("Country not found")
    }
    if(!name && !capital) {
        throw new Error("You must enter a name or capital to update")
    }
    if(name){
        countries[countryIndex].name = name
    }
    if(capital){
        countries[countryIndex].capital = capital
    }

    res
    .status(200)
    .send("Country was updated successfully!")
} catch (error) {
    res
    .status(errorCode)
    .send(error.message)
}

})