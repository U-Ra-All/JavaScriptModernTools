const incomesAndExpenses = [
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
];

const expenseLimits = {
  youra: 1500,
  ira: 1100,
};

const getExpenseLimit = familyMember => expenseLimits?.[familyMember] ?? 0;

const addExpense = function (value, description, familyMember = 'ira') {
  familyMember = familyMember.toLowerCase();

  // const expenseLimit = expenseLimits[familyMember]
  //   ? expenseLimits[familyMember]
  //   : 0;

  if (value <= getExpenseLimit(familyMember)) {
    incomesAndExpenses.push({
      value: -value,
      description: description,
      familyMember: familyMember,
    });
  }
};
addExpense(20, 'Sushi 🍱');
addExpense(10, 'Going to cinema 🍿', 'YouRa');
addExpense(200, 'Something', 'John');
console.log(incomesAndExpenses);

const checkExpenses = function () {
  for (const item of incomesAndExpenses)
    if (item.value < -getExpenseLimit(item.familyMember)) item.flag = 'limit';
};
checkExpenses();

console.log(incomesAndExpenses);

const printVeryBigExpenses = function (limit) {
  let output = '';
  for (const item of incomesAndExpenses)
    output += item.value <= -limit ? `${item.description.slice(-2)} / ` : '';

  output = output.slice(0, -2);
  console.log(output);
};

printVeryBigExpenses(100);
