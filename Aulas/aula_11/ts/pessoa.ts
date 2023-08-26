export default class Pessoa {
    private _nome: string
    private _idade: number 

    constructor(nome: string, idade: number){
        this._nome = nome
        this._idade = idade
    }

    public getNome(): string {
        return this._nome
    }

    public setNome(nome: string): void {
        this._nome = nome
    }

    public getIdade(): number {
        return this._idade
    }

    public setIdade(idade: number): void {
        this._idade
    }
}