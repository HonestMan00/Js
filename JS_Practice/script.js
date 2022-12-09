console.log('connected')

function treuOrFalse(wasThatTre){
    if(wasThatTre){
        return 'Yes, that was true';
    }
    return 'No, that was false';
}


console.log(treuOrFalse(1 === 5));



function cal(num){
    if(num <=10 || num ===12){
       return ( num + 3 - num * 2/7); 
    }
    return 'Number higher than 10, go low.'
}

console.log(cal(13))


// const MyCal = prompt('Enter a value') * 1;

// console.log(MyCal(cal()));


function check(value){
    if(value  > 10){
        return 'Value is greater than 10'
    }
    else if(value == 10){
        return 'value egual 10'
    } else if(value ==30 ){
        return 'btw  30'
    }
    return 'less than 10'
}


const getValue = check(10);
console.log(getValue);



// function checkName(){
//     const list =['Alex', 'Vic', 'Precious', 'Kelvin', 'Emma', 'Mary']
//     if(list === 'Kelvin'){
//         return 'Yeah, found him!'
//     }
//     return list.shift
// }

 const famName=['Dad', 'Mum', 'Children']
function myFam (name){
    if(name== 'Dad'){
        return famName[0]
    } else if(name == 'Mum'){
        return famName[1]
    }
    return famName[2]
}

console.log(myFam());



const items =[['Drink', 3], ['Meat', 6], ['Beverage', 9], ['Milk', 20]]

function getItem(item){
    if(item == 1){
        return items[0]
    } if(item ==2){
        return items[1]
    } if(item ==3){
        return items[2]
    } if(item ==4){
        return items[3]
    }
    return 'Item not Available yet, check later'
}


console.log(getItem())


function myPassword(password){
    if(password.length < 8){
        return 'Weak';
    } else if(password.length >= 8 && password.length <=15){
        return 'Moderate'
    } else if(password.length >15){
        return 'Strong'
    }
    return 'Field is empty'
}


// const myPassword(password) => {
//     password.length < 8 ? return 'weak'
// }


console.log(myPassword("jdnaheis"))

// const myInput = document.querySelector('input');

// myInput.addEventListener('click', (e) =>{
//     e.preventDefault()
//     myInput.innerHTML = myPassword();
// })





// SWITCH CASE IN FUNCTION

function mySwitchValue(val){
    let answer = '';

    switch(val){
        case 1:
            case 2:
                case 3:
                    answer = 'Low'
                    break;

                    case 4:
                        case 5:
                            case 6:
                                answer = 'Mid'
                                break;

                                case 7:
                                    case 8:
                                        case 9:
                                            answer = 'Strong'
                                            break;

                                            default: 'Nothing'
    }
    return answer;
}


console.log(mySwitchValue(7))




function isTrue(x, y){
    return x < y;
}


console.log(isTrue(17, 15))


// function 0n array


const games =["Hole-in-one", "Eagle", "Birdie", "Par", "Bogie", "Double-bogie", "Go-Home"];

function play(par, strokes) {
  if (strokes == 1) {
    return games[0];
  } else if (strokes <= par - 2) {
    return games[1];
  } else if (strokes == par - 1) {
    return games[2];
  } else if (strokes == par) {
    return games[3];
  } else if (strokes == par + 1) {
    return games[4];
  } else if (strokes == par  + 2) {
    return games[5];
  } else if (strokes == par + 3) {
    return games[6];
  }
}


console.log(play(10, 13))


// function switch case

function caseInSwitch(val){
    let answer = " ";
    switch(val){
        case 1:
            answer = "alpha"
            break;
            case 1:
                answer = "beta";
                break;
                case 3:
                    answer = "omega";
                    break;
                    case 4:
                        answer = "zigma"
                        break;
                        case 5:
                            answer = "garma";
                            break;
                            case 6:
                                answer = "pie"
                                break;
                                default:
                                    answer = "Stuff"
    }
    return answer;
}

console.log(caseInSwitch(6))


// condition statement with object

function takeLook(val){

    let result = " "
  let lookup = {
   " name": "Pman",
    "State": "Rivers",
    "single": "yes"
};
  result = lookup[val];
  return result;
}



console.log(takeLook("name"))


// while loop

let myArr = [];

let i = 0;

while(i < 6){
    myArr.push(i)
    i++;
}


console.log(myArr)


// for loop

let arr = [];

for(let i =0; i <6; i++){
    arr.push(i)
}

console.log(arr)


// setup for object checking if a key is in an object


const myCheck = {
    name: "pman",
    loml: "Sunshine and lots more!",
    likes: "Food",
    end: "byeee"
}


function checkObj(checkProb){
    if(myCheck.hasOwnProperty(checkProb)){
        return myCheck[checkProb];
    } else {
        return "Oops! Not found."
    }
}

console.log(checkObj("loml"))