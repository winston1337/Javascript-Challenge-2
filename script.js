//Challenge 1

function min(num1, num2){
    if(num1 < num2) return num1;
    else
    return num2;
}
console.log(min(15,12));
console.log(min(12,15));

//Challenge 2

//const students = ["Tom Massey", 17, "John Carter", 18, "Elliot James", 19];
const students = [
    {
        firstName: "Tom", lastName: "Massey", age: 17
    },
    {
        firstName: "John", lastName: "Carter", age: 18
    },
    {
        firstName: "Elliot", lastName: "James", age: 19
    }
]


let student = students[1];
console.log(`Student ${student.firstName} ${student.lastName} is ${student.age} years old`);


//Challange 3

const month = (n)=>{
    if(n < 1 || n > 12){
        return "wrong value";
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[n-1]
}
console.log(month(30))



const Tom = {
    height: 9,
    mass: 8,
}
const Jerry = {
    height: 10,
    mass: 45,
}
function calculateBMI(who){
    return who.mass / Math.pow(who.height,2)
}
const tomsBMI = calculateBMI(Tom); 
console.log(`Tom's BMI is ${tomsBMI}`);
const jerrysBMI = calculateBMI(Jerry);
console.log(`Jerry's BMI is ${jerrysBMI}`);

if (tomsBMI > jerrysBMI){
    console.log("Tom's BMI is greater");
} else if(jerrysBMI > tomsBMI){
    console.log("Jerry's BMI is greater");
}else {
    console.log("They have the same BMI");
}