'use strict';
//a variable that's an array of objects
//objects are: location, min hourly customers, max hourly customers, average cookies sold
//random number generator (hour many customers showed ber hour)-function in the object, 
//total cookies sold.
//define an object with a store
function createTable() { //Anchor to the html doc:
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
  tfootEL.id = 'tbl-body';
  tblEL.className = 'tbl';
}
//each store should have varying hours of operation ==> use a for loop to do this.
var hoursOfOps = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
createTable();
console.log('createTable', createTable);

var stores = [];
console.log('stores', stores);
function Stores(
  Name,
  maxCustomersPerHour,
  minCustomersPerHour,
  averageCookiesSold
) {
  this.Name = Name;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.minCustomersPerHour = minCustomersPerHour;
  this.averageCookiesSold = averageCookiesSold;
  this.totalCookies = 0;
  stores.push(this);
  this.render();
}
console.log(Stores);

Stores.prototype.randNum = function () {
  var ranNum = Math.floor(
    Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) +
    this.minCustomersPerHour
  );
  return Math.floor(ranNum * this.averageCookiesSold);
};

Stores.prototype.render = function () {
  var theadEL = document.getElementById('table-head');
  var tbodyEL = document.getElementById('table-body');
  var tfootEL = document.getElementById('table-foot');

  var bodyrowEL = document.createElement('tr');
  var bodyHead = document.createElement('th');
  bodyHead.textContent = this.Name;
  tbodyEL.appendChild(bodyrowEL);
  bodyrowEL.appendChild(bodyHead);

  for (var i = 0; i < openHours.length; i++) {
    var tdEL = document.createElement('td');
    tdEL.textContent = this.randNum();
    bodyrowEL.appendChild(tdEL);
  }
};

Stores.prototype.render();

new Stores('1st and Pike', 65, 23, 6.3);
new Stores('seaTac', 24, 3, 1.2);
new Stores('Seattle Center', 38, 11, 3.7);
new Stores('Capitol Hill', 38, 20, 2.3);
  //   createTable();
//   console.log('createTable', createTable);


// var storename = [];
// console.log('store name', storename);
// //generate a number for individual objects
// function storename (
//   name,
//   minCustPerHour,
//   maxCustPerHour,
//   avgCookiesPerCust,
// )
// {
// //generate a random number of customers???
//  this.name = name,
//  this.maxCustPerHour=maxCustPerHour;
//  this.avgCookiesPerCust = avgCookiesPerCust;
//  this.totalCookies = 0;
//  storename.push(this);
//  this.render();
// }
// console.log(storename);


//     //line below will populate custPerHour array
//     storename.prototype.randNum=function(){
//       var ranNum = Math.floor (
//           Math.random()*(this.maxCustPerHour - this.minCustPerHour)+ this.minCustPerHour);
//           return Math.floor(ranNum *  this.avgCookiesPerCust);
//       };

//       stores
//       )
//     }
//     this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

//     for (var i = 0; i < this.hoursOfOps.length; i++) {
//       var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
//       this.cookiesPerHour.push(perHour);

//       //this.dailyTotal = this.dailyTotal + perHour
//     }
//     this.dailyTotal = this.dailyTotal + perHour;
//   },

//   render: function () {
//     //line below will generate hourly sales which also generates customers per hour
//     this.generateGourlySales();

//   },
// };
// //create an empty container to hold each store information:

// for (vari = 0; i < this.hoursOfOps.length; i++) {
//   var hourly = document.createElement('li');
//   hourly.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]}} cookies`;
// }
// //step2-DOM: provide content for the element
// title.textContent = this.name;
// total.textContent = `Total: ${this.dailyTotal}cookies`;

// //step3-DOM: append the element to the page (in a specific place)
// container.appendChild(total);
// console.log('container', container);


// };
