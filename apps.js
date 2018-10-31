'use strict';
//a variable that's an array of objects
//objects are: storename, min hourly customers, max hourly customers, average cookies sold
//random number generator (hour many customers showed per hour)-function in the object, 
//total cookies sold.
//define an object with a store

var pikeAndFirst = {
  storename: 'first and pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],//generate a random number of customers
  cookiesPerHour: [],
  //each store should have varying hours of operation ==> use a for loop to do this:
  hoursOfOps: ['6a', '7a', '8a', '9a', '10a', '11a,', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p'],
  dailyTotal: 0,
  generateRandomCustPerHour: function () {
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('custPerHour', this.custPerHour);
  },
  generateHourlySales: function () {
    //line below will populate custPerHour array
    this.generateRandomCustPerHour();

    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      //this.dailyTotal = this.dailyTotal + perHour
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
}
var seaTacAirport = {
  storename: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custPerHour: [],//generate a random number of customers
  cookiesPerHour: [],
  //each store should have varying hours of operation ==> use a for loop to do this:
  hoursOfOps: ['6a', '7a', '8a', '9a', '10a', '11a,', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p'],
  dailyTotal: 0,
  generateRandomCustPerHour: function () {
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('custPerHour', this.custPerHour);
  },
  generateHourlySales: function () {
    //line below will populate custPerHour array
    this.generateRandomCustPerHour();

    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      //this.dailyTotal = this.dailyTotal + perHour
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
}
var seattleCenter = {
  storename: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custPerHour: [],//generate a random number of customers
  cookiesPerHour: [],
  //each store should have varying hours of operation ==> use a for loop to do this:
  hoursOfOps: ['6a', '7a', '8a', '9a', '10a', '11a,', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p'],
  dailyTotal: 0,
  generateRandomCustPerHour: function () {
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('custPerHour', this.custPerHour);
  },
  generateHourlySales: function () {
    //line below will populate custPerHour array
    this.generateRandomCustPerHour();

    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      //this.dailyTotal = this.dailyTotal + perHour
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
}
var capitolHill = {
  storename: 'Capital Hill',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],//generate a random number of customers
  cookiesPerHour: [],
  //each store should have varying hours of operation ==> use a for loop to do this:
  hoursOfOps: ['6a', '7a', '8a', '9a', '10a', '11a,', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p'],
  dailyTotal: 0,
  generateRandomCustPerHour: function () {
    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('custPerHour', this.custPerHour);
  },
  generateHourlySales: function () {
    //line below will populate custPerHour array
    this.generateRandomCustPerHour();

    for (var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      //this.dailyTotal = this.dailyTotal + perHour
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
}
