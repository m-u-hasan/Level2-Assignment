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


//Problem-7: Return a new arry containing only the elements that ar present in both array

function getIntersection(firstArray:number[], secondArray: number[]):number[]
{
    return firstArray.filter((item)=>secondArray.includes(item));
}
console.log(getIntersection([1,2,3,4,5],[2,3,7,8]));

