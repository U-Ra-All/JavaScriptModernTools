var incomesAndExpenses = [
  { value: 2500, description: 'Salary 💰', familyMember: 'YouRa' },
  { value: -1200, description: 'Buying iPhone 📱', familyMember: 'YouRa' },
  {
    value: 50,
    description: 'Sold the old refrigerator 🧊',
    familyMember: 'Ira',
  },
  { value: -40, description: 'Buying groceries 🛒', familyMember: 'Ira' },
  { value: 500, description: 'Freelance income 💰', familyMember: 'YouRa' },
  { value: 1200, description: 'Salary 💰', familyMember: 'Ira' },
  { value: -50, description: 'Buying a handbag 👜', familyMember: 'Ira' },
  { value: -105, description: 'Buying a dress 👗', familyMember: 'Ira' },
  { value: -1300, description: 'Buying Macbook 💻', familyMember: 'YouRa' },
];

var limits = {
  youra: 1500,
  ira: 1100,
};

var add = function (value, description, familyMember) {
  if (!familyMember) familyMember = 'ira';
  familyMember = familyMember.toLowerCase();

  var lim;
  if (limits[familyMember]) {
    lim = limits[familyMember];
  } else {
    lim = 0;
  }

  if (value <= lim) {
    incomesAndExpenses.push({
      value: -value,
      description: description,
      familyMember: familyMember,
    });
  }
};
add(20, 'Sushi 🍱');
add(10, 'Going to cinema 🍿', 'YouRa');
add(200, 'Something', 'Ira');
console.log(incomesAndExpenses);

var check = function () {
  for (var el of incomesAndExpenses) {
    var lim;
    if (limits[el.familyMember]) {
      lim = limits[el.familyMember];
    } else {
      lim = 0;
    }

    if (el.value < -lim) {
      el.flag = 'limit';
    }
  }
};
check();

console.log(incomesAndExpenses);

var veryBigExpenses = function (limit) {
  var output = '';
  for (var el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + ' / ;';
    }
  }
  output = output.slice(0, -2);
  console.log(output);
};
