'use strict'

//Constructor function to create new Topshop instances
var TopShop = function (loc, avgMin, avgMax, avgDonutPerCust){
    this.loc              = loc; //location
    this.avgMin          = avgMin; //avg min customers per hour
    this.avgMax          = avgMax; //avg max customers per hour
    this.avgDonutPerCust = avgDonutPerCust;  //avg donuts per customer
    this.hourlyDonuts    = [];
    this.totalDailyDonuts    = 0;
};

//method: populates object array
    TopShop.prototype.getRandomCust = function() {
    for(var i = 0; i < 11; i++) {
        this.hourlyDonuts.push((Math.floor(Math.random() * (this.avgMax - this.avgMin + 1)) + this.avgMin) * this.avgDonutPerCust);
    }
    console.log(this.hourlyDonuts);
};

//Assigns DOM elements
    TopShop.prototype.renderToDOM = function(){
    var table = document.getElementById('donut-table'); //table
    var tr    = document.createElement('tr'); //table row
    this.getRandomCust();

    // Append name to the table
    tr.id        = this.loc;
    tr.innerHTML = this.loc;
    table.appendChild(tr);

    //Append shop hours to the table
    for(var i = 0; i < this.hourlyDonuts.length; i++) {
        var td = document.createElement('td');
            td.innerHTML = this.hourlyDonuts[i];
            tr.appendChild(td);
        this.totalDailyDonuts += this.hourlyDonuts[i];
    }

    //Append total to the table
    var td = document.createElement('td');
        td.innerHTML = this.totalDailyDonuts;
        tr.appendChild(td);
}

var downtown = new TopShop('Downtown', 8, 43, 4.50).renderToDOM();
var caphill = new TopShop('Capitol Hill', 4, 37, 2).renderToDOM();
var slu = new TopShop('SLU', 9, 23, 6.25).renderToDOM();
var wedgewood = new TopShop('Wedgewood', 2, 28,1.25).renderToDOM();
var ballard = new TopShop('Ballard', 8, 58, 3.75).renderToDOM();