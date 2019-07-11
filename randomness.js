//////////////////////
// GLOBAL VARIABLES //
//////////////////////
function Letter (length)  {
var result = '';   
var alphabet = "abcdefghijklmnopqrstuvwxyz" ;
var alphabetLength = alphabet.length;
for (var i = 0; i < length; i++){
    result += alphabet.charAt(Math.floor(Math.random() * alphabetLength));
}
return result;
}
console.log(Letter(1));

function Food (length) {
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
console.log(Food(1))
}
function Names (length) {
var result = '';    
var students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
var studentsLength= student.length;

function randomnumber(){
    var numbers = "1,2,3,4,5,6,,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21";
    console.log(Math.random()*22)
}
randomnumber()    


/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////