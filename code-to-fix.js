'use strict';

const incomesAndExpenses = Object.freeze([
  { value: 2500, description: 'Salary 💰', familyMember: 'youra' },
  { value: -1200, description: 'Buying iPhone 📱', familyMember: 'youra' },
  {
    value: 50,
    description: 'Sold the old refrigerator 🧊',
    familyMember: 'ira',
  },
  { value: -40, description: 'Buying groceries 🛒', familyMember: 'ira' },
  { value: 500, description: 'Freelance income 💰', familyMember: 'youra' },
  { value: 1200, description: 'Salary 💰', familyMember: 'ira' },
  { value: -50, description: 'Buying a handbag 👜', familyMember: 'ira' },
  { value: -105, description: 'Buying a dress 👗', familyMember: 'ira' },
  { value: -2300, description: 'Buying Macbook 💻', familyMember: 'youra' },
]);

const expenseLimits = Object.freeze({
  youra: 1500,
  ira: 1100,
});

const getExpenseLimit = (familyMember, limits) => limits?.[familyMember] ?? 0;

// Чистая функция
const addExpense = function (
  state,
  limits,
  value,
  description,
  familyMember = 'ira'
) {
  const lowerCaseFamilyMember = familyMember.toLowerCase();

  // const expenseLimit = expenseLimits[familyMember]
  //   ? expenseLimits[familyMember]
  //   : 0;

  return value <= getExpenseLimit(lowerCaseFamilyMember, limits)
    ? [
        ...state,
        {
          value: -value,
          description: description,
          familyMember: lowerCaseFamilyMember,
        },
      ]
    : state;
};
const incomesAndExpenses1 = addExpense(
  incomesAndExpenses,
  expenseLimits,
  20,
  'Sushi 🍱'
);
console.log(incomesAndExpenses1);

const incomesAndExpenses2 = addExpense(
  incomesAndExpenses1,
  expenseLimits,
  10,
  'Going to cinema 🍿',
  'YouRa'
);
console.log(incomesAndExpenses2);

const incomesAndExpenses3 = addExpense(
  incomesAndExpenses2,
  expenseLimits,
  200,
  'Something',
  'John'
);
console.log(incomesAndExpenses3);

// const checkExpenses = function (state, limits) {
//   return state.map(item =>
//     item.value < -getExpenseLimit(item.familyMember, limits)
//       ? { ...item, flag: 'limit' }
//       : item
//   );

//   // for (const item of state)
//   //   if (item.value < -getExpenseLimit(item.familyMember, limits)) item.flag = 'limit';
// };

const checkExpenses = (state, limits) =>
  state.map(item =>
    item.value < -getExpenseLimit(item.familyMember, limits)
      ? { ...item, flag: 'limit' }
      : item
  );

const incomesAndExpenses4 = checkExpenses(incomesAndExpenses3, expenseLimits);
console.log(incomesAndExpenses4);

const printVeryBigExpenses = function (state, limit) {
  // const output = state
  //   .filter(item => item.value <= -limit)
  //   .map(item => item.description.slice(-2))
  //   .join(' / ');
  const output = state
    .filter(item => item.value <= -limit)
    .reduce(
      (outputString, currentItem) =>
        `${outputString} / ${currentItem.description.slice(-2)}`,
      ''
    )
    .substring(2);
  console.log(output);

  // let output = '';
  // for (const item of incomesAndExpenses)
  //   output += item.value <= -limit ? `${item.description.slice(-2)} / ` : '';

  // output = output.slice(0, -2);
  // console.log(output);
};

printVeryBigExpenses(incomesAndExpenses4, 100);
