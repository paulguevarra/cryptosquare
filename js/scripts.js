//back end
// function removePunc(myPhrase){
//   var length = myPhrase.length;
//   var output = "";
//   for(var i = 0; i < length; i++){
//     if(myPhrase[i] === " " || myPhrase[i] === "'" || myPhrase[i] === "!" || myPhrase[i] === "," || myPhrase[i] === "."){
//       output = myPhrase.split(0, i);
//       myPhrase.split(i+1, )
//     }
//   }
//   return myPhrase;
// }

function toCrypt(myPhrase){
  // console.log("sup");
  var output = "aaa";
  output = myPhrase.replace(/[\s\,\'\.\?\!]/g, '');
  output = output.toLowerCase();
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
