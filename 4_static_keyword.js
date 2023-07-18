// ✅ Static Keyword

// Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class.
// A keyword must be static if you want to use into a static method



// ✅ When you should use it?

// 1. Static methods are commonly used to define utility functions that are not tied to any specific instance but are relevant to the class as a whole. These methods can perform specific tasks or calculations that are related to the class but do not require any specific instance data. For example, a Math class may have a static method for calculating the square root of a number.
// 2. This can be convenient in situations where you want to perform a task associated with the class but don't necessarily need to create and manage instances.



// ✅ Example

// class Person {
//     firstName = "Morshedul"
//     lastName = "Arefin"
//     static dateOfBirth = 1984
//     getData() {
//         return `His name is ${this.firstName} ${this.lastName} and birth year is ${this.dateOfBirth}`
//     }
//     static calculateAge() {
//         let dt = new Date();
//         return `His age is: ${dt.getFullYear()-this.dateOfBirth} years`
//     }
// }
// const obj = new Person()
// console.log(obj.getData())
// console.log(Person.calculateAge())


// Output:
// His name is Morshedul Arefin and birth year is undefined
// His age is: 39 years