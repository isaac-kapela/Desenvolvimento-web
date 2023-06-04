export default class Pessoa{

    public _nome:String
    public _idade:number

    constructor(nome: String,idade: number){
        this._nome = nome
        this._idade = idade
    }

    public getnome(): String{
        return this._nome
    }

    public setnome(Value: string): void{
         this._nome = Value
    }

    public getidade(): number{
        return this._idade
    }

    public setidade(value: number): void{
         this._idade = value

    } 

}


