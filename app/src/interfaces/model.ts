import { Comparavel } from "./comparavel";

export interface Model<T> extends Imprimivel, Comparavel<T> {

} 