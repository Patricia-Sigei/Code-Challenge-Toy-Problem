// Function to calculate marks and get the resulting grade
function getGrade(marks){
// If marks are greater than 79, the corresponding grade is "A"
if (marks > 79){
return "A";
// if marks are between 79 and 60 (including both), the resulting grade is "B"
} else if (marks >= 60){
    return "B";
// if marks are between 59 and 49 (including both), the resulting grade is "C"
} else if (marks >= 49){
    return "C";
// if marks are between 48 and 40 (including both), the resulting grade is "D"
} else if (marks >= 40){
    return "D";
// if marks are less than 40, the corresponding grade is "E"
} else {
    return "E"
}
}

// prompt the user to input numbers
let marks = prompt("Enter the student's marks (0-100):");
// convert the input (marks)to numbers
marks = Number(marks);
// checks if the marks are between 0-100
if (marks >= 0 && marks <= 100) {
// Gets the grade based on marks
    let grade = getGrade(marks);
// would generate the grade. For example, "The grade is A" if the input is greater that 79
    console.log("The grade is: " + grade);
// Notifies user of invalid input. 
} else {
  console.log("Please enter a valid number");
}
// Call the function to execute
getGrade();