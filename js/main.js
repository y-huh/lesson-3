//1
// let a = prompt("1 son kiriting")-0
// let b = prompt("2 son kiriting")-0


// function add(firstNum,SecNum){
//     console.log(firstNum+SecNum);    
// }

// add(a,b)





//2
// let arr = [1,3,5,57,"asdfdaf","gdhf","jhkghlkjhfg"]
// let result = 0
// function NumSum(newArr){
//     for(let i of newArr){
//         if(Number(i))
//             result += i
//     }
// }
// NumSum(arr)
// console.log(result);




//3
// let numbers = [-5, 3, -1, 10, -2, 8];
// console.log(arr(numbers));
// function arr(array) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             newArr[newArr.length] = -array[i];
//         } else {
//             newArr[newArr.length] = array[i];
//         }
//     }
// }

//4
// function processArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === "string") { 
//             array[i] = 0
//         }
//         else{
//             array[i] = Number(array)
//         }
//     }
//     return array;
// }
// let arr = ["5", 2, "true", "salom"];
// console.log(processArray(arr));

//5
// const personArr = [
//     {
//     name: "Abdulloh",
//     age: 19,
//     status: false 
//     },
//     {
//     name: "Ibrohim",
//     age: 20,
//     status: true 
//     },
//     {
//     name: "Shodiyor",
//     age: 18,
//     status: false 
//     }
// ];

// for (let i = 0; i < personArr.length; i++) {
//     if (personArr[i].status === false) {
//         console.log(personArr[i].name);
//     }
// }

//6
// function ortaArifmetik(a, b, c) {
//     let sonlar = [a, b, c];
//     let summa = 0;

//     for (let i = 0; i < sonlar.length; i++) {
//         summa += sonlar[i];
//     }

//     return summa / sonlar.length;
// }

// console.log(ortaArifmetik(3, 6, 9)); // Natija: 6
//7
// function newArr(arr) {
//     if (arr[0] % 2 === 0) {
//         arr[0] += 1;
//     } else {
//         arr[0] -= 1;
//     }
//     return arr;
// }

// console.log(newArr([4, 5, 6])); 
// console.log(newArr([7, 8, 9])); 


//8
// function newArr(arr1, arr2) {
//     let all = [];

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])) {
//             all.push(arr1[i]);
//         }
//     }

//     console.log("Bir xil qiymatlar:", all);
// }

// let array1 = ["olma", "banan", "gilos", "shaftoli"];
// let array2 = ["gilos", "nok", "olma", "anjir"];

// newArr(array1, array2);