var reverseStr = function(string) {
  if (string.includes(" ")) {
    var noSpaceStr =string.split(" ").join("")
    var resultStr = noSpaceStr.split("").reverse().join("").toUpperCase();
    return resultStr;
  }
  else {
    var resultStr = string.split("").reverse().join("").toUpperCase();
    return resultStr;
  }
}
$(document).ready(function() {
  $("form#input").submit(function(event){
    event.preventDefault();
    var inputStr = $("#inputStr").val().split(" ").join("").toUpperCase();
    console.log(reverseStr(inputStr));

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
