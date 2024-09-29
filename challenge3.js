// Function to calculate the payee based on basic salary
function calculatePayee(basicSalary) {
  if (basicSalary < 24000) {
      return basicSalary * 0.01;
  } else if (basicSalary < 32333) {
      return basicSalary * 0.25;
  } else {
      return basicSalary * 0.3;
  }
}

// Function to calculate NHIF deduction based on gross salary
function calculateNhif(grossSalary) {
  let nhif; 
  if (grossSalary <= 5999) {
      nhif = 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
      nhif = 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
      nhif = 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
      nhif = 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
      nhif = 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
      nhif = 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
      nhif = 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
      nhif = 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
      nhif = 950;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
      nhif = 1000;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
      nhif = 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
      nhif = 1200;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
      nhif = 1300;
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
      nhif = 1400;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
      nhif = 1500;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
      nhif = 1600;
  } else if (grossSalary >= 100000) {
      nhif = 1700;
  }

  // Output the nhif value to the console
  console.log("nhif: " + nhif);
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
  console.log("NHIF: " + nhif);
  console.log("NSSF: " + nssf);
  console.log("Net Salary: " + netSalary);

  return netSalary; 
}

// Call the function with sample data
calculateNetSalary(30000, 5000);
