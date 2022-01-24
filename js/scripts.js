// Business Logic for ListOfTrips()
function ListOfTrips() {
  this.trips = {};
  this.currentID = 0;
}

ListOfTrips.prototype.assignID = function () {
  this.currentID += 1;
  return this.currentID;
};

ListOfTrips.prototype.addTrip = function (trip) {
  trip.id = this.assignID();
  this.trips[trip.id] = trip;
};

ListOfTrips.prototype.deleteTrip = function (id) {
  if (this.trips[id] !== undefined) {
    delete this.trip[id];
    return true;
  }
  return false;
};

ListOfTrips.prototype.FindTrip = function (id) {
  if (this.trips[id] === undefined) {
    return false;
  }
  return this.trips[id];
};

// Business Logic for Trips()
function Trip(city, state, country, date) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.date = date;
  this.highlights = {};
  this.notes = [];
}

Trip.prototype.tripOverview = function () {
  return this.city + ", " + this.state + " " + this.date;
};

Trip.prototype.addHighlight = function (highlight) {
  highlight = this.highlight[title];
};

function Highlight(title, notes) {
  this.title = title;
  this.notes = [];
}

let bibi = new Highlight("Bibi-togo", ("the best bibibap in town", "must go"));
let hawaii = new Trip(
  "honolulu",
  "hawaii",
  "usa",
  "12/24/21",
  addHighlight(bibi),
  ("note1", "note2")
);
let list = new ListOfTrips();
list.addTrip(hawaii);
list.trips;
