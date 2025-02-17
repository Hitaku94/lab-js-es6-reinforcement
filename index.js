// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************
let users = require('./data.js')

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    // Your code goes here ...
    userFirstNames.push(user.firstName)
   
  }
  console.log(userFirstNames)
};

getFirstNames(users);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  // Your code goes here ...
  const userFullName = [];
  for (let user of arr) {
    // Your code goes here ...
    userFullName.push(`${user.firstName} ${user.lastName}`)
   
  }
  return userFullName
  
};

console.log(getFullNames(users));
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  // Your code goes here ...
  let usersCreditDetails = [];
  for (let {firstName, lastName, balance} of arr) {
    let usersDetails = {
      firstName,
      lastName,
      balance
    };
    usersCreditDetails.push(usersDetails)
  }
console.log(usersCreditDetails)
};


getUsersCreditDetails(users);
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
  let maleGender = [];
  let femaleGender = [];

  // Your code goes here ...
  let femaleUsers = users.filter((elem) => {
    return elem.gender == 'female'
  })
  for (let user of femaleUsers) {
    femaleGender.push(`${user.firstName} ${user.lastName}`)
  }

  let maleUsers = users.filter((elem) => {
    return elem.gender == 'male'
  })
  for (let user of maleUsers) {
    maleGender.push(`${user.firstName} ${user.lastName}`)
  }

  let answer = {
    femaleGender, maleGender
  }

  return answer
};


console.log(genderView(users));
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(users);

const genderCount = data => {
  // Your code goes here ...
  console.log(`Female: ${data.femaleGender.length}`);
  console.log(`Male: ${data.maleGender.length}`)
};

console.log(genderCount(data));
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  // Your code goes here ...
  for (let i = 0 ; i < users.length ; i++) {
  if (Number(users[i].balance) >= 20000) {
      console.log(`Dear ${users[i].firstName}, since your balance is ${users[i].balance}, you are eligible to apply for this awesome credit card`)
    }
  }
};

//"(/\d+/g)"

promo20(users);
// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
  for (let i = 0 ; i < users.length ; i++) {
    if (!users[i].isActive) {
      users[i].isActive = true
    }
  }
  console.log(users)
};

addActive(users);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
