var locations = [];
locations.push({ locName: 'Pike Place Market', minCust: 14, maxCust: 35, avgCups: 1.2, avgLbs: 0.34 });
locations.push({ locName: 'Capitol Hill', minCust: 12, maxCust: 28, avgCups: 3.2, avgLbs: 0.03 });
locations.push({ locName: 'Seattle Public Library', minCust: 9, maxCust: 45, avgCups: 2.6, avgLbs: 0.02 });
locations.push({ locName: 'South Lake Union', minCust: 5, maxCust: 18, avgCups: 1.3, avgLbs: 0.04 });
locations.push({ locName: 'Sea-Tac Airport', minCust: 28, maxCust: 44, avgCups: 1.1, avgLbs: 0.41 });

var generateCustomers = function() {
  this.customerAmounts = [];
  for (var i = 0;i < 16;i++) {
    this.customerAmounts[i] = randInt(this.minCust, this.maxCust);
  }
};

var projectCupsPH = function() {
  this.cupsHourly = [];
  for (var i = 0;i < 16;i++) {
    this.cupsHourly[i] = this.customerAmounts[i] * this.avgCups;
  }
};

var projectPoundsPH = function() {
  this.poundsHourly = [];
  for (var i = 0;i < 16;i++) {
    this.poundsHourly[i] = this.customerAmounts[i] * this.avgLbs;
  }
};

var projectBeansPH = function() {
  this.beansHourly = [];
  for (var i = 0;i < 16;i++) {
    this.beansHourly[i] = this.cupsHourly[i] / 16;
  }
};

var projectEmployeesPH = function() {
  this.employeesHourly = [];
  for (var i = 0;i < 16;i++) {
    this.employeesHourly[i] = Math.ceil((this.customerAmounts[i] * 2) / 60);
  }
};

var projectAll = function() {
  this.generateCustomers();
  this.projectCupsPH();
  this.projectPoundsPH();
  this.projectBeansPH();
  this.projectEmployeesPH();
};

var appendDisplayList = function() {
  var list = document.createElement('ul');
  this.projectAll();
  for(var i = 0;i < this.customerAmounts.length;i++) {
    var item = document.createElement('li');
    item.textContent = hourToTime(i) + ': ' + (Math.round((this.beansHourly[i] + this.poundsHourly[i]) * 10) / 10);
    list.appendChild(item);
  };
  document.getElementById('res-display').appendChild(list);
};

for (var i = 0;i < locations.length;i++) {
  locations[i].generateCustomers = generateCustomers;
  locations[i].projectCupsPH = projectCupsPH;
  locations[i].projectPoundsPH = projectPoundsPH;
  locations[i].projectBeansPH = projectBeansPH;
  locations[i].projectEmployeesPH = projectEmployeesPH;
  locations[i].projectAll = projectAll;
  locations[i].appendDisplayList = appendDisplayList;

  locations[i].appendDisplayList();
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function hourToTime(hour) {
  var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return hours[hour] + ':00' + (hour > 6 ? 'pm' : 'am');
}
