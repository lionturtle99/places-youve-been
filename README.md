1. A constructor for the list for places I've been
   A second cosntructor for the actually places I've been

List of places I've been prototypes:
Give each place a ID
add places
delete a place
find place by ID
find place by location or date (stretch goal)

The places I've been constructor
city
state
country
date
highlights
notes

places i've been prototypes:
display places details (userInterface logic)

--- Describe ListOfPlaces ---

Test: it should create an empty object for our places I've been and current ID for keeping track of the ID's
Code: let new ListOfPLaces(..., ...)
Expected Output:
ListOfPlaces {
places {},
currentID = 0
}

Test: It should add one the the currnetID value
Code: assignID()
Expected Output: currentID = 1

Test: It should add a new locartion to the list of places and assign an ID value
Code: ListOfPlaces.addLocation(location);
Expected Output: location.id[1];

Test: It should delete a place from our list of places.
Code: deleteLocation(id);
Expected Output: id = undefined

Test: It should find a place when user enters ID.
Code: findlocation(id);
Expected Output: id = location

--- Describe Trip ---

Test: IT should instraciate a new location
Code: let hawaii = new Location("honolulu", "Hawaii", "usa", "highlights", "notes", "date")
Expected Output: Location("honolulu", "Hawaii", "usa", "highlights", "notes", "date")
