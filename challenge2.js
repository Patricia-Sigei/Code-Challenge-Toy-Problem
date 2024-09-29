// Function to calculate demerit points based on speed
function speedDetector(speed){
     //Speed limit in km/hr.  
    const speedLimit = 70;   
    //Demerit points for every 5km/hr over the speed limit.
    const kmPerDemeritPoint = 5;    
    // checks if the speed is within the speed limit (70km/hr or less)
    if (speed <= speedLimit){
    // output when the speed is within the limit
        console.log('Ok')
    //If the speed is greater than the speed limit, calculate the demerit points. 
    }else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    // If the demerit points are 12 or more, suspend the license
        if (demeritPoints > 12){
            return "license suspended"
    // if the points are less than 12, print the number of points
        } else {
            console.log(`Points: ${demeritPoints}`)
        }
    }
    }
// prompts user to input speed.
let speed = prompt("Enter the speed of the vehicle in km/hr:");
// converts the input (speed) to number
speed = Number(speed)
// Calls the function to check speed and get result
let result = speedDetector(speed);
if (result) {
    console.log(result); 
}
