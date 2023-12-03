//function decleration
// function greetuser(){

//     console.log("welcom Mr.Haseeb")
// }
        //calling a function

// greetuser()
// greetuser()
// greetuser()

        //function with parameter : parametrized function
// function greetuser(username){

//     console.log(`"welcom Mr."${username}`)
// }
// greetuser('Haseeb')
// greetuser('')
                //function then function name parameter and curly braces "syntax"

// function konBaraHy(a,b){
//    if(a>b)
//    {
//     console.log("A bara hy")
//    }
//    else
//    {
//         if(b>a)
//         {
//             console.log("b bara hy")
//         }
//         else
//         {
//             console.log("koi bara nahi hy")
//         }

//    }
// }
                //function call
// konBaraHy(20,130)
// konBaraHy(20,20)
// konBaraHy(22,25)
            //BMi calculate
// function bmiCalculate(weight,height){
  
//   bmi = weight/(height**2)
//   if(bmi>=40)
// {
//     return "obese"
// }
// else if (bmi>=25 && bmi<40)
//  {
//     return "over weight"
// }
// else if(bmi>=18.5 && bmi<25)
// {
//     return "normal"
// }
// else
// {
//     return "under weight"
// }
// }
// let weightkg = (parseFloat(prompt("please enter your weight in kg")))
// let heightM = (parseFloat(prompt("enter height in ft")))/3.3

// console.log(`Dear sir you are ${bmiCalculate(weightkg,heightM)}`)
// console.log(bmi)

//write a function that calculate tax over salary
//100k>15%      salary*.15
//70%>10%               .10
//50k>5%                .05
//30k>2%                .02
//else 1%               .01
//if some one pays tax more than  2k say he is good citizen

function calculateTax(salary) {
    let taxRate;

    if (salary > 100000) {
        taxRate = 0.15;
    } else if (salary > 70000) {
        taxRate = 0.10;
    } else if (salary > 50000) {
        taxRate = 0.05;
    } else if (salary > 30000) {
        taxRate = 0.02;
    } else {
        taxRate = 0.01;
    }

    let tax = salary * taxRate;

    if (tax > 2000) {
        console.log("You are a good citizen!");
    }

    return tax;
}

// Example usage:
let salary = parseFloat(prompt("Enter your salary: "));
let resultingTax = calculateTax(salary);
console.log(`Your tax is: $${resultingTax}`);

