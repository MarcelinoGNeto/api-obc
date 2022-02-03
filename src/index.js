import "core-js"
import "regenerator-runtime/runtime"

import Neo from "./neo"                       //API
import { getNeos } from "./neo_service"       //Constructor

async function loadNeos() {
    let neos = []
    let neosJSON = await getNeos() 
    neosJSON.forEach(neo => { 
        const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"] //minDiameter recebe informações diametro mínimo
        const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"] //maxDiameter recebe informações diametro máximo
        const averageDiameter = (minDiameter + maxDiameter) / 2 //averageDiameterc o cálculo médio entre minimo e maximo
        const newNeo = new Neo(neo["id"], neo["name"], averageDiameter, neo["is_sentry_object"])
        neos.push(newNeo)
    })
    console.log(neos)
}

loadNeos()

