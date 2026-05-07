//Prblem-1: create a filterEvenNumbers Function

function filterEvenNumbers(numbers: number[]):number[]{
    return numbers.filter((num) => num%2==0);
}

const result= filterEvenNumbers([1,2,3,4,5,6]);
console.log(result);

//Prblem-2: Reverse a String

function reverseString(str:String):string{
    return str.split("").reverse().join("");

}
console.log(reverseString("Hello"));