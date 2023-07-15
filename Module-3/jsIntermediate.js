//Exercise 1
function capitalizeFirstLetterOfEachWord(str) {
    return str.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
  
  let str = 'hello world';
  str = capitalizeFirstLetterOfEachWord(str);
  console.log(str); 
  // Hello World


  //Excercise 2 A
function truncate(str, max) {
    if (str.length > max) {
      return str.slice(0, max) + '...';
    } else {
      return str;
    }
  }
 
  console.log(truncate("Hello, World!", 5));
  //Hello...

//Excercise 2 B
function truncate(str, max) {
    return str.length > max ? str.slice(0, max) + '...' : str;
  }

  console.log(truncate("Hello, World!", 5));
  //Hello...

//Excercise 3
const animals = ['Tiger', 'Giraffe'];
console.log(animals); 

// A
animals.push('Elephant', 'Lion');
console.log(animals); 

// B
animals.unshift('Monkey', 'Lemer');
console.log(animals); 

// C
animals.sort();
console.log(animals); 

// D
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
}

replaceMiddleAnimal('Zebra');
console.log(animals); 

// E
function findMatchingAnimals(beginsWith) {
    const matchingAnimals = animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
    return matchingAnimals;
}

console.log(findMatchingAnimals('t')); 
//[ 'Tiger', 'Giraffe' ]
//[ 'Tiger', 'Giraffe', 'Elephant', 'Lion' ]
//[ 'Monkey', 'Lemer', 'Tiger', 'Giraffe', 'Elephant', 'Lion' ]
//[ 'Elephant', 'Giraffe', 'Lemer', 'Lion', 'Monkey', 'Tiger' ]
//[ 'Elephant', 'Giraffe', 'Lemer', 'Zebra', 'Monkey', 'Tiger' ]
//[ 'Tiger' ]

