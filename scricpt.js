
class User { //// Task 1
    #name;
    constructor(name, login, age) {
        this.#name = name;
        this.login = login;
        this.age = age;
    }
     getName(isAdmin){
    return isAdmin ? this.#name : ' ';
}
}


let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User('', 'NRG', 22);
console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);


// class User {    ////Task 2

//     constructor(name, login, age) {
//         this.name = name;
//         this.login = login;
//         this.age = age;
//     }
//      getName(isAdmin){
//     return isAdmin ? this.name : this.login;
//     }
// }
// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);
// user1.getName(true);
// user2.getName(true);
// console.log(user1.name);
// console.log(user1.login);
// console.log(user2.login);
// console.log(user2.name);


// class User { ////Task 3
//     #password;
//     constructor(name, login, age, password) {
//         this.name = name;
//         this.login = login;
//         this.age = age;
//         this.#password = password
//     }
//      getName(isAdmin){
//     return isAdmin ? this.name : this.login;
//     }
//     getPassword(isAdmin){
//     return isAdmin ? this.#password : '123';
//   }
//     ChangeName() {
//         console.log(`${this.name} Name Changed from Mike to Bill`);
//     }
//     jump() {
//         this.ChangeName();
//     }
// }

// class User { /////Task 4

//     constructor(name, login, age) {
//         this.name = name;
//         this.login = login;
//         this.age = age;
//     }
//      getName(isAdmin){
//     return isAdmin ? this.name : this.login;
//     }
// }
// class Admin extends User {
//     constructor(name, login, age) {
//         super(name);
//         this.login = login;
//         this.age = age;
//     }
//     getUserName() {
//         return this.name
//     }
// }
// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);
// let admin = new Admin('Bill');
// admin.getUserName(user1);
// console.log(admin);



// class User { //// Task 5
//     #phone
//     constructor(name, phone) {
//         this.name = name;
//         this.#phone = phone
//     }
//     getPhone(isAdmin) {
//         return isAdmin ? this.#phone : '067-*****-99'
//     }
    
//    getPhone2(isAdmin) {
//       return isAdmin ? this.#phone : '099-*****-99'
//     }
// }

// let user1 = new User('Mike', '067-888-88-99');
// let user2 = new User('Tom', '099-888-88-99');
// console.log(user1.getPhone(false));
// console.log(user1.getPhone(true));
// console.log(user2.getPhone2(false));
// console.log(user2.getPhone2(true));


// let user1 = '067-888-88-99'; ////
// let phone =  user1.split(' - ');
// console.log(user1);





