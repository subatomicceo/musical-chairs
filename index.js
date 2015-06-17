/**
 *  Defaults
 */
'use strict'; // helps keep our code on the same page :)
var chairCount = 100, // set default chair count
    chairs = []; // create empty array of chairs

/**
 * Take a second to imagine that you are in a room with 100 chairs arranged in a circle.
 * These chairs are numbered sequentially from One to One Hundred.
 * @return {Array} chairs
 */
var populateChairs = function() {
    for (var i = 1; i <= chairCount; i++) {
        chairs.push(i);
    }
}

/**
 * At some point in time, the person in chair #1 will be told to leave the room.
 * The person in chair #2 will be skipped, and the person in chair #3 will be told to leave.
 * Next to go is person in chair #6. In other words, 1 person will be skipped initially, and then 2, 3, 4.. and so on.
 * This pattern of skipping will keep going around the circle until there is only one person remaining.. the survivor.
 * Note that the chair is removed when the person leaves the room.
 * @return {Integer} the winning cair number
 */
var calculateWinner = function() {
    populateChairs(); // make sure to populate array of chairs first

    var i = 0; // define an iterator to retain the current index
    var skip = 0; // defin an iterator to retain the index of chair to skip

    //loop through chairs if at least 2 chairs exists
    while (chairs.length > 1) {
        
        chairs.splice(i, 1); //remove item from array by current index
        skip += 1; // add 1 to iterator each time to increase skip amount (1 person will be skipped initially, and then 2, 3, 4.. and so on.)
        i += skip; //set iterator to skip + current index
        i %= chairs.length; //if iterator > remaining chairs set iterator to i / chairs.length
    }
    // return winner
    return chairs[0];
};


//Begin Execution and append answer to DOM
$('#winner').html(calculateWinner());