//Excercise 4
function camelCase(cssProp) {
    return cssProp.split('-').map((word, index) => {
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  }
  

  console.log(camelCase('margin-left'));  // marginLeft




  function camelCase1(cssProp) {
    const words = cssProp.split('-');
    let result = words[0];

    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        if (i !== 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        result += word;
    }

    return result;
}
//marginLeft

//Excercise 5 A
// A  This code does not work because the variables are not defined

//Excercise 5 B
// Had to install decimal.js
const Decimal = require('decimal.js');

function currencyAddition(float1, float2) {
  const decimal1 = new Decimal(float1);
  const decimal2 = new Decimal(float2);


  const result = decimal1.plus(decimal2);
  return result.toNumber();
}


const float1 = 0.1;
const float2 = 0.2;
const sum = currencyAddition(float1, float2);
console.log(sum); //0.3

//Excercise 5 C
const Decimal = require('decimal.js');

function currencyOperation(float1, float2, operation) {
  const decimal1 = new Decimal(float1);
  const decimal2 = new Decimal(float2);

  let result;
  switch (operation) {
    case '+':
      result = decimal1.plus(decimal2);
      break;
    case '-':
      result = decimal1.minus(decimal2);
      break;
    case '/':
      result = decimal1.dividedBy(decimal2);
      break;
    case '*':
      result = decimal1.times(decimal2);
      break;
    default:
      throw new Error('Invalid operation');
  }

  return result.toNumber();
}

const float1 = 0.4;
const float2 = 0.3;
const operation = '+';
const result = currencyOperation(float1, float2, operation);
console.log(result); // 0.7

//Excercise 5 D
const Decimal = require('decimal.js');

function currencyOperation(float1, float2, operation, numDecimals) {
  const decimal1 = new Decimal(float1);
  const decimal2 = new Decimal(float2);

  Decimal.set({ precision: numDecimals });

  let result;
  switch (operation) {
    case '+':
      result = decimal1.plus(decimal2);
      break;
    case '-':
      result = decimal1.minus(decimal2);
      break;
    case '/':
      result = decimal1.dividedBy(decimal2);
      break;
    case '*':
      result = decimal1.times(decimal2);
      break;
    default:
      throw new Error('Invalid operation');
  }

  return result.toNumber();
}

const float1 = 0.2;
const float2 = 0.6;
const operation = '+';
const numDecimals = 2;
const result = currencyOperation(float1, float2, operation, numDecimals);
console.log(result); //0.8

//Excercise 6
function unique(duplicatesArray) {
    let uniqueArray = [...new Set(duplicatesArray)];
    return uniqueArray;
  }

let arr = [1, 2, 3, 3, 4, 4, 5];
console.log(unique(arr)); // [ 1, 2, 3, 4, 5 ]

//Excercise 7 A
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    function getBookTitle(bookId) {
        const book = books.find(book => book.id === bookId);
      
        if (book) {
          return book.title;
        } else {
          return null;
        }
      }

const bookID = 3;
const title = getBookTitle(bookID);
console.log(title); // 1984

//Excercise 7 B
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    function getOldBooks() {
        const oldBooks = books.filter(book => book.year < 1950);
        return oldBooks;
      }

      const oldBooks = getOldBooks();
      console.log(oldBooks); 
    //   [
    //     {
    //       id: 1,
    //       title: 'The Great Gatsby',
    //       author: 'F. Scott Fitzgerald',
    //       year: 1925
    //     },
    //     { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    //     {
    //       id: 4,
    //       title: 'Brave New World',
    //       author: 'Aldous Huxley',
    //       year: 1932
    //     }
    //   ]
      

//Excercise 7 C
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    function addGenre() {
        const booksWithGenre = books.map(book => {
          return {
            ...book,
            genre: 'classic'
          };
        });
      
        return booksWithGenre;
      }

      const booksWithGenre = addGenre();
      console.log(booksWithGenre);
    //   [
    //     {
    //       id: 1,
    //       title: 'The Great Gatsby',
    //       author: 'F. Scott Fitzgerald',
    //       year: 1925,
    //       genre: 'classic'
    //     },
    //     {
    //       id: 2,
    //       title: 'To Kill a Mockingbird',
    //       author: 'Harper Lee',
    //       year: 1960,
    //       genre: 'classic'
    //     },
    //     {
    //       id: 3,
    //       title: '1984',
    //       author: 'George Orwell',
    //       year: 1949,
    //       genre: 'classic'
    //     },
    //     {
    //       id: 4,
    //       title: 'Brave New World',
    //       author: 'Aldous Huxley',
    //       year: 1932,
    //       genre: 'classic'
    //     },
    //     {
    //       id: 5,
    //       title: 'The Catcher in the Rye',
    //       author: 'J.D. Salinger',
    //       year: 1951,
    //       genre: 'classic'
    //     }
    //   ]

//Excercise 7 D
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    function getTitles(authorInitial) {
        const titles = books
          .filter(book => book.author.startsWith(authorInitial))
          .map(book => book.title);
      
        return titles;
      }  

    const authorInitial = 'G'; 
    const titles = getTitles(authorInitial);
    console.log(titles); //['1984']

//Excercise 7 E
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    function latestBook() {
        let latestBook = null;
        
        books.forEach(book => {
          if (!latestBook || book.year > latestBook.year) {
            latestBook = book;
          }
        });
      
        return latestBook;
      }

    const book = latestBook();
    console.log(book);
    //  {
    //     id: 2,
    //     title: 'To Kill a Mockingbird',
    //     author: 'Harper Lee',
    //     year: 1960
    //   }

//Excercise 8 A
const phoneBookDEF = new Map() 
phoneBookDEF.set('David', '0477312343')
phoneBookDEF.set('Emma', '0498221117')
phoneBookDEF.set('Frank', '0411221182')

//Excercise 8 B
const phoneBookDEF = new Map([
    ['David', '0477312343'],
    ['Emma', '0498221117'],
    ['Frank', '0411221182']
  ]); 
  
//Excercise 8 C
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

phoneBookABC.set('Caroline', '1234567899');

console.log(phoneBookABC.get('Caroline'));
//1234567899

//Excercise 8 D
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

function printPhoneBook(contacts) {
    for (let [name, number] of contacts) {
      console.log(`Name: ${name}, Phone number: ${number}`);
    }
  }
  
  printPhoneBook(phoneBookABC);
// Name: Annabelle, Phone number: 0412312343
// Name: Barry, Phone number: 0433221117
// Name: Caroline, Phone number: 0455221182

//Excercise 8 E
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map([
    ['David', '0477312343'],
    ['Emma', '0498221117'],
    ['Frank', '0411221182']
  ]);

  const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

  console.log(phoneBook);
//   Map(6) {
//     'Annabelle' => '0412312343',
//     'Barry' => '0433221117',
//     'Caroline' => '0455221182',
//     'David' => '0477312343',
//     'Emma' => '0498221117',
//     'Frank' => '0411221182'
//   }
  
//Excercise 8 F
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map([
    ['David', '0477312343'],
    ['Emma', '0498221117'],
    ['Frank', '0411221182']
  ]);

  const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

  for (let name of phoneBook.keys()) {
    console.log(name);
  }
// Annabelle
// Barry
// Caroline
// David
// Emma
// Frank


//Excercise 9 A
function sumSalary(salaries) {
    let sum = 0;
    for (let key in salaries) {
      sum += salaries[key];
    }
    return sum;
  }
  
  let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
  };
  
  console.log(sumSalary(salaries));
  //233000


  //Excercise 9 B
  function boss(salaries) {
    let max = 0;
    let gigaChad = null;
  
    for (let key in salaries) {
      if (max < salaries[key]) {
        max = salaries[key];
        gigaChad = key;
      }
    }
  
    return gigaChad;
  }
  
  let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
  };
  
  console.log(boss(salaries));
  //Christina


//Excercise 10 
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

//A
console.log(today.getMinutes() + ' minutes have passed today.')

//B
console.log(today.getSeconds() + ' seconds have passed today.')

//C
function calculateAge(birthDate) {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months = (months + 12) % 12;
    }
  
    if (days < 0) {
      months--;
      const now = new Date(today.getFullYear(), today.getMonth(), 0);
      days = now.getDate() - birthDate.getDate() + days;
    }
  
    return {
      years: years,
      months: months,
      days: days
    };
  }
  
  const birthDate = new Date('1994-11-20');
  const age = calculateAge(birthDate);
  
  console.log(`I am ${age.years} years, ${age.months} months, and ${age.days} days old.`);

  //D
  function daysInBetween(date1, date2) {
    const a = new Date(date1);
    const b = new Date(date2);
    
    let timeDifference = Math.abs(a.getTime() - b.getTime());
    let daysDifference = (timeDifference / (1000 * 3600 *24))
    return daysDifference
  }

  console.log(daysInBetween('2023-07-15', '1994-11-20'));
