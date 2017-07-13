function toCrypt(myPhrase){
  // console.log("sup");
  var output = "aaa";
  output = myPhrase.replace(" ", "");
  return output;
}


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var input = $("input#myPhrase").val();
    var output = toCrypt(input);
    $("#result").text(output);
    console.log("Passed");
  });
});
