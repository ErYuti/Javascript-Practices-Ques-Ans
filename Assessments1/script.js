//Print all even numbers from 0 to 10.
document.write('Event Number from 0 to 10 : ')
for (let i=1; i<=10; i++){
  if(i%2 == 0){
    document.write(i + ",")
  }
}
document.write("<br>")




//Calculate the sum of numbers within an array.
document.write('Calculate the sum of numbers within an array : ')

const array = [1,2,3,4,5,6,7,8,9,10]
const sum = array.reduce((x,y) => {
  return x+y
})
document.write(sum)
document.write("<br>")




//Create a function that reverses an array.
document.write('Create a function that reverses an array : ')
function reversesArray(array){
  return array.reverse();
}
let result = reversesArray([1,2,3,4,5])
document.write(result)

document.write("<br>")




//Create a function that filters out negative numbers.
document.write('Create a function that filters out negative numbers : ')
const arr = [1,-78, 23,-90,-75, 1, 2, -0.4, -8]

const filter = arr.filter((ele)=>{
  return ele <= 0;
})
document.write(filter)

document.write("<br>")





//Sort an array from lowest to highest.
document.write('Sort an array from lowest to highest : ')

const sortArray =(ele)=>{
  return ele.sort((a,b)=> a-b);
}
document.write(sortArray([1,5,8,0,-1,23,766]))