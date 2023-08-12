//Excercise 1
function makeCounter() {
    let currentCount = 0;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter();
    counter1(); // 1
    counter1(); // 2

//A
let counter2 = makeCounter();
counter2(); // 1
counter2(); // 2

counter1(); // 3

//B
function makeCounter(startFrom) {
    let currentCount = startFrom;
    return function() {
      currentCount++;
      console.log(currentCount);
      return currentCount;
    };
  }
  
  let counter1 = makeCounter(5);
  counter1(); // 6
  counter1(); // 7
  
  let counter2 = makeCounter(10);
  counter2(); // 11
  counter2(); // 12
  
  counter1(); // 8

//C
  function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom;
    return function() {
      currentCount += incrementBy;
      console.log(currentCount);
      return currentCount;
    };
  }
  
  let counter1 = makeCounter(5, 2);
  counter1(); // 7
  counter1(); // 9
  
  let counter2 = makeCounter(10, 3);
  counter2(); // 13
  counter2(); // 16
  
  counter1(); // 11


//Excercise 2

function delayMsg(msg) {
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')


//A

//#4, #3, #2, #1

//B
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(() => delayMsg('#1: Delayed by 100ms'), 100);
setTimeout(() => delayMsg('#2: Delayed by 20ms'), 20);
setTimeout(() => delayMsg('#3: Delayed by 0ms'), 0);
delayMsg('#4: Not delayed at all');

//C
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(() => delayMsg('#1: Delayed by 100ms'), 100);
setTimeout(() => delayMsg('#2: Delayed by 20ms'), 20);
setTimeout(() => delayMsg('#3: Delayed by 0ms'), 0);
delayMsg('#4: Not delayed at all');
setTimeout(() => delayMsg('#5: Delayed by 10 seconds'), 10000);


//D
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(() => delayMsg('#1: Delayed by 100ms'), 100);
setTimeout(() => delayMsg('#2: Delayed by 20ms'), 20);
setTimeout(() => delayMsg('#3: Delayed by 0ms'), 0);
delayMsg('#4: Not delayed at all');


let timeoutId = setTimeout(() => delayMsg('#5: Delayed by 10 seconds'), 10000);


clearTimeout(timeoutId);

//Excercise 3

//A
function debounce(func) {
    let timeoutID;
    return function() {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => func(), 1000);
    }
  }
  
  function printMe() {
    console.log("This took too long. I'm going to a different website!");
  }
  
  printMe = debounce(printMe);
  
  setTimeout( printMe, 100);
  setTimeout( printMe, 200);
  setTimeout( printMe, 300);
  //This took too long. I'm going to a different website! (after 1000 milliseconds)

  //B
  function debounce(action, milliseconds) {
    let timeoutID;
    return function() {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => action(), milliseconds);
    }
  }
  
  function printMe() {
    console.log("This took too long. I'm going to a different website!");
  }
  
  printMe = debounce(printMe, 10000);
  
  setTimeout( printMe, 100);
  setTimeout( printMe, 200);
  setTimeout( printMe, 300);

  //This took too long. I'm going to a different website! (after 10000 milliseconds)
  
//C
function debounce(action, milliseconds) {
    let timeoutID;
    return function() {
      let context = this;
      let args = arguments;
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => action.apply(context, args), milliseconds);
    }
  }
  
  function printMe(msg) {
    console.log("This took too long. I'm going to a different website!", msg);
  }
  
  printMe = debounce(printMe, 10000);
  
  setTimeout(() => printMe("Not bad!"), 100);
  setTimeout(() => printMe("I'm still waiting..."), 200);
  setTimeout(() => printMe("Seriously, this is taking forever."), 300); //This took too long. I'm going to a different website! Seriously, this is taking forever.

//Excercise 4

//A
function printFibonacci() {
  let a = 0, b = 1;

  console.log(b); 

  setInterval(function() {
    const nextNumber = a + b;
    console.log(nextNumber);
    a = b;
    b = nextNumber;
  }, 1000); // Interval of 1 second
}

//B
function printTimeout() {
  let a = 0, b = 1;

  console.log(b); 

  function printNext() {
    const nextNumber = a + b;
    console.log(nextNumber);
    a = b;
    b = nextNumber;

    setTimeout(printNext, 1000); // waits 1 second before printing
  }

  setTimeout(printNext, 1000); // starts after 1 second
}

