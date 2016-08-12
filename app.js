var locations = [];
locations.push(new CoffeeShop('Pike Place Market', 14, 35, 1.2, 0.34));
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
};

CoffeeShop.prototype.generateCustomers = function() {
  this.customersHourly = [];
  this.totalCustomers = 0;
  for (var i = 0;i < 15;i++) {
    this.customersHourly[i] = randInt(this.minCust, this.maxCust);
    this.totalCustomers += this.customersHourly[i];
  }
};

CoffeeShop.prototype.projectCupsPH = function() {
  this.cupsHourly = [];
  this.totalCups = 0;
  for (var i = 0;i < 15;i++) {
    this.cupsHourly[i] = this.customersHourly[i] * this.avgCups;
    this.totalCups += this.cupsHourly[i];
  }
};

CoffeeShop.prototype.projectToGoPH = function() {
  this.togoHourly = [];
  this.totalToGo = 0;
  for (var i = 0;i < 15;i++) {
    this.togoHourly[i] = Math.round(this.customersHourly[i] * this.avgLbs);
    this.totalToGo += this.togoHourly[i];
  }
};

CoffeeShop.prototype.projectBeansForCupsPH = function() {
  this.beansPerCupHourly = [];
  this.beanTotal = 0;
  for (var i = 0;i < 15;i++) {
    this.beansPerCupHourly[i] = this.cupsHourly[i] / 16;
    this.beanTotal += this.beansPerCupHourly[i] + this.togoHourly[i];
  }
};

CoffeeShop.prototype.projectEmployeesPH = function() {
  this.employeesHourly = [];
  for (var i = 0;i < 15;i++) {
    this.employeesHourly[i] = Math.ceil((this.customersHourly[i] * 2) / 60);
  }
};

CoffeeShop.prototype.projectAll = function() {
  this.generateCustomers();
  this.projectCupsPH();
  this.projectToGoPH();
  this.projectBeansForCupsPH();
  this.projectEmployeesPH();
};

CoffeeShop.prototype.appendDisplayList = function() {
  var list = document.createElement('ul');
  list.textContent = this.locName;
  this.projectAll();
  for(var i = 0;i < this.customersHourly.length;i++) {
    addListItem(list, hourToTime(i) + ': ' + round(this.beansPerCupHourly[i] + this.togoHourly[i], 10) + ' lbs [' + this.customersHourly[i] + ' customers, ' +
    round(this.cupsHourly[i], 10) + ' cups (' + round(this.beansPerCupHourly[i], 10) + ' lbs), ' + this.togoHourly[i] + ' lbs to-go]');
  };
  addListItem(list, 'Total customers at ' + this.locName + ': ' + this.totalCustomers);
  addListItem(list, 'Total cups sold at ' + this.locName + ': ' + Math.round(this.totalCups));
  addListItem(list, 'Total to-go pound packages sold at ' + this.locName + ': ' + this.totalToGo);
  addListItem(list, 'Total pounds of beans needed at ' + this.locName + ': ' + round(this.beanTotal, 10));
  document.getElementById('res-display').appendChild(list);
};

function addListItem(list, text) {
  var listItem = document.createElement('li');
  listItem.textContent = text;
  list.appendChild(listItem);
}

for (var i = 0;i < locations.length;i++) {
  locations[i].appendDisplayList();
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function round(number, dec) {
  return Math.round(number * dec) / dec;
};

function hourToTime(hour) {
  var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return hours[hour] + ':00' + (hour > 6 ? 'pm' : 'am');
}
