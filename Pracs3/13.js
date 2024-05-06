const user1 ={
    name:'yuti',
    age:23,
    address:{
        city:'palghar',
        state:'maharashtra',
    },
}
const user2 =user1;
console.log(user1);
console.log(user2);

user2.name ='jaee';
user1.address.city = 'pune';

//one ouput chnage other also change
console.log(user1);
console.log(user2);

//spread operator used
const newUser = {...user1}
console.log(newUser);

newUser.name ='parn ';
newUser.address.city = 'mahim-palghar';
console.log(newUser);
console.log(user1);
console.log(user2);
//output
 // {name: 'yuti', age: 23, address: {…}}
// {name: 'jaee', age: 23, address: {…}}address: {city: 'pune', state: 'maharashtra'}
// {name: 'jaee', age: 23, address: {…}}address: {city: 'pune', state: 'maharashtra'}
// {name: 'jaee', age: 23, address: {…}}address: {city: 'pune', state: 'maharashtra'}
// {name: 'parn ', age: 23, address: {…}}
// {name: 'jaee', age: 23, address: {…}}address: {city: 'pune', state: 'maharashtra'}
// {name: 'jaee', age: 23, address: {…}}address: {city: 'pune', state: 'maharashtra'}

