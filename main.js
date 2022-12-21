
// Ex.1 

function evenOrOdd(number){
    if (number%2 === 0){
        return true;
    } else{
        return false;
    }
}

console.log(evenOrOdd(1));
console.log(evenOrOdd(3));
console.log(evenOrOdd(30));

// Ex.2

function greaterNum(a,b,c){
    let greatestNum = 0;
    if (a >= b){
        greatestNum = a;
    }
    else{
        greatestNum = b;
    }
    if (greatestNum >= c){
        greatestNum = greatestNum;
    }
    else{
        greatestNum = c;
    }
    return greatestNum
}

console.log(greaterNum(230,9,10));

// Ex.3

function helloWorld(languageCode){
    if (languageCode === "he"){
        return "שלום עולם!"

    }
    else if (languageCode === "es"){
        return "Hola Mundo!"
    }
    else if (languageCode === "de"){
        return "Hallo Welt!"
    }
    else{
        return "hello world!"
    }
}
console.log(helloWorld());
console.log(helloWorld("de"));
console.log(helloWorld("es"));
console.log(helloWorld("he"));

// EX.4 (version 1)

function assignGrade(score){
    let grade = ""
    if (score >= 90 && score <= 100){
        grade = 'A';
    }
    else if (score >= 80 && score <=89){
        grade = 'B';
    }
    else if (score >= 70 && score <=79){
        grade = 'C';
    }
    else if (score >= 60 && score <=69){
        grade = 'D';
    }
    else if (score <= 59){
        grade = 'F';
    }
    return grade;
}

console.log(`Your grade is: ${assignGrade(93)}`);

// EX.4 (version 2)

function assignGradeVer2(score){
    let grade = ""
    if (score >= 90){
        return 'A';
    }
    else if (score >= 80){
        return 'B';
    }
    else if (score >= 70){
        return 'C';
    }
    else if (score >= 60){
        return 'D';
    }
    else{
        return 'F';

    }
}

console.log(`(version 2) Your grade is: ${assignGradeVer2(93)}`);
console.log(`(version 2) Your grade is: ${assignGradeVer2(73)}`);
console.log(`(version 2) Your grade is: ${assignGradeVer2(33)}`);

// Ex. 5

function pluralize(noun, number){
    if (number > 1 || number ===0){
        noun += 's';
    }
    let result = number + ' ' + noun;
    return result;
}

console.log(pluralize('cat', 0));
console.log(pluralize('dog', 5));

// Ex. 7

function writeName(){
    let name = prompt('Please enter your name: ');
    if (name.length != 0){
        document.write(`hello ${name}, welcome aboard!`);
    }
    else{
        document.write(`hello friend, welcome aboard!`);
    }
}

writeName();

// Ex. 8

function describeNumber(number){
    console.log(number);
    if (number > 0 && number %2 == 0){
        console.log('number positive and even');
    }
    else if (number > 0 && number %2 != 0){
        console.log('number positive and odd');
    }
    else if (number < 0 && number %2 == 0){
        console.log('number negative and even');
    }
    else if (number < 0 && number %2 != 0){
        console.log('number negative and odd');
    }
    else{
        console.log('the number is zero');
    }
}

describeNumber(2);
describeNumber(0);
describeNumber(45835);
describeNumber(-20);

// Ex 10

function calculator(num1, num2, operand){
    let result = 0;
    if (operand == "+"){
        result = num1+num2;
        console.log(result);
    }
    else if (operand == "-"){
        result = num1-num2;
        console.log(result);
    }
    else if(operand == "/"){
        if (num2 == 0){
            console.log('Cannot divide by zero.')
        }else{
            result = num1/num2;
            console.log(result);
        }
    }
    else if (operand == "%"){
        result = num1%num2;
        console.log(result);
    }
    else if (operand == "*"){
        result = num1*num2;
        console.log(result);
    }
    else{
        console.log('invalid operator.')
    }
}

calculator(2, 3, "^");
calculator(2, 3, "+");
calculator(2, 3, "-");
calculator(2, 3, "/");
calculator(2, 0, "/");

// Ex 11

function findLeapYear(year){
    if (year % 4 == 0){
        if (year % 100 == 0){
            if (year%400 == 0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

console.log(`year 2000 is: ${findLeapYear(2000)}`);
console.log(`Year 1952 is: ${findLeapYear(1952)}`);
console.log(`Year 1953 is: ${findLeapYear(1953)}`);
console.log(`Year 1954 is: ${findLeapYear(1954)}`);
console.log(`Year 2024 is: ${findLeapYear(2024)}`);
console.log(`Year 2860 is: ${findLeapYear(2860)}`);

// Ex. 12

function getMax(num1, num2, num3){
    let maxNum = num1;

    // checking max between num1 and num2 and assign result to "maxNum" variable.

    if (num1 >= num2){
        maxNum = num1;
    }
    else{
        maxNum = num2;
    }

    // Checking max between the current maxNum (the max number between num1 and num2) and num3 to find overall maximum number.
    
    if (maxNum >= num3){
        maxNum = maxNum;
    }
    else{
        maxNum = num3;
    }
    return maxNum;
    
}

console.log(getMax(1,2,3));


// Ex. 13

function sortNumbers(num1, num2, num3){
    let first;
    let second;
    let third;

    if (num1 >= num2){
        first = num1;
        second = num2;
    }
    else{
        first = num2;
        second = num1;
        // console.log([first, second]);
    }
    if (num3 <= second){
        third = num3;
    }
    else{
        third = second;
        // console.log(third);
        if (first <=num3){
            second = first;
            first = num3;
            
        }
        else{
            second = num3;
        }
    }

    return [first, second, third];
}

console.log(sortNumbers(0, 23, -3));

// Ex. 14

let spaceSuitson = true;
let shuttleCabinReady = true;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let engineIndicatorLight = 'red blinking';

let crewstatus = (spaceSuitson && shuttleCabinReady)? "Crew ready!":"Crew not ready.";

console.log(crewstatus);

if (computerStatusCode == 200){
    console.log('Please stand by.');
}
else if(computerStatusCode==400){
    console.log('success!');
}
else{
    console.log('ALERT');
}

// Ex. 15

function colorMeaning(color){
    switch (color){
        case 'red':
            console.log("Red is the color of danger");
            break;
        case 'orange':
            console.log("Orange is the color of caution");
            break;
        case 'yellow':
            console.log("Yellow is the color of sunshine");
            break;
        case 'green':
            console.log("Green is the color of nature");
            break;
        case 'blue':
            console.log("Blue is the color of the sky");
            break;
        case 'purple':
            console.log("Purple is the color of royalty");
            break;
        default:
            console.log('Invalid color')
    }
}

colorMeaning('red');
colorMeaning('blue');
colorMeaning('gf');

