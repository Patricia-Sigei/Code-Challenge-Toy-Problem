// Function to calculate the payee based on basic salary
function calculatePayee(basicSalary) {
  if (basicSalary < 24000) {
    return Math.floor(basicSalary * 0.01);
  } else if (basicSalary < 32333) {
    return Math.floor(basicSalary * 0.25);
  } else {
    return Math.floor(basicSalary * 0.3);
  }
}

// Function to calculate NHIF deduction based on gross salary
function calculateNhif(grossSalary) {
  let nhif; 
  if (grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary <= 7999) {
    nhif = 300;
  } else if (grossSalary <= 11999) {
    nhif = 400;
  } else if (grossSalary <= 14999) {
    nhif = 500;
  } else if (grossSalary <= 19999) {
    nhif = 600;
  } else if (grossSalary <= 24999) {
    nhif = 750;
  } else if (grossSalary <= 29999) {
    nhif = 850;
  } else if (grossSalary <= 34999) {
    nhif = 900;
  } else if (grossSalary <= 39999) {
    nhif = 950;
  } else if (grossSalary <= 44999) {
    nhif = 1000;
  } else if (grossSalary <= 49999) {
    nhif = 1100;
  } else if (grossSalary <= 59999) {
    nhif = 1200;
  } else if (grossSalary <= 69999) {
    nhif = 1300;
  } else if (grossSalary <= 79999) {
    nhif = 1400;
  } else if (grossSalary <= 89999) {
    nhif = 1500;
  } else if (grossSalary <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }

  console.log("NHIF Deduction: " + nhif);
  return nhif;
}

// Function to calculate NSSF deduction based on gross salary
function calculateNssf(grossSalary) {
  return Math.floor(grossSalary * 0.06);
}

// Function to calculate net salary based on inputs
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const payee = calculatePayee(basicSalary);
  const nhif = calculateNhif(grossSalary);
  const nssf = calculateNssf(grossSalary);

  const netSalary = grossSalary - (payee + nhif + nssf);

  console.log("Gross Salary: " + grossSalary);
  console.log("Payee: " + payee);
  console.log("NHIF Deduction: " + nhif);
  console.log("NSSF Deduction: " + nssf);
  console.log("Net Salary: " + netSalary);

  return netSalary; 
}

// Call the function with sample data
calculateNetSalary(30000, 5000);