//C
function printLimit(limit) {
  let a = 0, b = 1, count = 0;

  const intervalID = setInterval(function() {
    if (count >= limit) {
      clearInterval(intervalID);
      return;
    }
    
    const nextNumber = a + b;
    console.log(nextNumber);
    a = b;
    b = nextNumber;

    count++;
  }, 1000); 
}

//Excercise 5
//this isnt bound to the car object

//A
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

car.description(); 

setTimeout(() => {
  car.description();
}, 200); 

//B
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

car.description(); 

setTimeout(() => {
  car.description();
}, 200);

//C
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

car.description(); 

setTimeout(() => {
  car.description();
}, 200);

let newCar = {...car, year: 2023 };
newCar.description();

//D
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

car.description(); 

setTimeout(car.description.bind(car), 200); 

//E
let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

car.description(); 
setTimeout(car.description.bind(car), 200); 

let newCar = Object.assign({}, car);
newCar.year = 2023;

let updatedCar = Object.assign({}, car);
updatedCar.model = "Carrera";

setTimeout(updatedCar.description.bind(updatedCar), 200); 

//Excercise 6

//A
Function.prototype.delay = function(ms) {
  let func = this;
  return function(a, b) {
      setTimeout(() => func(a, b), ms);
  };
};

function multiply(a, b) {
  console.log( a * b );
}

multiply.delay(500)(5, 5); 

//B
Function.prototype.delay = function(ms) {
  let func = this;
  return function(...args) {
      setTimeout(() => func.apply(this, args), ms);
  };
};

function multiply(a, b, c) {
  console.log(a * b * c);
}

multiply.delay(500)(5, 5, 2); 

//C
Function.prototype.delay = function(ms) {
  let func = this;
  return function(...args) {
      setTimeout(() => func.apply(this, args), ms);
  };
};

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply.delay(500)(5, 5, 2, 2); 


//Excercise 7

//A
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function() {
  return `Person's name: ${this.name}, age: ${this.age}, gender: ${this.gender}`;
}

const person1 = new Person('Garrett Palma', 28, 'male')
console.log('person1: '+person1) 


//B
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function() {
  return `Person's name: ${this.name}, age: ${this.age}, gender: ${this.gender}`;
}

const person1 = new Person('Garrett Palma', 28, 'male')
console.log('person1: '+person1) 

const.person2 = new Person('Will Canterbury', 26, 'male')
console.log('person2: '+person2)

const.person3 = new Person('Drew Canterbury', 16, 'male')
console.log('person3: '+person3)

//C & D
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function() {
  return `Person's name: ${this.name}, age: ${this.age}, gender: ${this.gender}`;
}

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}


Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;


Student.prototype.toString = function() {
  return `Student's name: ${this.name}, age: ${this.age}, gender: ${this.gender}, cohort: ${this.cohort}`;
}

const student1 = new Student('Garrett Palma', 28, 'male', '2023')
console.log('student1: '+student1) 

const student2 = new Student('Will Canterbury', 26, 'male', '2023')
console.log('student2: '+student2) 


//Excercise 8

class DigitalClock {
  constructor(prefix) {
  this.prefix = prefix;
  }
  display() {
  let date = new Date();
  //create 3 variables in one go using array destructuring
  let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
  date.getSeconds()];
  if (hours < 10) hours = '0' + hours;
  if (mins < 10) mins = '0' + mins;
  if (secs < 10) secs = '0' + secs;
  console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
  clearInterval(this.timer);
  }
  start() {
  this.display();
  this.timer = setInterval(() => this.display(), 1000);
  }
  }
  const myClock = new DigitalClock('my clock:')
  myClock.start()

  //A
  class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix);
      this.precision = precision;
    }
  
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), this.precision);
    }
  }
  
  const myPreciseClock = new PrecisionClock('My precise clock:', 500);
  myPreciseClock.start();

  //B

    class DigitalClock {
      constructor(prefix) {
      this.prefix = prefix;
      }
      display() {
      let date = new Date();
      let [hours, mins, secs] = [date.getHours(), date.getMinutes(), //creating 3 variables
      date.getSeconds()];
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
      }
      stop() {
      clearInterval(this.timer);
      }
      start() {
      this.display();
      this.timer = setInterval(() => this.display(), 1000);
      }
      }
      const myClock = new DigitalClock('my clock:')
      myClock.start()
  