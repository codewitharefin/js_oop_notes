// ✅ Classes constructor is a magic method
// a) Constructor execute automatically when object is created
// b) Constructor can take parameter
// c) Constructor method can't return any result



// ✅ Example 1

// class Person {
//     constructor() {
//         console.log(`I am a constructor`)
//     }
// }
// const obj = new Person()

// Output: 
// I am a constructor



// ✅ Example 2

// class Person {
//     constructor(msg) {
//         console.log(msg)
//     }
// }
// const obj = new Person(`I am a constructor`)

// Output: 
// I am a constructor



// ✅ Example 3

// class Player {
//     constructor(name,age,skill) {
//         this.name = name;
//         this.age = age;
//         this.skill = skill;
//     }
//     sayHello() {
//         return `Hi, I am ${this.name} - ${this.skill}`;
//     }
// }

// const mashrafi = new Player("Mashrafi", 35, "Bowler");
// const sakib = new Player("Mashrafi", 34, "All-rounder");
// const mushfiq = new Player("Mashrafi", 32, "Wicket-keeper");

// console.log(mashrafi.age);
// console.log(mashrafi.name);
// console.log(mashrafi.skill);

// console.log(sakib.sayHello());

// Output: 
// 35
// Mashrafi
// Bowler
// Hi, I am Mashrafi - All-rounder

