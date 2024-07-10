// let arr = [1,2,3,4,5,5,6];
// let arr1 = [4,2,6,3,8,9]
//
// const handleFoo = () => {
//     let newArr = []
//     for (let i = 1; i < arr.length -1; i++) {
//         newArr = [...newArr, arr[i] * arr[i]]
//     }
//     console.log(newArr)
// }
//
// handleFoo();

//задание 1
// let arr = [1, 2, 3, 0, 4, 5, 6]
//
// let final = arr.map(x => x ** 2)
//
// console.log(final)

//задание 2
// let arr = [1, 2, 3, 0, 4, 5, 6]
//
// let arr1 = arr.filter(num => num === 0)
//
// //arr1 = [0]
// //arr1.length = 1
//
// if (arr1.length > 0){
//     console.log('00000')
// }
// else {
//     console.log('111111')
// }

//задание 3
// let arr = [1, 2, -3, 0, 4, -5, 6]
//
// let arr1 = arr.filter(num => num < 0)
//
// if (arr1.length > 0) {
//     console.log('0000')
// }
// else {
//     console.log('1111')
// }

//задание 4
// let arr = [1, 2, -3, 0, 4, -5, 6]
//
// let arr1 = arr.filter(num => num < 0)
// console.log(arr1)

//задание 5
//  let arr = [1, 2, -3, 0, 4, -5, 6]
//
//  let arr1 = arr.filter(num => num % 2 === 0)
//
//  console.log(arr1)

//задание 6
// let arr =['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun' , 'even']
// let arr1 = arr.filter(x => x.length > 5)
//
// console.log(arr1)

//задание 7
// let arr = [1, 2, -3, 0, -4, 5, -6]
// let arr1 = arr.filter(num => num < 0).length
//
// console.log(arr1)

//задание 8
// let arr = [1,2,3,4]
// let arr1 =  ['a','b','c','d']
// let result = arr.concat(arr1)
// console.log(result)

// let arr = [2, 3, 4, 5]
// let arr1 = 'hello world'
// arr.push(arr1)
// console.log(arr)

// let arr = [2, 3, 4, 5]
// let arr1 = 'hello world'
// const strArray = arr1.split(' ').join('').split('')
// const result = arr.concat(strArray)
// console.log(result)

// let arr = [2, 3, 4, 5]
// let arr1 = 'hello world'
//  const strArray = arr1.split(' ').join('').split('')
//  const result = arr.concat(strArray,arr)
// console.log(result)

//задание 9
// for (let i = 1; i <= 100; i++) {
//  if (i % 3 === 0 && i % 5 === 0) {
//   console.log('FizzBuzz');
//  } else if (i % 3 === 0) {
//   console.log('Fizz');
//  } else if (i % 5 === 0) {
//   console.log('Buzz');
//  } else {
//   console.log(i);
//  }
// }