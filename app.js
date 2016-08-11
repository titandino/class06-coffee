var locations = [];

locations.push({
  locName: 'Pike Place Market',
  minCust: 14,
  maxCust: 35,
  avgCups: 1.2,
  avgLbs: 0.34,
  generateCustomers: function() {
    this.customersHourly = [];
    this.totalCustomers = 0;
    for (var i = 0;i < 15;i++) {
      this.customersHourly[i] = randInt(this.minCust, this.maxCust);
      this.totalCustomers += this.customersHourly[i];
    }
  },
  projectCupsPH: function() {
    this.cupsHourly = [];
    this.totalCups = 0;
    for (var i = 0;i < 15;i++) {
      this.cupsHourly[i] = this.customersHourly[i] * this.avgCups;
      this.totalCups += this.cupsHourly[i];
    }
  },
  projectToGoPH: function() {
    this.togoHourly = [];
    this.totalToGo = 0;
    for (var i = 0;i < 15;i++) {
      this.togoHourly[i] = Math.round(this.customersHourly[i] * this.avgLbs);
      this.totalToGo += this.togoHourly[i];
    }
  },
  projectBeansForCupsPH: function() {
    this.beansPerCupHourly = [];
    this.beanTotal = 0;
    for (var i = 0;i < 15;i++) {
      this.beansPerCupHourly[i] = this.cupsHourly[i] / 16;
      this.beanTotal += this.beansPerCupHourly[i] + this.togoHourly[i];
    }
  },
  projectEmployeesPH: function() {
    this.employeesHourly = [];
    for (var i = 0;i < 15;i++) {
      this.employeesHourly[i] = Math.ceil((this.customersHourly[i] * 2) / 60);
    }
  },
  projectAll: function() {
    this.generateCustomers();
    this.projectCupsPH();
    this.projectToGoPH();
    this.projectBeansForCupsPH();
    this.projectEmployeesPH();
  }
});

locations.push({
  locName: 'Capitol Hill',
  minCust: 12,
  maxCust: 28,
  avgCups: 3.2,
  avgLbs: 0.03,
  generateCustomers: function() {
    this.customersHourly = [];
    this.totalCustomers = 0;
    for (var i = 0;i < 15;i++) {
      this.customersHourly[i] = randInt(this.minCust, this.maxCust);
      this.totalCustomers += this.customersHourly[i];
    }
  },
  projectCupsPH: function() {
    this.cupsHourly = [];
    this.totalCups = 0;
    for (var i = 0;i < 15;i++) {
      this.cupsHourly[i] = this.customersHourly[i] * this.avgCups;
      this.totalCups += this.cupsHourly[i];
    }
  },
  projectToGoPH: function() {
    this.togoHourly = [];
    this.totalToGo = 0;
    for (var i = 0;i < 15;i++) {
      this.togoHourly[i] = Math.round(this.customersHourly[i] * this.avgLbs);
      this.totalToGo += this.togoHourly[i];
    }
  },
  projectBeansForCupsPH: function() {
    this.beansPerCupHourly = [];
    this.beanTotal = 0;
    for (var i = 0;i < 15;i++) {
      this.beansPerCupHourly[i] = this.cupsHourly[i] / 16;
      this.beanTotal += this.beansPerCupHourly[i] + this.togoHourly[i];
    }
  },
  projectEmployeesPH: function() {
    this.employeesHourly = [];
    for (var i = 0;i < 15;i++) {
      this.employeesHourly[i] = Math.ceil((this.customersHourly[i] * 2) / 60);
    }
  },
  projectAll: function() {
    this.generateCustomers();
    this.projectCupsPH();
    this.projectToGoPH();
    this.projectBeansForCupsPH();
    this.projectEmployeesPH();
  }
});

locations.push({
  locName: 'Seattle Public Library',
  minCust: 9,
  maxCust: 45,
  avgCups: 2.6,
  avgLbs: 0.02,
  generateCustomers: function() {
    this.customersHourly = [];
    this.totalCustomers = 0;
    for (var i = 0;i < 15;i++) {
      this.customersHourly[i] = randInt(this.minCust, this.maxCust);
      this.totalCustomers += this.customersHourly[i];
    }
  },
  projectCupsPH: function() {
    this.cupsHourly = [];
    this.totalCups = 0;
    for (var i = 0;i < 15;i++) {
      this.cupsHourly[i] = this.customersHourly[i] * this.avgCups;
      this.totalCups += this.cupsHourly[i];
    }
  },
  projectToGoPH: function() {
    this.togoHourly = [];
    this.totalToGo = 0;
    for (var i = 0;i < 15;i++) {
      this.togoHourly[i] = Math.round(this.customersHourly[i] * this.avgLbs);
      this.totalToGo += this.togoHourly[i];
    }
  },
  projectBeansForCupsPH: function() {
    this.beansPerCupHourly = [];
    this.beanTotal = 0;
    for (var i = 0;i < 15;i++) {
      this.beansPerCupHourly[i] = this.cupsHourly[i] / 16;
      this.beanTotal += this.beansPerCupHourly[i] + this.togoHourly[i];
    }
  },
  projectEmployeesPH: function() {
    this.employeesHourly = [];
    for (var i = 0;i < 15;i++) {
      this.employeesHourly[i] = Math.ceil((this.customersHourly[i] * 2) / 60);
    }
  },
  projectAll: function() {
    this.generateCustomers();
    this.projectCupsPH();
    this.projectToGoPH();
    this.projectBeansForCupsPH();
    this.projectEmployeesPH();
  }
});

