
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
  hoursOfOps: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm'],
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

var storename = [];

this.minCustPerHour =
  this.maxCustPerHour =
  this.avgCookiesPerCust =
  this.custPerHour =
  this.cookiesPerHour =

//create a row:
var trEL = document.createElement('tr');
var thEL = document.createElement('th');
thEL.textContent = this.name
trEL.appendChild(thEl);
// now use a for loop for cookies per hour:



//Anchor to the html doc:
Turrle.prototype.render = function () {
  var mainEL = documemt.getElementById('main-content');
  var tblnEL = documemt.getElementById('table');
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










///////
// var name = 'Michaelangelo'; // Globally scoped

// function sayHello(name) { // Globally scoped
//   return `Hello, ${name}, how are you today?`;
// }

// var turtleMichealangelo = {  // Unordered collections of key: value pairs
//   // property (key): value,
//   name: 'Michaelangelo',
//   shell: true,
//   age: 15,
//   color: 'orange',
//   type: 'box',
//   size: 62.3,
//   ninja: true,
//   mutant: true,
//   sayHello: function () {
//     return `Hello, my name is ${this.name}, and I am ${this.size} .`;
//   },
// };

// var turtleDonatello = {
//   // // property: value,
// name: 'Donatello',
// shell: true,
// age: 15,
// color: 'purple',
// type: 'box',
// size: 62.3,
// ninja: true,
// mutant: true,
// sayHello: function () {
//   return `Hello, my name is Donatello.`;
// },
// render: function () {
  // create an element
  // provide content for that element
  // append the element to the page (in a specific place)
  // var container = document.createElement('bananas');  // This will create <bananas></bananas> BUT DOES NOT WORK
//   var container = document.createElement('section');
//   var nameEl = document.createElement('h3');
//   var messageEl = document.createElement('p');

//   nameEl.textContent = this.name;
//   messageEl.textContent = `I am a ninja and I am ${this.color}.`;

//   container.appendChild(nameEl);
//   container.appendChild(messageEl);
//   console.log('container', container);

//   var mainEl = document.getElementById('main-content');
//   mainEl.appendChild(container);
// }
// };

// var nums = [1, 2, 3, 4];  // arrays should generally have like data types


// // call the render function and display the elements
// turtleDonatello.render();