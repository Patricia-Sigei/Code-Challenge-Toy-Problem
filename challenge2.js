// Function to calculate demerit points based on speed
function speedDetector(speed){
    //Speed limit in km/hr.  
   const speedLimit = 70;   
   //Demerit points for every 5km/hr over the speed limit.
   const kmPerDemeritPoint = 5;    
   // checks if the speed is within the speed limit (70km/hr or less)
   if (speed <= speedLimit){
       // output when the speed is within the limit
       return 'Ok';  // Return 'Ok' instead of console.log
   } else {
       // Calculate demerit points for speeding
       const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
       
       // If the demerit points are 12 or more, suspend the license
       if (demeritPoints >= 12){
           return "License suspended";  
       } else {
           // If the points are less than 12, return the number of points
           return `Points: ${demeritPoints}`;  
       }
   }
}

// Prompt user to input speed.
let speed = prompt("Enter the speed of the vehicle in km/hr:");
// Convert the input (speed) to number
speed = Number(speed);

// Call the function to check speed and get result
let result = speedDetector(speed);

// Logs the result
console.log(result);
