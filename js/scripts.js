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
function Trip(city, state, country, date, highlight, notes) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.date = date;
  this.highlights = highlight;
  this.notes = notes;
}

Trip.prototype.tripOverview = function () {
  return this.city + ", " + this.state + " " + this.date;
};

Trip.prototype.findHighlight = function () {
  highlight = this.highlights[title];
  return highlight;
};

function Highlight(title, notes) {
  this.title = title;
  this.notes = notes;
}

//UI Logic

$(document).ready(function () {
  let list = new ListOfTrips();
  $("form#form1").submit(function (event) {
    event.preventDefault();
    const city = $("input#city").val();
    const state = $("input#state").val();
    const country = $("input#country").val();
    const date = $("input#date").val();
    const highlightTitle = $("input#title").val();
    const highlightNotes = $("input#highlight-notes").val();
    const notes = $("input#notes").val();
    let newTrip = new Trip(
      city,
      state,
      country,
      date,
      highlightTitle,
      highlightNotes,
      notes
    );
    list.addTrip(newTrip);
    console.log(list.trips);
  });
});
