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
    for(var j=0; j <= num2; j++){
      // alert(i + ", " + j);
      // alert((i+ (j*num2)));
      if((i+ (j*num2)) >= length){
        // alert("breaking");
        break;
      }
      output += newPhrase[i + (j*num2)];
      // alert((i + (j*num2)));
    }
  }

  var output2 = "";
  for(var i = 0; i < (length/5); i++){
    output2 += output.slice((i*5), ((i*5)+5)) + " ";
    // debugger;
    // alert(output2);
    if((i+1) === (length/5)){
      if((length%5) !== 0){
        var num3 = length - ((i+1)*5);
        output2 += output.slice(((i+1)*5), (((i+1)*5) +num));
      }
    }
  }
  return output2;
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
