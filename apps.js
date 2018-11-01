'use strict';
//a variable that's an array of objects
//objects are: location, min hourly customers, max hourly customers, average cookies sold
//random number generator (hour many customers showed ber hour)-function in the object, 
//total cookies sold.
//define an object with a store
var pikeAndFirst = {
  storename: 'first and pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],//generate a random number of customers
  cookiesPerHour: [],
  //each store should have varying hours of operation ==> use a for loop to do this.
  hoursOfOps: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,
  generateRandomCustPerHour: function (min, max) {
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function () {
    //line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      //this.dailyTotal = this.dailyTotal + perHour
    }
    this.dailyTotal = this.dailyTotal + perHour;
  },

  render: function () {
    //line below will generate hourly sales which also generates customers per hour
    this.generateGourlySales();

  },
};
//create an empty container to hold each store information:

for (vari = 0; i < this.hoursOfOps.length; i++) {
  var hourly = document.createElement('li');
  hourly.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]}} cookies`;
}
//step2-DOM: provide content for the element
title.textContent = this.name;
total.textContent = `Total: ${this.dailyTotal}cookies`;

//step3-DOM: append the element to the page (in a specific place)
container.appendChild(total);
console.log('container', container);

//Anchor to the html doc:
var mainEL = documemt.getElementById('main-content');
var tblEL = documemt.getElementById('table');
var theadEL = documemt.getElementById('thead');
var tbodyEL = documemt.getElementById('tbody');
var tfootEL = documemt.getElementById('tfoot');

mainEL.appendChild(tblEL);
tblEL.appendChild(theadEL);
tblEL.appendChild(tbodyEL);
tblEL.appendChild(tfootEL);

tblEL.id = 'storename-table';
theadEL.id = 'tbl-body';
tbodyEL.id = 'tbl-body';

  }
};
