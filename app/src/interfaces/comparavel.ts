export interface Comparavel<T> {
    isComparable(object: T): boolean;
}