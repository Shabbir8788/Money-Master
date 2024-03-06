function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = element.value;
  const value = parseFloat(elementValue);
  return value;
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = element.innerText;
  const value = parseFloat(elementValue);
  return value;
}

function setElementInnerText(elementId, calculation) {
  const element = document.getElementById(elementId);
  element.innerText = calculation;
}

function calculateDiscount(originalPrice, discountPercentage) {
  return originalPrice - originalPrice * (discountPercentage / 100);
}

function calculateValue() {
  const income = getElementValueById("income-field");
  const food = getElementValueById("food-field");
  const rent = getElementValueById("rent-field");
  const clothes = getElementValueById("clothes-field");

  const totalExpenses = food + rent + clothes;
  setElementInnerText("total-expense", totalExpenses);

  const totalBalance = income - totalExpenses;
  setElementInnerText("total-balance", totalBalance);
}

function saveAmount() {
  const totalExpenses = getTextElementValueById("total-expense");
  const discountPrice = calculateDiscount(totalExpenses, 20);
  setElementInnerText("saving-amount", discountPrice);

  const remainingBalance = totalExpenses - discountPrice;
  setElementInnerText("remaining-balance", remainingBalance);
}