locations.push({
  locName: 'South Lake Union',
  minCust: 5,
  maxCust: 18,
  avgCups: 1.3,
  avgLbs: 0.04,
  generateCustomers: function() {
    this.customersHourly = [];
    this.totalCustomers = 0;
    for (var i = 0;i < 15;i++) {
      this.customersHourly[i] = randInt(this.minCust, this.maxCust);
      this.totalCustomers += this.customersHourly[i];
    }
  },
  projectCupsPH: function() {
    this.cupsHourly = [];
    this.totalCups = 0;
    for (var i = 0;i < 15;i++) {
      this.cupsHourly[i] = this.customersHourly[i] * this.avgCups;
      this.totalCups += this.cupsHourly[i];
    }
  },
  projectToGoPH: function() {
    this.togoHourly = [];
    this.totalToGo = 0;
    for (var i = 0;i < 15;i++) {
      this.togoHourly[i] = Math.round(this.customersHourly[i] * this.avgLbs);
      this.totalToGo += this.togoHourly[i];
    }
  },
  projectBeansForCupsPH: function() {
    this.beansPerCupHourly = [];
    this.beanTotal = 0;
    for (var i = 0;i < 15;i++) {
      this.beansPerCupHourly[i] = this.cupsHourly[i] / 16;
      this.beanTotal += this.beansPerCupHourly[i] + this.togoHourly[i];
    }
  },
  projectEmployeesPH: function() {
    this.employeesHourly = [];
    for (var i = 0;i < 15;i++) {
      this.employeesHourly[i] = Math.ceil((this.customersHourly[i] * 2) / 60);
    }
  },
  projectAll: function() {
    this.generateCustomers();
    this.projectCupsPH();
    this.projectToGoPH();
    this.projectBeansForCupsPH();
    this.projectEmployeesPH();
  }
});

locations.push({
  locName: 'Sea-Tac Airport',
  minCust: 28,
  maxCust: 44,
  avgCups: 1.1,
  avgLbs: 0.41,
  generateCustomers: function() {
    this.customersHourly = [];
    this.totalCustomers = 0;
    for (var i = 0;i < 15;i++) {
      this.customersHourly[i] = randInt(this.minCust, this.maxCust);
      this.totalCustomers += this.customersHourly[i];
    }
  },
  projectCupsPH: function() {
    this.cupsHourly = [];
    this.totalCups = 0;
    for (var i = 0;i < 15;i++) {
      this.cupsHourly[i] = this.customersHourly[i] * this.avgCups;
      this.totalCups += this.cupsHourly[i];
    }
  },
  projectToGoPH: function() {
    this.togoHourly = [];
    this.totalToGo = 0;
    for (var i = 0;i < 15;i++) {
      this.togoHourly[i] = Math.round(this.customersHourly[i] * this.avgLbs);
      this.totalToGo += this.togoHourly[i];
    }
  },
  projectBeansForCupsPH: function() {
    this.beansPerCupHourly = [];
    this.beanTotal = 0;
    for (var i = 0;i < 15;i++) {
      this.beansPerCupHourly[i] = this.cupsHourly[i] / 16;
      this.beanTotal += this.beansPerCupHourly[i] + this.togoHourly[i];
    }
  },
  projectEmployeesPH: function() {
    this.employeesHourly = [];
    for (var i = 0;i < 15;i++) {
      this.employeesHourly[i] = Math.ceil((this.customersHourly[i] * 2) / 60);
    }
  },
  projectAll: function() {
    this.generateCustomers();
    this.projectCupsPH();
    this.projectToGoPH();
    this.projectBeansForCupsPH();
    this.projectEmployeesPH();
  }
});

function appendDisplayList(location) {
  var list = document.createElement('ul');
  location.textContent = location.locName;
  location.projectAll();
  for(var i = 0;i < location.customersHourly.length;i++) {
    var item = document.createElement('li');
    item.textContent = hourToTime(i) + ': ' + round(location.beansPerCupHourly[i] + location.togoHourly[i], 10) + ' lbs [' + location.customersHourly[i] + ' customers, ' +
    round(location.cupsHourly[i], 10) + ' cups (' + round(location.beansPerCupHourly[i], 10) + ' lbs), ' + location.togoHourly[i] + ' lbs to-go]';
    list.appendChild(item);
  };
  var custTotal = document.createElement('li');
  custTotal.textContent = 'Total customers at ' + location.locName + ': ' + location.totalCustomers;
  list.appendChild(custTotal);
  var cupsSold = document.createElement('li');
  cupsSold.textContent = 'Total cups sold at ' + location.locName + ': ' + Math.round(location.totalCups);
  list.appendChild(cupsSold);
  var togoTotal = document.createElement('li');
  togoTotal.textContent = 'Total to-go pound packages sold at ' + location.locName + ': ' + location.totalToGo;
  list.appendChild(togoTotal);
  var totalBeans = document.createElement('li');
  totalBeans.textContent = 'Total pounds of beans needed at ' + location.locName + ': ' + round(location.beanTotal, 10);
  list.appendChild(totalBeans);
  document.getElementById('res-display').appendChild(list);
};

for (var i = 0;i < locations.length;i++) {
  appendDisplayList(locations[i]);
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
