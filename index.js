console.log("working.....")

const studentPrototype = {
    calcAge(){
        console.log(2022 -this.bYear);
    },
    initialise(fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
}

const name1 = Object.create(studentPrototype);
console.log(name1);
name1.initialise("vishnu","priya",1999);
console.log(name1);
name1.calcAge();

console.log(name1.__proto__);//studentprototype
console.log(name1.__proto__.__proto__);//obj
console.log(name1.__proto__.__proto__.__proto__);//null

const personPrototype = Object.create(studentPrototype);
console.log(personPrototype);
personPrototype.initialiseone = function(fname, lname, bYear, course){
    studentPrototype.initialise.call(this,fname,lname,bYear)
    this.course = course;
}
personPrototype.introduce = function(){
    console.log(`My name is ${this.fname} ${this.lname} and my course is${this.course}`);
}

const name2 = Object.create(personPrototype);
console.log(name2);
name2.initialiseone("durga","devi",1999,"ECE");
console.log(name2);
name2.calcAge();
name2.introduce();

console.log(name2.__proto__);//personprototype
console.log(name2.__proto__.__proto__);//studentprototype
console.log(name2.__proto__.__proto__.__proto__);//object
console.log(name2.__proto__.__proto__.__proto__.__proto__);//null

//closures - closure is not something that we create manually or explicitly it happens automatically in certain situation which we need to recognize.
//closure makes a function remember all the variable that existed at the function birthplace initially.
//any function always has access to variable environment of the execution context in which the function was created.

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`the passenger count is ${passengerCount}`)
    };
};

const bookie = ticketBooking()
bookie();
bookie();
bookie();
bookie();

