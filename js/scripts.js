//back end

function toCrypt(myPhrase){
  // console.log("sup");
  var output = "";
  var newPhrase = "";
  newPhrase = myPhrase.replace(/[\s\,\'\.\?\!]/g, '');  /* This replaces common punctuation to spaces*/
  newPhrase = newPhrase.toLowerCase();    /* This lower cases all letters in the string */
  var length = newPhrase.length;  /* This determins the length of the string minus non-letter characters */
  var num = Math.sqrt(length);    /* This takes the square root of the length */
  var round = Math.round(num);    /* This rounds the number of the square root of the string to the whole number */
  var num1 = 0;       /* Compare square root of string equal to rounded root to determin x- & y- axis variables of "grid"  */
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
                                            /* This function loop mixes the string  */
  for(var i=0; i < num2; i++){              /* i = row & j = column */
    for(var j=0; j <= num2; j++){           /* This runs through all  */
      // alert(i + ", " + j);
      // alert((i+ (j*num2)));
      if((i+ (j*num2)) >= length){        /* return to parent loop after final column is reached */
        // alert("breaking");
        break;
      }
      output += newPhrase[i + (j*num2)];  /* Takes element at the position*/
      // alert((i + (j*num2)));           /* and adds to pervious loop results  */

    }
  }

  var output2 = "";   /* This block function adds spaces after every 5 characters */
  for(var i = 0; i < (length/5); i++){
    output2 += output.slice((i*5), ((i*5)+5)) + " ";
    // debugger;
    // alert(output2);
    if((i+1) === (length/5)){
      if((length%5) !== 0){                     /* if division remainder does not equal 0 */
        var num3 = length - ((i+1)*5);          /* run slice method on remaining elements */
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
