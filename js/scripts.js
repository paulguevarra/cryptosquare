//back end

function toCrypt(myPhrase){
  // console.log("sup");
  var output = "";
  var newPhrase = "";
  newPhrase = myPhrase.replace(/[\s\,\'\.\?\!]/g, '');
  newPhrase = newPhrase.toLowerCase();
  var length = newPhrase.length;
  var num = Math.sqrt(length);
  var round = Math.round(num);
  var num1 = 0;
  var num2 = 0;
  if(num === round){
  	num1 = round;
    num2 = round;
  }else if(num > round){
  	num1 = round + 1;
    num2 = round;
  }else if(num < round){
  	num1 = round;
    num2 = round;
  }else{
    alert("why am i here?");
  }
  for(var i=0; i < num2; i++){
    for(var j=0; j < num2; j++){
      if((i+ (j*num2)) === length){
        break;
      }
      output += myPhrase[i + (j*num2)];
      alert(output);
    }
  }
  alert(num1 + "x" + num2);
  return output;
}

//front end
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var input = $("input#myPhrase").val();
    var output = toCrypt(input);
    $("#result").text(output);
    console.log("Passed");
  });
});
