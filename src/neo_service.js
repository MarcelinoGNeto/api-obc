export async function getNeos() { //export nomeado (import { getNeos } from "./getNeos")
    const reponse = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY") //pega o link da API
    const result = reponse.json() //converte a API em "objeto" js
    return result["near_earth_objects"] //Lista de objetos
}