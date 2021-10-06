/*
function User(name, email) {
    this.name = name;
    this.email = email;
    this.sayHello = function () {
        console.log(`Hello everybody, my name is ${this.name} whom you've been mailing at ${this.email}!`);
    };
}

const sarah = new User("Sarah", "sarah@example.com");
const lauren = new User("Lauren", "lauren@gmail.com");
sarah.sayHello() // => Hello everybody, my name is Sarah whom you've been mailing at sarah@example.com!
lauren.sayHello() //=> Hello everybody, my name is Lauren whom you've been mailing at lauren@example.com!
*/

function User(name, email){
    this.name = name;
    this.email = email;
}

User.prototype.sayHello = function (){
    console.log(`Hello everybody, my name is ${this.name} whom you've been mailing at ${this.email}!`);
}

const sarah = new User("Sarah", "sarah@example.com");
const lauren = new User("Lauren", "lauren@example.com")
sarah.sayHello() // => Hello everybody, my name is Sarah whom you've been mailing at sarah@example.com!
lauren.sayHello() //=> Hello everybody, my name is Lauren whom you've been mailing at lauren@example.com!

