// [ TASK 1 ]
function concat(first: string, second: string): string {
    return first + second;
}

concat('Hello ', 'World');

// [ TASK 2 ]
type ObjectType = {
    [key:string]: string | Array<string | number>
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
	withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }],
}

// [ TASK 3 ]
type MyType = {
    [key:string]: any;
}

interface MyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (el: T) => U): U[] | MyType;
}
