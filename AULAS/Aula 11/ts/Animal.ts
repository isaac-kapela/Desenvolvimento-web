export default class Animal{
    private _nome: string

    constructor(nome: string){
        this._nome = nome
    }
    public comer():string{
        return `${this._nome} esta comendo`
        
    }

    public sentar():string{
        return `${this._nome} acabou de sentar`
    }

}