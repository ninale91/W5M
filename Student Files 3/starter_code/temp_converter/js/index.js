 $(document).ready(start);

 function start() {
   $('#c-to-f').click(celiusToFehrenheit);
   $('#f-to-c').click(fehrenheitToCelius);
 }



function celiusToFehrenheit(e){
  e.preventDefault();
  celiusValue();
  var trueCeliusValue = celiusValue();
  convertCToF(trueCeliusValue);
  var finalFehrenheit = convertCToF(trueCeliusValue);
  displayFehrenheitResult(finalFehrenheit);
}

function celiusValue(){
  var rawCelius = $('#celsius').val();
  var floatCelius = parseInt(rawCelius);
  return floatCelius;
  convertCToF(floatCelius);
}

function convertCToF(trueCeliusValue){
  fehrenheitValue = trueCeliusValue * (9/5) + 32;
  console.log(fehrenheitValue);
  return fehrenheitValue;
}

function displayFehrenheitResult(finalFehrenheit){
  $('#fahrenheit').val(fehrenheitValue);
}

function fehrenheitToCelius(e){
  e.preventDefault();
  fehrenheitValue();
  var trueFehrenheitValue = fehrenheitValue();
  convertFToC(trueFehrenheitValue);
  var finalCelius = convertFToC(trueFehrenheitValue);
  displayCeliusResult(finalCelius);

}

function fehrenheitValue(){
  var rawFehrenheit= $('#fehrenheit').val();
  var floatFehrenheit= parseInt(rawFehrenheit);
  return floatFehrenheit;
  convertFToC(floatFehrenheit);
}

function convertFToC(trueFehrenheitValue){
  celsiusValue = (trueFehrenheitValue-32) * (5/9);
  console.log(celsiusValue);
  return celsiusValue;
}

function displayCeliusResult(finalCelius){
  $('#celsius').val(celsiusValue);
}
