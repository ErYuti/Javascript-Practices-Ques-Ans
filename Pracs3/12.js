//destructuring
const userInfo ={
    username:'yuti',
    id:123,
    age:22,
    address:'palghar',
}

const{username,age,address,id}=userInfo
console.log(username,age,address,id);
//output
//destructuring
//yuti 22 palghar 123

// ----------------------------------------------------
// put - in username and console it 
const userInfo1 ={
    "user-name":'yuti meher',
    id1:678,
    age1:45,
    address1:'mumbai',
}
const userName = userInfo1["user-name"];
console.log(userName);


