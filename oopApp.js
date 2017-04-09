/*An oop assingment for the 2nd day in andela's bootcamp.
This file is an Employee class with Intern subclass to
keep track of the staff's records*/ 


//create the Employee class/constructor

function Employee(name,gender,nationality,address){

	//creating the object properties
	this.name = name;
	this.gender = gender;
	this.nationality = nationality;
	this.address = address;

	//this property will be constant for every created object
	this.salary = 50000;
}

//creating an increaseSalary method
Employee.prototype.increaseSalary = function(amount){
	if(typeof amount==="number"){		
		if(amount<=(this.salary/2)){	//this prevents increament of more than 50%
			this.salary += amount;
		}
		else{
			throw new Error("Amount must be less than 50% of the current salary");
		}
	}
	else{
		throw new Error("Amount to add must be a number");
	}
}

//this method gets the current salary
Employee.prototype.getSalary = function(){
	return this.salary;
}

//in case an employee changes address 
Employee.prototype.setAddress = function(newAddress){
	this.address = newAddress;
}

//this method gets the current address
Employee.prototype.getAddress = function(){
	return this.address;
}

/*this method changes a female employee name as a male does not have
any reason for changing name*/
Employee.prototype.changeName = function(newName){
	if(this.gender === "F"){
		this.name = newName;
	}
	else{
		throw new Error("Only females can change name");
	}
}


//Creating an Intern class(for the intern staff) which inherits the Employee class
function Intern(name,gender,nationality,address){
	Employee.call(this,name,gender,nationality,address);	//this makes the Employee's properties available for Intern to use, without repeating ourselves
	this.durationInMonths = 6;		 //Inter now has an additional property called durationInMonths
	this.salary = 20000;		 //this overrides the salary property of the super class 
}

/*this assigns the Employee's prototype to Intern's prototype so that all the methods in Employee will
be available for Intern to use*/
Intern.prototype = Object.create(Employee.prototype);

//method to extend the duration of the intern
Intern.prototype.extendDuration = function(byHowLong){
	if(typeof byHowLong === "number"){
		this.durationInMonths += byHowLong;
	}
	else{
		throw new Error("The argument must be a number");
	}
}	

//this method overrides the one in the superclass because i want to implement it differently
Intern.prototype.increaseSalary = function(amount){
	if(typeof amount==="number"){
		if(amount<=(this.salary/5)){ //this prevents more than 20% increament
			this.salary += amount;
		}
		else{
			throw new Error("Amount must be less than 20% of the current salary");
		}
	}
	else{
		throw new Error("Amount must be a number");
	}
}



