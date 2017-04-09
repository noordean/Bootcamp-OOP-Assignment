# Bootcamp-OOP-Assignment

This contains a class Employee and its subclass Intern
It can be used to check and update staff records

# Usage
// for an employee
var winner = new Employee("Bolorunduro Timothy","M","Nigerian","4A Ilupeju Lagos");
winner.increaseSalary(20000);
console.log(winner.getSalary());

// for an intern
var nuru = new Intern("Ibrahim Nurudeen","M","Nigerian","4A shomolu Lagos");
nuru.setAddress("Andela tower Ilupeju Lagos");
console.log(nuru.getAddress());
