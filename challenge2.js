// Prompt the user to enter car speed
let speed = 70;

// Define the Speed limit and Demerit points threshold
let speedLimit = 70;
let demeritPointThreshold = 12;

//calculate the demerit points based on the car's speed
let demeritPoints = 0; 

// Output is "Ok" when the speed is within the speed limit 
if (speed < speedLimit){
console.log("Ok");
    }
    //Calculates the demerit points based on speed. 
    //For every 5 km/h over the speed limit, the driver gets 1 demerit point
    else{
    demeritPoints = Math.floor((speed - speedLimit) / 5);
    // If the demerit points exceed the defined threshold, the output is "License Suspended"
    if (demeritPoints > demeritPointThreshold){
    console.log("License Suspended");
    } 
    // If the demerit points are within the demerit point threshold, the output is demerit points. 
    else{
    console.log("Points: " + demeritPoints);
    }
}


