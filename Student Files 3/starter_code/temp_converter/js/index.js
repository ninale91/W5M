 $(document).ready(start);

 function start() {
   $('#submit').click(compareNumbers);
 }

function convertToCelius(){

}

function fehrenheitToCelius(){
  
}

function celiusValue(){
  var rawCelius= $('#celsius').val();
  var floatCelius= parseInt(rawCelius);
  return floatCelius;
}

function fahrenheitValue(){
  var rawFahrenheit= $('#celsius').val();
  var floatFahrenheit= parseInt(rawFahrenheit);
  return floatFahrenheit;
}

//
// function compareNumbers() {
//   var a = $('#a').val();
//   a = parseInt(a);
//
//   var b = $('#b').val();
//   b = parseInt(b);
//
//   if(a < b) {
//     setAsLessThan();
//   } else if (a > b) {
//     setAsMoreThan();
//   } else if (a == b) {
//     setAsEqualTo();
//   } else {
//     alert('something is very wrong');
//   }
// }
//
// //function calculateFValue(Cvalue){
// return(Cvalue)
// }
//
// function setAsLessThan() {
//   $('#comparison').text('<');
// }
//
// function setAsMoreThan() {
//   $('#comparison').text('>');
// }
//
// function setAsEqualTo() {
//   $('#comparison').text('==');
// }
