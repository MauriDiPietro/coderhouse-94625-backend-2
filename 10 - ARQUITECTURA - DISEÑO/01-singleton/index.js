import { connect } from "mongoose";

class ConectMongoDB {
    static #instance;

    constructor(){
        connect('mongodb://localhost:27017/coderhouse')
    }

    static getInstance() {
        if(this.#instance){
            console.log('ya está conectado a mongodb');
            return this.#instance
        }
        this.#instance = new ConectMongoDB();
        console.log('Conectado a MongoDB!');
        return this.#instance;
    }
}

const conn1 = ConectMongoDB.getInstance() 
const conn2 = ConectMongoDB.getInstance()
const conn3 = ConectMongoDB.getInstance()