import Animal from "./animal";

export default class Gato implements Animal {
    emitirSom(): string {
        return "O gato miou!"
    }
}