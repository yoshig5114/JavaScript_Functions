

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (var i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(10);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    var aboveSixteen = (`Congrats ${userName}, you can drive!`);
    var belowSixteen = (`Sorry ${userName}, but you need to wait until you're sixteen`);
    if (age < 16){
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}
checkAge("Josh",15);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

function cartesianPlane(x,y){
    if (x == 0){
        console.log("this point is on the y-axis");      
    } else if(y == 0){
        console.log("this point is on the x-axis");
    } else if(y > 0 && x > 0){
        console.log("this point is in Quadrant 1");
    } else if(y > 0 && x < 0){
        console.log("this point is in Quadrant 2");
    } else if(y < 0 && x < 0){
        console.log("this point is in Quadrant 3");
    } else console.log("this point is in Quadrant 4");
}
cartesianPlane(0,2);
cartesianPlane(1,2);
cartesianPlane(-6,18);

//Exercise 4
console.log("EXERCISE 4:\n==========\n");

function triangleType(side1, side2, side3){
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2 ){
        return console.log("invalid triangle");
    } else if(side1 == side2 && side2 == side3){
        return console.log("equilateral");
    } else if(side1 == side2 || side2 == side3 || side1 == side3){
        return console.log("isosceles");
    }else return console.log("scalene");
}
triangleType(1,2,2);
triangleType(1,1,2);
triangleType(2,2,2);
triangleType(2,3,4);