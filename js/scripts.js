var reverseStr = function(string) {
  var resultStr = string.split("").reverse().join("");
  return resultStr;
}


$(document).ready(function() {
  $("form#input").submit(function(event){
    event.preventDefault();
    var inputStr = $("#inputStr").val();
    console.log(inputStr);
    if (inputStr === reverseStr(inputStr)) {
      $("#result").empty();
    $("#result").append("a palindrome!");
    }
    else {
      $("#result").empty();
      $("#result").append("not a palindrome!");
    }
    $("#result").show();
  });
});
