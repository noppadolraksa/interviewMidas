//1. npm i
//2.  npx ts-node interviewMidas.ts

//assignment#1
const dummyArray = [
  2, 1, 2, 3, 1, 3, 3, 2, 1, 2, 3, 1, 3, 3, 2, 1, 2, 3, 1, 3, 3, 2, 1, 2, 3, 1,
  3, 3, 2, 1, 2, 3, 1, 3, 3, 6, 2, 1, 2, 3, 1, 3, 3, 2, 1, 2, 3, 1, 3, 3, 2, 1,
  2, 3, 1, 3, 3, 2, 1, 2, 3, 1, 3, 3, 3, 4, 5,
];
type Assignment1Answer = {
  no: number;
  count: number;
};
const countIntegerArray = (arr: number[]): Assignment1Answer => {
  //Record allow me to add new property within object
  let counts: Record<string, number> = {};

  //count for each number => {"1",3,"2",5}
  arr.forEach((integer: number) => {
    counts[integer] = (counts[integer] || 0) + 1;
  });

  //return property of the highest value in counts variable
  const no = Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );

  //transform property string into number
  const answer = { no: +no, count: counts[no] };
  return answer;
};
// countIntegerArray(dummyArray);

//assignment#2
("The lean way to cross the bridge is using sort all of these people. the first person will hold the torch and pick one of the people cross the bridge. then the first person wiil back with the torch and pick the rest people. loop the process until finish.");

//assignment3#
("As your question. I find some solutions. the first is 'Database Locking' when two requests are trying to update / delete at the same time, there will be the concurrent problem. database will locks the data for the first user and allow him to update/delete then unlock the database after the processes are finished");

("The second is Database Transaction.  Tt can prevent you from updating the stock quantity without finishing the transaction. This is for ensure that all the purchase operation happen successfully. ");
//for more detail I visited https://www.sohamkamani.com/nodejs/sql-transactions/

("the flow is when two requests are met. one of them will get lock and other one will be responsed that it run out of stock, transaction will fall and response with rollback 'transaction fail, please try again' ");

//assignment4#
const primeAt = (n: number) => {
  let prime: number[] = [],
    i = 1;
  while (i++ && prime.length < n)
    prime.reduce((a, c) => (i % c) * a, 2) && prime.push(i);
  return prime.length ? prime.pop() : -1;
};
console.time("function");
primeAt(1234); //10061
primeAt(12345); //132241  4seconds :(
console.timeLog("function");

//assignment#5

//s = special, n = nettle, p = poison
(" For the 3th clue, 3rd and 6th bottle is not a poison.");

// ()(n)(s)()()(n)()
("At 4th clue, 2nd and 6th bottle are twins. As the number of each type, twins only matches either nettle or poison wine. which means 3rd bottle is the special one and twin bottles are nettle wine");

// (p)(n)(s)()(p)(n)()
("In the 1st clue, poison wines are on the left of nettle wine. 1st, 5th bottle are poison wine.");

// (p)(n)(s)(p)(p)(n)()
("2nd clue said 1st and 7th are different. Which means 7th bottle is not the poison and 4th is poison.");

// (p)(n)(s)(p)(p)(n)(s)
("The answer is 3rd and 7th bottle");
