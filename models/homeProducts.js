const db = require("../config/database")

module.exports = class HomeProducts {
    constructor(name, price, description, room){
        this.name = name,
        this.price = price,
        this.description = description,
        this.room = room
    }

    static getAll(){
        return db.execute("SELECT * FROM home")
    }
    
    static getById(id){
        return db.execute(`SELECT * FROM home WHERE home.id = ${id}`)
    }
    create(){
        // opción 1:
        // return db.execute("INSERT INTO home (name, price, description, room) VALUES (?,?,?,?)", [this.name, this.price, this.description, this.room])

        // opción 2:
        return db.execute(`INSERT INTO home (name, price, description, room) VALUES ('${this.name}','${this.price}','${this.description}','${this.room}')`) 

    }
    update(id){
        return db.execute(`UPDATE home SET home.name = '${this.name}', home.price = '${this.price}', home.description = '${this.description}', home.room = '${this.room}' WHERE home.id = ${id}`)
    }

    static delete(id){
        return db.execute(`DELETE FROM home WHERE home.id = ${id}`)
    }

}
