// get from the prompt the number
// display on console the multiplication by 5

function mult(num,num1){
    // let num=prompt("Enter a number:");
    console.log(num*num1);
}

// mult(10,3);
// mult(8,2);
// mult(5,4);

function taxCalculation(){
    var product=prompt("Enter the product's name:");//laptop
    var price=prompt("Enter the price:");//100
    var qty = prompt("Enter the quantity:");//2

    const taxes = 1.08;

    var subtotal=price*qty;//200
    var total= subtotal*taxes;

    console.log(product);
    console.log(subtotal);
    console.log(total);//216
}

// r2: create the flow diagram.
// the user will input 2 numbers
// the function add up them 
//display the result on the console
// r1: trigger the event using a button


//Enter student information (name, grade101, grade102) and calculate and display the GPA

function getGPA(){
    // get the values
    var name=prompt("Enter the name:");
    var grade101 = Number(prompt("Enter the 101 grade:"));
    var grade102= Number(prompt("Enter the 102 grade:"));

    var gpa=(grade101+grade102)/2; // complete it!
    
    document.getElementById("studentList").innerHTML+=`
    <p> Name: ${name}</p>
    <p> GPA: ${gpa} </p>`;//template string
}