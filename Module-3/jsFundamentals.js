//Excercise 1
"" + 1 + 0   //This = 10
"" - 1 + 0   // = -1
true + false // if its converted to numbers this = 1
!true        // ! = not, so this is not true = false
6 / "3"      // = 3
"2" * "3"    // = 6
4 + 5 + "px" // = 9px
"$" + 4 + 5  // = $45
"4" - 2      // = 2
"4px" - 2    // = Not a number
" -9 " + 5   // = -9 and 5
" -9 " - 5   // = -9 -5
null + 1     // = 1
undefined + 1// = not a number
undefined == null // = true
undefined === null// = false
" \t \n" - 2 // = -2


//Excersise 2
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four
//let addition = three + four. The numbers here will be processed as strings and not numbers. So this would = 34 and not be addition

//Excercise 3
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')  // will print because "0" is true because it is a string
if (null) console.log('null is true')
if (-1) console.log('negative is true')  //will print because non 0 numbers are truthy
if (1) console.log('positive is true')   //will pring because non 0 numbers are truthy

//Excercise 4
let a = 2, b = 3;
let result = `${a} + ${b} is ${a + b < 10 ? 'less than' : 'greater than'} 10`;
//the += adds what is to the right of it to what is to the left and then replaces what is on the left with the new value to continue the running until the test fails (else)

//Excercise 5 A
var getGreeting = function(name) {
    return 'Hello ' + name + '!';
  };

//Excercise 5 B
var getGreeting = (name) => {
    return 'Hello ' + name + '!';
  };

  //Excercise 6 A
  const inigo = {
    firstName: 'Inigo',
    lastName: 'Violet',
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
      return 'Nice to meet you.';
    }
  }
  
  inigo.greeting(westley)
  inigo.greeting(rugen)

  //Excercise 6 B
  const inigo = {
    firstName: 'Inigo',
    lastName: 'Violet',
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
      if (person.numFingers === 6) {
        return 'You killed my father. Prepare to die.';
      } else {
        return 'Nice to meet you.';
      }
    }
  }
  
  inigo.greeting(westley)  // "Hello Westley, my name is Inigo Violet. Nice to meet you."
  inigo.greeting(rugen)  // "Hello Count Rugen, my name is Inigo Violet. You killed my father. Prepare to die."

  //Excercise 6 C
  const inigo = {
    firstName: 'Inigo',
    lastName: 'Violet',
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => person.numFingers === 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you.'
  }
  
  inigo.greeting(westley)  // "Hello Westley, my name is Inigo Violet. Nice to meet you."
  inigo.greeting(rugen)  // "Hello Count Rugen, my name is Inigo Violet. You killed my father. Prepare to die."

  //Exercise 7 A
  const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
        return this;  
    },
    basket() {
        this.score += 2;
        return this;  
    },
    threePointer() {
        this.score += 3;
        return this;  
    },
    halfTime() {
        console.log('Halftime score is '+this.score);
        
    }
}
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

//Excercise 7 B
const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is '+this.score);
    },
    fullTime() {
        console.log('Full time final score is '+this.score);
    }
}
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().fullTime();

//Excercise 7 C
const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    foul() {
        this.fouls++;
        return this;
    },
    halfTime() {
        console.log('Halftime score is '+this.score+' with '+this.fouls+' fouls.');
    },
    fullTime() {
        console.log('Full time final score is '+this.score+' with '+this.fouls+' fouls.');
    }
}
basketballGame.basket().freeThrow().foul().freeThrow().foul().basket().threePointer().halfTime();
basketballGame.foul().basket().freeThrow().fullTime();

//Excercise 7 D
basketballGame.freeThrow().freeThrow().basket().threePointer().foul().halfTime(); // score is 7 with 1 foul

//Excercise 8 A




  
  


