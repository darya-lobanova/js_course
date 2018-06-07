class Human {
    constructor(opts) {
        this.opts = opts;
    }
    sayHello() {
        console.log("Hello, my name is ${this.opts.name}, i am ${this.opts.age} years old")
    }
}

let sumArray = 0;
class AlevelStudent extends Human {
    constructor(opts){
        super();
        // super({marks: [8, 7, 6, 10, 5],});
        this.opts2 = opts;
        this.marks = opts.marks;
    }
    averageMark() {
        for (let i = 0; i < this.marks.length; i++) {
            sumArray += this.marks[i];
          }
        let average = sumArray / this.marks.length;
        console.log(average);
    }
}

const pickUp = new AlevelStudent({
    name: 'Darya',
    age: 18,
    marks: [8, 7, 6, 10, 5],
})






// А это была оooooчень неудачная проба пера((

//     class Human({
//         name: 'darya',
//         age: 18,
//     })
//     Human.prototype.sayHello = function() {
//     console.log("Hello, my name is ${name}, i am ${age} years old" + this.firstName);
//     };
    
//     class AlevelStudent ({
//     name: 'Darya',
//     age: 18,
//     marks: [8, 7, 6, 10, 5],
//     })
//     let sumArray = 0;
    
//     AlevelStudent.prototype.averageMark = function() {
//     console.log(
//         for (let i = 0; i < marks.length; i++){
//                 sumArray += marks[i];
//             };
//     );
//     }


  