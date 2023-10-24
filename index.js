/* Your Code Here */

function createEmployeeRecord (employeeInformationArray){
    var employeeInformationObj = {
    firstName : employeeInformationArray [0],
    familyName : employeeInformationArray [1],
    title : employeeInformationArray[2],
    payPerHour : employeeInformationArray [3],
    timeInEvents: [],
    timeOutEvents :[],
  } 
  return employeeInformationObj 
  }
  
  
  function createEmployeeRecords(ArrayOfArraysOfEmployees) {
     
      let nestedObjOfEmployees =[]
      
      for ( const employeeArray of ArrayOfArraysOfEmployees){
  
      let employeeObj = createEmployeeRecord(employeeArray);
      nestedObjOfEmployees.push(employeeObj)
     }
  
     return nestedObjOfEmployees
  }


   function createTimeInEvent(dateStamp) {
    const dateArray = dateStamp.split(" ");
    const timeInEvent = {
      type: "TimeIn",
      hour: parseInt(dateArray[1]),
      date: dateArray[0],
    };
  
    this.timeInEvents.push(timeInEvent);
  
    return this;
  }
  


   function createTimeOutEvent(dateStamp) {
    const dateArray = dateStamp.split(" ");
    const timeOutEvent = {
      type: "TimeOut",
      hour: parseInt(dateArray[1]),
      date: dateArray[0],
    };
  
    this.timeOutEvents.push(timeOutEvent);
    
    return this;
  }


 


   function hoursWorkedOnDate(date) {
    let timeIn, timeOut;
  
    for (const event of this.timeInEvents) {
      if (event.date === date) {
        timeIn = event.hour;
      }
    }
  
    for (const element of this.timeOutEvents) {
      if (element.date === date) {
        timeOut = element.hour;
      }
    }
  
    const hoursWorked = (timeOut - timeIn) / 100;
    
    return hoursWorked;
  }
  
   function wagesEarnedOnDate(date){
  
      const payOwed = hoursWorkedOnDate.call(this,date) * this.payPerHour
      return payOwed
  
  
   }
  
  
   function calculatePayroll (ArrayOfEmployeeRecords){
  
      let payrollTotal = 0
  
      for ( const employee of ArrayOfEmployeeRecords){
  
          payrollTotal += allWagesFor.call(employee) 
  
  
      }
  
      return payrollTotal 
  
   }

   function findEmployeeByFirstName(ArrayOfEmployeeRecords, firstName){
    return ArrayOfEmployeeRecords.find( function (employeeInformationObj){
        if (firstName === employeeInformationObj.firstName) {
            return employeeInformationObj
        }



    })
   }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

