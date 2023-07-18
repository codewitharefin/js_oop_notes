// ✅ Property Overriding
// a) Overriding works for inheritance relationship
// b) When child class change his parent properties, that is overriding


// ✅ Example
// class Father {

//     // Properties
//     firstName = "Morshedul"
//     lastName = "Arefin"

//     // Method
//     getName() {
//         return `The name of the person is ${this.firstName} ${this.lastName}`
//     }
// }

// class Son extends Father {
//     // Overriding Occurs
//     firstName = "Abdullah Arefin"
// }

// const obj = new Son();
// console.log(obj.getName());

// Output: 
// The name of the person is Abdullah Arefin Arefin