// let person = {
//     gender : "male",
//     age: 23,
//     name : "haseeb",
//     qualification : "fsc",
//     contact_no : '23234554'
    

// }
// console.log(person)
// let student ={
//     Name : "M.Haseeb",
//     Roll_No : 25,
//     Semester : 3,
//     Gpa : 3.9

// }
// console.log(student)

//operation in object
//acces properties
// -one by one
// - loop through whole object 
//update properties
//delete properties
//add properties

        //accessing object properties
// console.log(person.gender)
// console.log(person.qualification)
// console.log(person.name)
// console.log(student.Roll_No)

                    //update properties

// person.contact_no= "0234354"
// person.age = 67

            //delete properties
//delete person.age

                // add properties

// person.martial_stutus = " married"
// person.age = 23
// person.nationality = "pakistan"

//looping and object properties
//for in loop

// for(key in person){
//     if (key!= "qualification"){
//     console.log(`${key} :${person[key]}`)
// }
// }
// let patient1 = {p_id : 1,ward:"general",doctor:"Dr ali",disease: "flu",age :50}
// let patient2 = {p_id : 111,ward:"general",doctor:"Dr ali",disease: "sugar",age :40}
// let patient3 = {p_id : 3,ward:"general",doctor:"Dr ali",disease: "bp",age :60}
// let patient4 = {p_id : 66,ward:"general",doctor:"Dr ali",disease: "cancer",age :70}
// let patient5 = {p_id : 6,ward:"general",doctor:"Dr ali",disease: "hcv",age :90}
// let patient6 = {p_id : 12,ward:"general",doctor:"Dr ali",disease: "flu",age :50}
// let patient7 = {p_id : 12,ward:"general",doctor:"Dr ali",disease: "flu",age :50}
// let patient8 = {p_id : 17,ward:"general",doctor:"Dr ali",disease: "flu",age :50}
// let patient9 = {p_id : 15,ward:"general",doctor:"Dr ali",disease: "flu",age :50}
// let patient10 = {p_id : 15,ward:"general",doctor:"Dr ali",disease: "flu",age :50}


// let patients =[patient1,patient2,patient3,patient4,patient5,patient6,patient7,patient8,patient9]

// for(let a=0; a<=patients.length;a++)
// {
//     for ( key in patients[a])
//     {
//         if (key == "disease")
//         {
//             if (patients[a][key]=='flu')
//             {
//                 console.log(patients[a]['p_id'])
//             }
//         }
//     }

// }
let patient1 = {p_id : 1,ward:"general",doctor:"Dr ali",disease: "flu",age :50}
let patient2 = {p_id : 111,ward:"general",doctor:"Dr fazan",disease: "sugar",age :40}
let patient3 = {p_id : 3,ward:"general",doctor:"Dr fasial",disease: "bp",age :60}
let patient4 = {p_id : 66,ward:"general",doctor:"Dr ali",disease: "cancer",age :70}
let patient5 = {p_id : 6,ward:"general",doctor:"Dr haseeb",disease: "hcv",age :90}
let patient6 = {p_id : 12,ward:"general",doctor:"Dr mujeeb",disease: "flu",age :50}
let patient7 = {p_id : 12,ward:"general",doctor:"Dr muneeb",disease: "cancer",age :50}
let patient8 = {p_id : 17,ward:"general",doctor:"Dr haider",disease: "flu",age :50}
let patient9 = {p_id : 15,ward:"general",doctor:"Dr ali",disease: "flu",age :50}
let patient10 = {p_id : 15,ward:"general",doctor:"Dr ali",disease: "flu",age :50}
let patients =[patient1,patient2,patient3,patient4,patient5,patient6,patient7,patient8,patient9]
for (let a=0;a<=patients.length;a++)
{
        for(key in patients[a])
        {
            if(key in patients[a])
            {
                if(patients[a][key]=='cancer')
                {
                    alert(patients[a]['doctor'])
                }
            }

        }
}
let result = {
    html : [1,3,4,5],
    exam_date : new Date ("12/12/2023"),
    p :patient1
}


