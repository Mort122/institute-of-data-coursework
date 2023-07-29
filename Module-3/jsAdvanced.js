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

  


  
  
