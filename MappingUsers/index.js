const users = [
    {
        id:1,
        name: "Jack",
        isActive: true,
        age:20,
    },
    {
        id:2,
        name: "John",
        isActive: true,
        age:18,
    },
    {
        id:3,
        name: "Mike",
        isActive: false,
        age:30,
    }
];

// 1 Write a code to get array of names from given array of users

// const names = []
// for (let i = 0; i< users.length; i++) {
//     names.push(users[i].name)
// }
// console.log("Logic1",names)

// const names = []
// users.forEach((user) => {
//     names.push(user.name)
// })

// console.log("Logic2",names)

// const names = users.map((item) => item.name)
// console.log("Logic3",names)

// 2 Get ony the users which as only Active

// const names = [];
// for(let i = 0;i < users.length; i++){
//     if(users[i].isActive){
//         names.push(users[i].name)
//     }
// }
// console.log("Logic1",names)

// const onlyActive = users.filter((item) => item.isActive).map((item) => item.name)
// console.log(onlyActive)

// 3. Sort users by age descending

const names = users.sort((user1, user2) => user1.age < user2.age ? 1: -1)
console.log("Logic1",names)