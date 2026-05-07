//Problem-1: create a filterEvenNumbers Function

function filterEvenNumbers(numbers: number[]):number[]{
    return numbers.filter((num) => num%2==0);
}

const result= filterEvenNumbers([1,2,3,4,5,6]);
console.log(result);



//Problem-2: Reverse a String

function reverseString(str:String):string{
    return str.split("").reverse().join("");

}
console.log(reverseString("Hello"));


//Problem-3: Check String or Number Data Type Using Union

type StringOrNumber=string|number;
function checkType(value: StringOrNumber): string{
    if(typeof value=="string")
    {
        return "String";

    }
    return "Number";
}
console.log(checkType("Hello"));
console.log(checkType(4555));

//Problem-4: Generic function to return key value

function getProperty<T, K extends keyof T> (obj: T, key: K): T[K]{
    return obj[key];
}
const user={
    id: 1,
    name: "John Doe",
    age: 21,
};
console.log(getProperty(user, "name"));

//Problem-5: a function accept a Book object and return a new object with an add isRead property

interface Book{
    title: string;
    author: string;
    publishedYear: number;
}
function toggleReadStatus (book: Book):Book & {isRead: boolean}
{
    return{
        ...book,
        isRead:true,
    };
}

const myBook={
    title: "Typescript Guide",
    author: "jane doe",
    publishedYear: 2004,
};
console.log(toggleReadStatus(myBook));


//Problem-6:
class Person{
    constructor(public name: string, public age: number){

    }
}
class Student extends Person{
    constructor(
        name: string, 
        age: number, 
        public grade: string,
    )
        {
        super (name, age);
         }
    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student =new Student ("Mahamud", 32, "A+");
 
console.log(student.getDetails());

//Problem-7: Return a new arry containing only the elements that ar present in both array

function getIntersection(firstArray:number[], secondArray: number[]):number[]
{
    return firstArray.filter((item)=>secondArray.includes(item));
}
console.log(getIntersection([1,2,3,4,5],[2,3,7,8]));

