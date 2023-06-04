import Amimais from "./animais";

export default class gato implements Amimais{
    emitirSom(): String {
        return " O gato miou"
    }
}