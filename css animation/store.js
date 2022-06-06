// --------for min value-----
// var array = [111, 212, 114, 110, 147]
// var min = array[0];
// for (var i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//         min = array[i];
//     }
// }
// console.log(min);


//--------for max value-------
// var maxElement = array[0];
// for (var i = 1; i < array.length; i++) {
//     if (maxElement < array[i])
//     {
//         var maxElement = array[i];

//     }
// }
// console.log(maxElement);
function parent(name,lastname,age){
    this.firstname=name;
    this.lastname=lastname;
    this.age=age;
}

const mother= new parent("sima","paudel",24)

console.log(`my mother name is ${mother.firstname} amd her lastname is ${mother.lastname}`);

