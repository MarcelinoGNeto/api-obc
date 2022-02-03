export default class Neo { //export padrão (import Neo from "./neo")
    constructor(id, name, averageEstimatedDiameter, isSentry) {
        this.id = id
        this.name = name
        this.averageEstimatedDiameter = averageEstimatedDiameter
        this.isSentry = isSentry
    }
}