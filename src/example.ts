// [ TASK 1 ]
function concat(first: string, second: string): string {
    return first + second;
}

concat('Hello ', 'World');

// [ TASK 2 ]
type ObjectType = {
    [key: string]: string | Array<string | number>
}

interface interfaceForTask2 {
    howIDoIt: string;
    someArray: (string | number)[],
    // Can we do in such a way?
    // withData?: interfaceForTask2[]
    withData: ObjectType[]
}

const MyHometask: interfaceForTask2 = {
    howIDoIt: "I Do It Wel",
    someArray: ["string one", "string two", 42],
    withData: [{howIDoIt: "I Do It Wel", someArray: ["string one", 23]}],
}

// [ TASK 3 ]
interface MyKingLionInterface {
    name: string;
    type: string
}

interface MyArray<T> {
    [n: number]: T;

    reduce(fn: (accumulator: T, currentValue: T, currentIndex: number, array: T[]) => T): T;

    reduce<U>(fn: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U): U;
}

const myAwesomeArray: MyArray<MyKingLionInterface> = [{name: 'Timon', type: 'meerkat'}, {name: 'Pumbaa', type: 'warthog'}];
