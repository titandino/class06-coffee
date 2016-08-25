var locations = [];
locations.push(new CoffeeShop('Pike Place Market', 14, 35, 1.2, 0.34));
locations.push(new CoffeeShop('Capitol Hill', 12, 28, 3.2, 0.03));
locations.push(new CoffeeShop('Seattle Public Library', 9, 45, 2.6, 0.02));
locations.push(new CoffeeShop('South Lake Union', 5, 18, 1.3, 0.04));
locations.push(new CoffeeShop('Sea-Tac Airport', 28, 44, 1.1, 0.41));

function CoffeeShop(location, minCust, maxCust, avgCups, avgLbs) {
  this.locName = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCups = avgCups;
  this.avgLbs = avgLbs;
  this.beanTotal = 0;
  this.totalEmployeeHours = 0;
}

CoffeeShop.prototype.generateCustomers = function() {
  this.customersHourly = [];
  for (var i = 0;i < 15;i++) {
    this.customersHourly[i] = randInt(this.minCust, this.maxCust);
  }
};

CoffeeShop.prototype.projectCupsPH = function() {
  this.cupsHourly = [];
  for (var i = 0;i < 15;i++) {
    this.cupsHourly[i] = this.customersHourly[i] * this.avgCups;
  }
};

CoffeeShop.prototype.projectToGoPH = function() {
  this.togoHourly = [];
  for (var i = 0;i < 15;i++) {
    this.togoHourly[i] = Math.round(this.customersHourly[i] * this.avgLbs);
    this.beanTotal += this.togoHourly[i];
  }
};

CoffeeShop.prototype.projectBeansForCupsPH = function() {
  this.beansPerCupHourly = [];
  for (var i = 0;i < 15;i++) {
    this.beansPerCupHourly[i] = this.cupsHourly[i] / 16;
    this.beanTotal += this.beansPerCupHourly[i];
  }
};

CoffeeShop.prototype.projectEmployeesPH = function() {
  this.employeesHourly = [];
  for (var i = 0;i < 15;i++) {
    this.employeesHourly[i] = Math.ceil((this.customersHourly[i]) / 30);
    this.totalEmployeeHours += this.employeesHourly[i];
  }
};

CoffeeShop.prototype.projectAll = function() {
  this.generateCustomers();
  this.projectCupsPH();
  this.projectToGoPH();
  this.projectBeansForCupsPH();
  this.projectEmployeesPH();
};

CoffeeShop.prototype.displaySalesData = function() {
  if (!this.customersHourly)
    this.projectAll();
  var table = document.getElementById('sales-table');
  var shopRow = document.createElement('tr');
  appendNewElement(shopRow, 'td', this.locName);
  appendNewElement(shopRow, 'td', round(this.beanTotal, 10));
  for (var i = 0;i < 15;i++) {
    appendNewElement(shopRow, 'td', round((this.beansPerCupHourly[i] + this.togoHourly[i]), 10));
  }
  table.appendChild(shopRow);
};

CoffeeShop.prototype.displayEmployeesData = function() {
  if (!this.customersHourly)
    this.projectAll();
  var table = document.getElementById('employees-table');
  var shopRow = document.createElement('tr');
  appendNewElement(shopRow, 'td', this.locName);
  appendNewElement(shopRow, 'td', this.totalEmployeeHours);
  for (var i = 0;i < 15;i++) {
    appendNewElement(shopRow, 'td', this.employeesHourly[i]);
  }
  table.appendChild(shopRow);
};

function main() {
  createShopTable('sales-table');
  createShopTable('employees-table');

  for (var i = 0;i < locations.length;i++) {
    locations[i].displaySalesData();
    locations[i].displayEmployeesData();
  }
  calculateTotals('sales-table');
  calculateTotals('employees-table');
}

function calculateTotals(tableName) {
  var table = document.getElementById(tableName);
  var totals = Array.apply(null, Array(table.rows[0].cells.length)).map(Number.prototype.valueOf, 0);

  for (var r = 1;r < table.rows.length;r++) {
    for(var c = 1;c < table.rows[r].cells.length;c++) {
      totals[c] += parseFloat(table.rows[r].cells[c].textContent);
    }
  }

  var totalsRow = document.createElement('tr');
  appendNewElement(totalsRow, 'td', 'Total');
  appendNewElement(totalsRow, 'td', round(totals[1], 10));
  for (var i = 2;i < table.rows[0].cells.length;i++) {
    appendNewElement(totalsRow, 'td', round(totals[i], 10));
  }
  table.appendChild(totalsRow);
}

function createShopTable(tableName) {
  var table = document.getElementById(tableName);
  var header = document.createElement('tr');
  clearChildren(table);
  appendNewElement(header, 'th', 'Location');
  appendNewElement(header, 'th', 'Total');
  for (var i = 0;i < 15;i++) {
    appendNewElement(header, 'th', hourToTime(i));
  }
  table.appendChild(header);
}

function addLocation(event) {
  event.preventDefault();
  var form = event.target;
  console.log(form.minCust.value); //it is indeed a number type due to the input type in the HTML that I set
  locations.push(new CoffeeShop(form.location.value, parseFloat(form.minCust.value), parseFloat(form.maxCust.value), parseFloat(form.avgCups.value), parseFloat(form.avgLbs.value)));
  main();
}

function clearChildren(node) {
  while(node.firstChild)
    node.removeChild(node.firstChild);
}

function appendNewElement(parent, elementType, text) {
  var ele = document.createElement(elementType);
  ele.textContent = text;
  parent.appendChild(ele);
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function round(number, dec) {
  return Math.round(number * dec) / dec;
}

function hourToTime(hour) {
  var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return hours[hour] + ':00' + (hour > 5 ? 'pm' : 'am');
}

main();

window.onload = function() {
  var form = document.getElementById('location-form');
  form.addEventListener('submit', addLocation);
};
