import Animal from "./Animal";

export default class Gato implements Animal {
    
    emitirSom(): string {
        return "O gato miou!"
    }
}