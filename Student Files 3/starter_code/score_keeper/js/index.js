$(document).ready(start);

var result = 10;

function start(){
  $("#zero").click(reset);
  $("#add5").click(addFiveToResult);
  $("#add10").click(addTenToResult);
  $("#sub1").click(subOneToResult);
  writeScore();
}

function writeScore(){
  $("#result").text(result);
}

//Takes whatever result is, and
//updates the page.
function reset(){
  result = 0;
  writeScore();
}

function addFiveToResult(){
  result = result + 5;
  validateResult();
  writeScore();
}

function addTenToResult(){
  result = result + 10;
  validateResult();
  writeScore();
}

function subOneToResult(){
    result = result - 1;
    validateResult();
    writeScore();
  }

  function validateResult(){
    if(result < 0){
      result = 0;
    }
  }
