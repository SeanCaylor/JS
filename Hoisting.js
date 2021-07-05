//1
console.log(hello);
var hello = "world";
// var hello
//console.log (hello) // logs undefined
// hello = "world"

//2
var needle = "haystack";
test();
function test() {
    var needle = "magnet";
    console.log(needle);
}
// var needle
// function test(){
//needle = 'magnet';
//console.log(needle)
//}
// needle = 'haystack';
// test(); //logs 'magnet';

//3
var brendan = "super cool";
function print() {
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan);
//var brendan
//function pring(){
//brendan = 'only okay';
//console.log(brendan);
//}
//brendan = 'super cool';
//console.log(brendan); // logs 'super cool'

//4
var food = "chicken";
console.log(food);
eat();
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}
//var food
//function eat(){
//var food
//food = 'half-chicken'
//console.log(food)
//food = 'gone'
//}
//food = 'chicken'
//console.log(food) //logs chicken
//eat() // logs half chicken

//5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
//will immediately crash, since mean is not a function

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//var genre
//function rewind(){
//var genre
//genre = 'rock';
//console.log(genre) //will log rock
//genre = "r&b"
//console.log(genre) // will log r&b
//}
//console.log(genre) // will log undefined
//rewind(); // will run the rewind function
// genre = "disco"
//console.log(genre) // will log disco

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//function learn() {
    //var dojo;
    //dojo = "seattle"; 
    //console.log(dojo); // will log seattle
    //dojo = "burbank";
    //console.log(dojo); // will log burbank
//}
//dojo = "san jose";
//console.log(dojo); // will log undefined
//learn(); // will call the function
//console.log(dojo); // will log undefined

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//function makeDojo(name, students) { ... }
//console.log(makeDojo("Chicago", 65)); //will log {"name": Chicago, "students": 65, "hiring": true}
//console.log(makeDojo("Berkeley", 0)); //will log "closed for now" //crashed the program