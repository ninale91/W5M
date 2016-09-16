 $(document).ready(start);

 function start() {
   $('#submit').click(compareNumbers);
 }

function compareNumbers() {
  var a = $('#a').val();
  a = parseInt(a);

  var b = $('#b').val();
  b = parseInt(b);

  if(a < b) {
    setAsLessThan();
  } else if (a > b) {
    setAsMoreThan();
  } else if (a == b) {
    setAsEqualTo();
  } else {
    alert('something is very wrong');
  }
}

function setAsLessThan() {
  $('#comparison').text('<');
}

function setAsMoreThan() {
  $('#comparison').text('>');
}

function setAsEqualTo() {
  $('#comparison').text('==');
}
